"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MessageSquare,
  Paperclip,
  Calendar,
  GripVertical,
  MoreHorizontal,
  Circle,
  Clock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Tag,
  Clock3,
  Edit,
  Trash2,
  Copy,
  Archive,
} from "lucide-react";
import { Task, TaskPriority, TaskStatus } from "@/types/kanban";
import { cn } from "@/lib/utils";
import { useKanbanStore } from "@/lib/store/kanban";
import { useDraggable } from "@/lib/utils/simple-dnd";

// Ultra-simple priority configuration
const priorityConfig: Record<TaskPriority, {
  label: string;
  className: string;
  icon: React.ComponentType<{ className?: string }>;
}> = {
  low: {
    label: "منخفض",
    className: "bg-muted text-muted-foreground",
    icon: Circle,
  },
  medium: {
    label: "متوسط",
    className: "bg-muted text-muted-foreground",
    icon: Clock3,
  },
  high: {
    label: "عالي",
    className: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400",
    icon: AlertTriangle,
  },
  urgent: {
    label: "عاجل",
    className: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
    icon: AlertTriangle,
  },
};

// Status icons
const statusIcons: Record<TaskStatus, React.ComponentType<{ className?: string }>> = {
  todo: Circle,
  inprogress: Clock,
  review: Eye,
  done: CheckCircle2,
};

interface TaskCardProps {
  task: Task;
  isSelected?: boolean;
  onSelect?: (taskId: string) => void;
}

export default function TaskCard({ task, isSelected = false, onSelect }: TaskCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { deleteTask, updateTask } = useKanbanStore();

  // Use simple drag and drop
  const dragProps = useDraggable({
    id: task.id,
    type: 'task',
    data: task,
  });

  const StatusIcon = statusIcons[task.status];
  const PriorityIcon = priorityConfig[task.priority].icon;

  // Safe date formatting
  const formatDate = (date: Date | string) => {
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      if (!dateObj || isNaN(dateObj.getTime())) {
        return 'غير محدد';
      }
      
      return new Intl.DateTimeFormat('ar-SA', {
        month: 'short',
        day: 'numeric',
      }).format(dateObj);
    } catch {
      return 'غير محدد';
    }
  };

  // Safe overdue check
  const isOverdue = (() => {
    try {
      const dueDate = typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate;
      if (!dueDate || isNaN(dueDate.getTime())) return false;
      return dueDate < new Date() && task.status !== 'done';
    } catch {
      return false;
    }
  })();

  // Safe assignee handling
  const getAssigneeName = () => {
    if (!task.assignee) return 'غير محدد';
    if (typeof task.assignee === 'string') return task.assignee;
    if (typeof task.assignee === 'object' && task.assignee.name) return task.assignee.name;
    return 'غير محدد';
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleArchive = () => {
    updateTask(task.id, { isArchived: true });
  };

  const handleDuplicate = () => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      title: `${task.title} (نسخة)`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    useKanbanStore.getState().addTask(newTask);
  };

  return (
    <div 
      draggable={true}
      onDragStart={dragProps.onDragStart}
      style={dragProps.style}
      className={cn(
        "group relative cursor-grab active:cursor-grabbing",
        isSelected && "ring-2 ring-ring ring-offset-2"
      )}
    >
      <Card
        className={cn(
          "mb-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
          "border-border/50 bg-card/50 backdrop-blur-sm",
          isHovered && "shadow-xl",
          isOverdue && "border-l-4 border-l-red-500 dark:border-l-red-400",
          task.status === 'done' && "opacity-75 bg-muted/30"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect?.(task.id)}
      >
        <CardContent className="p-4 space-y-3">
          {/* Header with priority and actions */}
          <div className="flex items-start justify-between">
            <Badge 
              variant="outline" 
              className={cn(
                "text-xs font-medium border-0",
                priorityConfig[task.priority].className
              )}
            >
              <PriorityIcon className="w-3 h-3 ml-1" />
              {priorityConfig[task.priority].label}
            </Badge>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-muted/80"
                >
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => {}}>
                  <Edit className="w-3 h-3 ml-2" />
                  تعديل
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDuplicate}>
                  <Copy className="w-3 h-3 ml-2" />
                  نسخ
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleArchive}>
                  <Archive className="w-3 h-3 ml-2" />
                  أرشفة
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                  <Trash2 className="w-3 h-3 ml-2" />
                  حذف
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Title and status */}
          <div className="flex items-start gap-2">
            <StatusIcon className={cn(
              "h-4 w-4 mt-0.5 flex-shrink-0",
              task.status === 'done' ? "text-green-500" : "text-muted-foreground"
            )} />
            <div className="flex-1 min-w-0">
              <h3 className={cn(
                "font-medium text-sm leading-tight text-card-foreground",
                task.status === 'done' && "line-through text-muted-foreground"
              )}>
                {task.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          {task.description && (
            <p className="text-xs text-muted-foreground/80 line-clamp-2 leading-relaxed">
              {task.description}
            </p>
          )}

          {/* Tags */}
          {task.tags && task.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {task.tags.slice(0, 2).map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs px-2 py-0.5 h-5 bg-muted/30 border-muted-foreground/20"
                >
                  <Tag className="w-3 h-3 ml-1" />
                  {tag}
                </Badge>
              ))}
              {task.tags.length > 2 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5 h-5 bg-muted/30 border-muted-foreground/20">
                  +{task.tags.length - 2}
                </Badge>
              )}
            </div>
          )}

          {/* Assignee and due date */}
          <div className="flex items-center justify-between text-xs text-muted-foreground/80">
            <div className="flex items-center gap-2">
              <Avatar className="w-5 h-5 ring-1 ring-muted-foreground/10">
                <AvatarImage src={typeof task.assignee === 'object' ? task.assignee?.avatar : undefined} />
                <AvatarFallback className="text-xs bg-muted/50">
                  {task.assignee && typeof task.assignee === 'object' && task.assignee.name ? 
                    String(task.assignee.name).substring(0, 2).toUpperCase() : '??'}
                </AvatarFallback>
              </Avatar>
              <span className="truncate max-w-16">
                {getAssigneeName()}
              </span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              isOverdue && "text-red-500 dark:text-red-400 font-medium"
            )}>
              <Calendar className="h-3 w-3" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          </div>

          {/* Footer with stats */}
          <div className="flex items-center justify-between pt-2 border-t border-border/30">
            <div className="flex items-center gap-3 text-xs text-muted-foreground/60">
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span>{task.comments?.length || 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <Paperclip className="h-3 w-3" />
                <span>{task.attachments?.length || 0}</span>
              </div>
              {task.estimatedHours && (
                <div className="flex items-center gap-1">
                  <Clock3 className="h-3 w-3" />
                  <span>{task.estimatedHours}h</span>
                </div>
              )}
            </div>
            <GripVertical className="h-4 w-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
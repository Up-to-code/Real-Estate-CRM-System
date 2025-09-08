"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  ChevronDown, 
  ChevronUp, 
  Circle,
  Clock,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Column, Task, TaskStatus } from "@/types/kanban";
import TaskCard from "./TaskCard";
import { cn } from "@/lib/utils";
import { useKanbanStore } from "@/lib/store/kanban";
import { useDroppable } from "@/lib/utils/simple-dnd";

// Status icons mapping
const statusIcons: Record<TaskStatus, React.ComponentType<{ className?: string }>> = {
  todo: Circle,
  inprogress: Clock,
  review: Eye,
  done: CheckCircle2,
};

interface KanbanColumnProps {
  column: Column;
  onAddTask: (status: TaskStatus) => void;
}

export default function KanbanColumn({ column, onAddTask }: KanbanColumnProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleColumnCollapse, moveTask } = useKanbanStore();
  
  // Use simple droppable
  const dropProps = useDroppable({
    id: column.id,
    type: 'column',
    accepts: ['task'],
  }, (item, zoneId) => {
    // Handle task drop
    if (item.type === 'task') {
      const task = item.data as Task;
      if (task.status !== zoneId) {
        moveTask(task.id, task.status, zoneId as TaskStatus);
      }
    }
  });

  const StatusIcon = statusIcons[column.id];
  const taskCount = column.tasks.length;
  const visibleTasks = column.isCollapsed ? [] : column.tasks;

  const getColumnHeaderColor = (status: TaskStatus) => {
    switch (status) {
      case 'todo':
        return 'bg-muted-foreground/30';
      case 'inprogress':
        return 'bg-blue-500/80';
      case 'review':
        return 'bg-orange-500/80';
      case 'done':
        return 'bg-green-500/80';
      default:
        return 'bg-muted-foreground/30';
    }
  };

  return (
    <div className="flex-1 min-w-[280px] max-w-[320px]">
      <Card
        onDragOver={dropProps.onDragOver}
        onDragLeave={dropProps.onDragLeave}
        onDrop={dropProps.onDrop}
        style={dropProps.style}
        className={cn(
          "h-full transition-all duration-300 group",
          "border-border/30 bg-card/30 backdrop-blur-sm shadow-sm",
          isHovered && "shadow-lg bg-card/50"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-3 h-3 rounded-full",
                getColumnHeaderColor(column.id)
              )} />
              <div className="flex items-center gap-2">
                <StatusIcon className="h-4 w-4 text-muted-foreground/70" />
                <h2 className="font-semibold text-sm text-card-foreground">
                  {column.title}
                </h2>
              </div>
              <Badge
                variant="outline"
                className="text-xs font-medium bg-muted/30 border-muted-foreground/20"
              >
                {taskCount}
              </Badge>
            </div>
            
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-muted/80"
                onClick={() => toggleColumnCollapse(column.id)}
              >
                {column.isCollapsed ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronUp className="h-3 w-3" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-muted/80"
                onClick={() => onAddTask(column.id)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div
            className={cn(
              "min-h-[200px] transition-all duration-300",
              column.isCollapsed && "min-h-0"
            )}
          >
            {!column.isCollapsed && (
              <>
                <div className="space-y-2">
                  {visibleTasks.map((task: Task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>

                {taskCount === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mb-3">
                      <StatusIcon className="h-6 w-6 text-muted-foreground/50" />
                    </div>
                    <p className="text-sm text-muted-foreground/80 mb-1">
                      لا توجد مهام
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      اسحب مهام جديدة هنا
                    </p>
                  </div>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center mt-3 text-muted-foreground/70 hover:bg-muted/50 hover:text-muted-foreground transition-all duration-200"
                  onClick={() => onAddTask(column.id)}
                >
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة مهمة
                </Button>
              </>
            )}

            {column.isCollapsed && taskCount > 0 && (
              <div className="flex items-center justify-center py-4">
                <Badge variant="outline" className="text-xs bg-muted/30 border-muted-foreground/20">
                  {taskCount} مهمة مخفية
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
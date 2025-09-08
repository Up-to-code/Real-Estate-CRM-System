export type TaskStatus = "todo" | "inprogress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskCategory = "development" | "design" | "marketing" | "support" | "other";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedBy: User;
  uploadedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  assignee: User;
  createdBy: User;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
  attachments: Attachment[];
  tags: string[];
  estimatedHours?: number;
  actualHours?: number;
  isArchived: boolean;
}

export interface Column {
  id: TaskStatus;
  title: string;
  description?: string;
  color: string;
  icon: string;
  tasks: Task[];
  isCollapsed?: boolean;
  maxTasks?: number;
}

export interface KanbanFilters {
  searchQuery: string;
  statusFilter: 'all' | TaskStatus;
  priorityFilter: 'all' | TaskPriority;
  assigneeFilter: 'all' | string;
  categoryFilter: 'all' | TaskCategory;
  dueDateFilter: 'all' | 'overdue' | 'today' | 'week' | 'month';
}

export interface KanbanState {
  columns: Column[];
  filters: KanbanFilters;
  selectedTasks: string[];
  isDragging: boolean;
  activeTask: Task | null;
}
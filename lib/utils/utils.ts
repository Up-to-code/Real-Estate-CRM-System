import {
    Circle,
    Clock,
    AlertCircle,
    CheckCircle2,
  } from "lucide-react";
  
  // Priority configuration
  export const priorityConfig = {
    low: { label: "منخفض", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
    medium: { label: "متوسط", className: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" },
    high: { label: "عالي", className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
  };
  
  // Status icons
  export const statusIcons = {
    todo: Circle,
    inprogress: Clock,
    review: AlertCircle,
    done: CheckCircle2,
  };
  
  // CN utility for merging class names (like clsx)
  export function cn(...classes: (string | undefined | null | boolean)[]) {
    return classes.filter(Boolean).join(" ");
  }
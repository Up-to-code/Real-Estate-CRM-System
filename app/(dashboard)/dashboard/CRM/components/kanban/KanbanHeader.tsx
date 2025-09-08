"use client";

import { Button } from "@/components/ui/button";
import { Plus, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { TaskStatus } from "@/types/kanban";

interface KanbanHeaderProps {
  onAddTask: (status?: TaskStatus) => void;
  selectedCount?: number;
  onClearSelection?: () => void;
}

export default function KanbanHeader({
  onAddTask,
  selectedCount = 0,
  onClearSelection,
}: KanbanHeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-card-foreground bg-gradient-to-r from-card-foreground to-muted-foreground bg-clip-text">
          لوحة المهام
        </h1>
        <p className="text-muted-foreground/80 mt-1">
          نظرة عامة على جميع المهام ومستوى تقدمها
        </p>
      </div>

      <div className="flex items-center mt-4 md:mt-0 gap-2">
        {selectedCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearSelection}
            className="bg-background/50 border-border/50 hover:bg-muted/50 transition-all duration-200"
          >
            إلغاء التحديد ({selectedCount})
          </Button>
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-background/50 border-border/50 hover:bg-muted/50 transition-all duration-200"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        <Button 
          onClick={() => onAddTask()}
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <Plus className="h-4 w-4 ml-2" />
          مهمة جديدة
        </Button>
      </div>
    </div>
  );
}
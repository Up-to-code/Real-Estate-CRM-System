"use client";

import { useState } from "react";
import KanbanHeader from "./KanbanHeader";
import KanbanFilters from "./KanbanFilters";
import KanbanColumn from "./KanbanColumn";
import { TaskStatus } from "@/types/kanban";
import { useKanbanStore } from "@/lib/store/kanban";

export default function KanbanBoard() {
  const {
    getFilteredColumns,
    selectedTasks,
    clearSelection,
  } = useKanbanStore();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState<TaskStatus>("todo");

  const columns = getFilteredColumns();

  const handleAddTask = (status?: TaskStatus) => {
    if (status) {
      setDefaultStatus(status);
    }
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <KanbanHeader
        onAddTask={handleAddTask}
        selectedCount={selectedTasks.length}
        onClearSelection={clearSelection}
      />

      <KanbanFilters />

      <div className="flex gap-4 overflow-x-auto pb-6 min-h-[calc(100vh-300px)]">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            onAddTask={handleAddTask}
          />
        ))}
      </div>

      {/* Task Creation Dialog - Placeholder for now */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background border rounded-lg p-6 w-full max-w-md shadow-xl">
            <h3 className="text-lg font-semibold mb-4">إنشاء مهمة جديدة</h3>
            <p className="text-muted-foreground mb-4">
              سيتم إضافة المهمة إلى: {defaultStatus}
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setDialogOpen(false)}
                className="px-4 py-2 text-sm border rounded-md hover:bg-accent transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={() => setDialogOpen(false)}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                إنشاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Selection Actions */}
      {selectedTasks.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-background border rounded-lg shadow-lg px-4 py-2 flex items-center gap-3">
            <span className="text-sm font-medium">
              {selectedTasks.length} مهمة محددة
            </span>
            <button
              onClick={clearSelection}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              إلغاء التحديد
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
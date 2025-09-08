"use client";

import { Suspense } from "react";
import KanbanBoard from "./components/kanban/KanbanBoard";
import Loading from "./components/kanban/loading";

export default function KanbanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4 md:p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<Loading />}>
          <KanbanBoard />
        </Suspense>
      </div>
    </div>
  );
}
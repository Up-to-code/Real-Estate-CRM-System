"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { useKanbanStore } from "@/lib/store/kanban";
import { TaskStatus, TaskPriority, TaskCategory } from "@/types/kanban";

export default function KanbanFilters() {
  const { filters, setFilters, resetFilters } = useKanbanStore();

  const handleSearchChange = (value: string) => {
    setFilters({ searchQuery: value });
  };

  const handleStatusFilterChange = (value: string) => {
    setFilters({ statusFilter: value as 'all' | TaskStatus });
  };

  const handlePriorityFilterChange = (value: string) => {
    setFilters({ priorityFilter: value as 'all' | TaskPriority });
  };

  const handleCategoryFilterChange = (value: string) => {
    setFilters({ categoryFilter: value as 'all' | TaskCategory });
  };

  const handleDueDateFilterChange = (value: string) => {
    setFilters({ dueDateFilter: value as 'all' | 'overdue' | 'today' | 'week' | 'month' });
  };

  return (
    <Card className="mb-6 border-border/30 bg-card/30 backdrop-blur-sm shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
            <Input
              placeholder="ابحث في المهام..."
              className="pr-10 bg-background/50 border-border/50 focus:border-border transition-all duration-200"
              value={filters.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          <Select value={filters.statusFilter} onValueChange={handleStatusFilterChange}>
            <SelectTrigger className="md:w-[120px] bg-background/50 border-border/50">
              <SelectValue placeholder="الحالة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الحالات</SelectItem>
              <SelectItem value="todo">قيد الانتظار</SelectItem>
              <SelectItem value="inprogress">قيد التنفيذ</SelectItem>
              <SelectItem value="review">قيد المراجعة</SelectItem>
              <SelectItem value="done">مكتمل</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.priorityFilter} onValueChange={handlePriorityFilterChange}>
            <SelectTrigger className="md:w-[120px] bg-background/50 border-border/50">
              <SelectValue placeholder="الأولوية" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الأولويات</SelectItem>
              <SelectItem value="low">منخفض</SelectItem>
              <SelectItem value="medium">متوسط</SelectItem>
              <SelectItem value="high">عالي</SelectItem>
              <SelectItem value="urgent">عاجل</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.categoryFilter} onValueChange={handleCategoryFilterChange}>
            <SelectTrigger className="md:w-[120px] bg-background/50 border-border/50">
              <SelectValue placeholder="الفئة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الفئات</SelectItem>
              <SelectItem value="development">تطوير</SelectItem>
              <SelectItem value="design">تصميم</SelectItem>
              <SelectItem value="marketing">تسويق</SelectItem>
              <SelectItem value="support">دعم</SelectItem>
              <SelectItem value="other">أخرى</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.dueDateFilter} onValueChange={handleDueDateFilterChange}>
            <SelectTrigger className="md:w-[120px] bg-background/50 border-border/50">
              <SelectValue placeholder="التاريخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع التواريخ</SelectItem>
              <SelectItem value="overdue">متأخر</SelectItem>
              <SelectItem value="today">اليوم</SelectItem>
              <SelectItem value="week">هذا الأسبوع</SelectItem>
              <SelectItem value="month">هذا الشهر</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            onClick={resetFilters}
            className="bg-background/50 border-border/50 hover:bg-muted/50 transition-all duration-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
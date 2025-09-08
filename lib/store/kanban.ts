import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { 
  Column, 
  Task, 
  TaskStatus, 
  TaskPriority, 
  TaskCategory, 
  KanbanFilters, 
  KanbanState,
  User 
} from '@/types/kanban';

// Mock users for demo
const mockUsers: User[] = [
  { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', role: 'developer' },
  { id: '2', name: 'سارة أحمد', email: 'sara@example.com', role: 'designer' },
  { id: '3', name: 'محمد علي', email: 'mohamed@example.com', role: 'manager' },
  { id: '4', name: 'فاطمة حسن', email: 'fatima@example.com', role: 'developer' },
  { id: '5', name: 'خالد عبدالله', email: 'khalid@example.com', role: 'admin' },
];

// Initial columns configuration
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'قيد الانتظار',
    description: 'المهام الجديدة التي تحتاج إلى معالجة',
    color: 'bg-gray-500',
    icon: 'Circle',
    tasks: [],
    isCollapsed: false,
  },
  {
    id: 'inprogress',
    title: 'قيد التنفيذ',
    description: 'المهام التي يتم العمل عليها حالياً',
    color: 'bg-blue-500',
    icon: 'Clock',
    tasks: [],
    isCollapsed: false,
  },
  {
    id: 'review',
    title: 'قيد المراجعة',
    description: 'المهام التي تحتاج إلى مراجعة واختبار',
    color: 'bg-amber-500',
    icon: 'Eye',
    tasks: [],
    isCollapsed: false,
  },
  {
    id: 'done',
    title: 'مكتمل',
    description: 'المهام المنجزة بنجاح',
    color: 'bg-green-500',
    icon: 'CheckCircle',
    tasks: [],
    isCollapsed: false,
  },
];

// Sample tasks
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'تصميم واجهة المستخدم الرئيسية',
    description: 'إنشاء تصميم حديث ومتجاوب للوحة التحكم الرئيسية مع التركيز على تجربة المستخدم',
    status: 'todo',
    priority: 'high',
    category: 'design',
    assignee: mockUsers[1],
    createdBy: mockUsers[4],
    dueDate: new Date('2024-01-20'),
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    comments: [],
    attachments: [],
    tags: ['UI/UX', 'Dashboard', 'Responsive'],
    estimatedHours: 16,
    isArchived: false,
  },
  {
    id: '2',
    title: 'إعداد قاعدة البيانات',
    description: 'تهيئة جداول المستخدمين والصلاحيات مع إعداد العلاقات والقيود',
    status: 'inprogress',
    priority: 'high',
    category: 'development',
    assignee: mockUsers[0],
    createdBy: mockUsers[2],
    dueDate: new Date('2024-01-18'),
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-12'),
    comments: [],
    attachments: [],
    tags: ['Database', 'Backend', 'Schema'],
    estimatedHours: 24,
    actualHours: 12,
    isArchived: false,
  },
  {
    id: '3',
    title: 'تطوير واجهة API',
    description: 'بناء نقاط نهاية RESTful API للتعامل مع البيانات والعمليات',
    status: 'review',
    priority: 'medium',
    category: 'development',
    assignee: mockUsers[3],
    createdBy: mockUsers[2],
    dueDate: new Date('2024-01-15'),
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-14'),
    comments: [],
    attachments: [],
    tags: ['API', 'Backend', 'REST'],
    estimatedHours: 20,
    actualHours: 18,
    isArchived: false,
  },
  {
    id: '4',
    title: 'اختبار النظام الشامل',
    description: 'إجراء اختبارات شاملة للنظام للتأكد من جودة الأداء والوظائف',
    status: 'done',
    priority: 'medium',
    category: 'development',
    assignee: mockUsers[4],
    createdBy: mockUsers[2],
    dueDate: new Date('2024-01-12'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-12'),
    comments: [],
    attachments: [],
    tags: ['Testing', 'Quality', 'Performance'],
    estimatedHours: 12,
    actualHours: 10,
    isArchived: false,
  },
];

// Initialize columns with sample tasks
const initializeColumns = (): Column[] => {
  return initialColumns.map(column => ({
    ...column,
    tasks: sampleTasks.filter(task => task.status === column.id)
  }));
};

interface KanbanStore extends KanbanState {
  // Actions
  setColumns: (columns: Column[]) => void;
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  moveTask: (taskId: string, fromStatus: TaskStatus, toStatus: TaskStatus) => void;
  setFilters: (filters: Partial<KanbanFilters>) => void;
  resetFilters: () => void;
  toggleColumnCollapse: (columnId: TaskStatus) => void;
  selectTask: (taskId: string) => void;
  deselectTask: (taskId: string) => void;
  clearSelection: () => void;
  setDragging: (isDragging: boolean) => void;
  setActiveTask: (task: Task | null) => void;
  getFilteredColumns: () => Column[];
  getTaskById: (taskId: string) => Task | undefined;
  getColumnById: (columnId: TaskStatus) => Column | undefined;
  filters: KanbanFilters;
  selectedTasks: string[];
}

const initialFilters: KanbanFilters = {
  searchQuery: '',
  statusFilter: 'all',
  priorityFilter: 'all',
  assigneeFilter: 'all',
  categoryFilter: 'all',
  dueDateFilter: 'all',
};

export const useKanbanStore = create<KanbanStore>()(
  devtools(
    persist(
      (set, get) => ({
        columns: initializeColumns(),
        filters: initialFilters,
        selectedTasks: [],
        isDragging: false,
        activeTask: null,

        setColumns: (columns) => set({ columns }),

        addTask: (task) => set((state) => ({
          columns: state.columns.map(column =>
            column.id === task.status
              ? { ...column, tasks: [...column.tasks, task] }
              : column
          )
        })),

        updateTask: (taskId, updates) => set((state) => ({
          columns: state.columns.map(column => ({
            ...column,
            tasks: column.tasks.map(task =>
              task.id === taskId
                ? { ...task, ...updates, updatedAt: new Date() }
                : task
            )
          }))
        })),

        deleteTask: (taskId) => set((state) => ({
          columns: state.columns.map(column => ({
            ...column,
            tasks: column.tasks.filter(task => task.id !== taskId)
          })),
          selectedTasks: state.selectedTasks.filter(id => id !== taskId)
        })),

        moveTask: (taskId, fromStatus, toStatus) => set((state) => {
          const task = state.columns
            .find(col => col.id === fromStatus)
            ?.tasks.find(t => t.id === taskId);

          if (!task) return state;

          const updatedTask = { ...task, status: toStatus, updatedAt: new Date() };

          return {
            columns: state.columns.map(column => {
              if (column.id === fromStatus) {
                return { ...column, tasks: column.tasks.filter(t => t.id !== taskId) };
              }
              if (column.id === toStatus) {
                return { ...column, tasks: [...column.tasks, updatedTask] };
              }
              return column;
            })
          };
        }),

        setFilters: (filters) => set((state) => ({
          filters: { ...state.filters, ...filters }
        })),

        resetFilters: () => set({ filters: initialFilters }),

        toggleColumnCollapse: (columnId) => set((state) => ({
          columns: state.columns.map(column =>
            column.id === columnId
              ? { ...column, isCollapsed: !column.isCollapsed }
              : column
          )
        })),

        selectTask: (taskId) => set((state) => ({
          selectedTasks: [...state.selectedTasks, taskId]
        })),

        deselectTask: (taskId) => set((state) => ({
          selectedTasks: state.selectedTasks.filter(id => id !== taskId)
        })),

        clearSelection: () => set({ selectedTasks: [] }),

        setDragging: (isDragging) => set({ isDragging }),

        setActiveTask: (activeTask) => set({ activeTask }),

        getFilteredColumns: () => {
          const { columns, filters } = get();
          
          return columns.map(column => {
            let filteredTasks = column.tasks;

            // Filter by search query
            if (filters.searchQuery) {
              const query = filters.searchQuery.toLowerCase();
              filteredTasks = filteredTasks.filter(task =>
                task.title.toLowerCase().includes(query) ||
                task.description.toLowerCase().includes(query) ||
                task.tags.some(tag => tag.toLowerCase().includes(query))
              );
            }

            // Filter by priority
            if (filters.priorityFilter !== 'all') {
              filteredTasks = filteredTasks.filter(task => 
                task.priority === filters.priorityFilter
              );
            }

            // Filter by assignee
            if (filters.assigneeFilter !== 'all') {
              filteredTasks = filteredTasks.filter(task => 
                task.assignee.id === filters.assigneeFilter
              );
            }

            // Filter by category
            if (filters.categoryFilter !== 'all') {
              filteredTasks = filteredTasks.filter(task => 
                task.category === filters.categoryFilter
              );
            }

            // Filter by due date
            if (filters.dueDateFilter !== 'all') {
              const now = new Date();
              const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
              const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
              const monthFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

              filteredTasks = filteredTasks.filter(task => {
                const dueDate = new Date(task.dueDate);
                switch (filters.dueDateFilter) {
                  case 'overdue':
                    return dueDate < today;
                  case 'today':
                    return dueDate.getTime() === today.getTime();
                  case 'week':
                    return dueDate >= today && dueDate <= weekFromNow;
                  case 'month':
                    return dueDate >= today && dueDate <= monthFromNow;
                  default:
                    return true;
                }
              });
            }

            return { ...column, tasks: filteredTasks };
          });
        },

        getTaskById: (taskId) => {
          const { columns } = get();
          for (const column of columns) {
            const task = column.tasks.find(t => t.id === taskId);
            if (task) return task;
          }
          return undefined;
        },

        getColumnById: (columnId) => {
          const { columns } = get();
          return columns.find(col => col.id === columnId);
        },
      }),
      {
        name: 'kanban-storage',
        partialize: (state) => ({
          columns: state.columns,
          filters: state.filters,
        }),
        onRehydrateStorage: () => (state) => {
          if (state) {
            // Convert string dates back to Date objects after rehydration
            state.columns = state.columns.map(column => ({
              ...column,
              tasks: column.tasks.map(task => ({
                ...task,
                dueDate: task.dueDate ? new Date(task.dueDate) : new Date(),
                createdAt: task.createdAt ? new Date(task.createdAt) : new Date(),
                updatedAt: task.updatedAt ? new Date(task.updatedAt) : new Date(),
                // Ensure assignee is properly structured
                assignee: task.assignee && typeof task.assignee === 'object' ? task.assignee : {
                  id: '1',
                  name: 'غير محدد',
                  email: 'unknown@example.com',
                  role: 'developer'
                },
                createdBy: task.createdBy && typeof task.createdBy === 'object' ? task.createdBy : {
                  id: '1',
                  name: 'غير محدد',
                  email: 'unknown@example.com',
                  role: 'developer'
                },
                // Ensure arrays exist
                comments: Array.isArray(task.comments) ? task.comments : [],
                attachments: Array.isArray(task.attachments) ? task.attachments : [],
                tags: Array.isArray(task.tags) ? task.tags : [],
              }))
            }));
          }
        },
      }
    )
  )
);

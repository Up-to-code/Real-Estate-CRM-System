"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
} from "@/components/ui/command"
import {
  UserPlus,
  Home,
  ClipboardList,
  CalendarCheck2,
  Search,
  Settings,
  BarChart3,
  FileText,
  Phone,
  Mail,
  Users,
  DollarSign,
  MapPin,
  Bell,
} from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// 🎯 تعريف أنواع البيانات
interface SearchItem {
  id: string
  title: string
  description: string
  icon: keyof typeof ICONS
  color: keyof typeof COLORS
  route: string
  keywords: string[]
}

interface SearchGroup {
  title: string
  items: SearchItem[]
}

interface SearchData {
  [key: string]: SearchGroup
}

// 🎯 بيانات البحث الديناميكية
const searchData: SearchData = {
  quick: {
    title: "العمليات السريعة",
    items: [
      {
        id: "add-client",
        title: "إضافة عميل جديد",
        description: "تسجيل عميل جديد في النظام",
        icon: "UserPlus",
        color: "blue",
        route: "/clients/add",
        keywords: ["عميل", "زبون", "عضو", "تسجيل", "جديد"]
      },
      {
        id: "add-property",
        title: "إدراج عقار",
        description: "إضافة عقار للبيع أو الإيجار",
        icon: "Home",
        color: "green", 
        route: "/properties/add",
        keywords: ["عقار", "منزل", "شقة", "فيلا", "أرض", "مكتب"]
      },
      {
        id: "new-contract",
        title: "عقد جديد",
        description: "إنشاء عقد بيع أو إيجار",
        icon: "FileText",
        color: "purple",
        route: "/contracts/new", 
        keywords: ["عقد", "اتفاقية", "بيع", "إيجار", "توقيع"]
      },
      {
        id: "schedule-meeting",
        title: "جدولة موعد",
        description: "حجز موعد مع عميل",
        icon: "CalendarCheck2",
        color: "orange",
        route: "/appointments/new",
        keywords: ["موعد", "لقاء", "اجتماع", "زيارة", "جدولة"]
      }
    ]
  },
  
  management: {
    title: "الإدارة والمتابعة", 
    items: [
      {
        id: "crm-dashboard",
        title: "لوحة العملاء",
        description: "متابعة وإدارة علاقات العملاء",
        icon: "Users",
        color: "indigo",
        route: "/crm/dashboard",
        keywords: ["crm", "عملاء", "متابعة", "علاقات", "إدارة"]
      },
      {
        id: "financial-reports",
        title: "التقارير المالية",
        description: "عرض الإيرادات والمصروفات",
        icon: "DollarSign", 
        color: "emerald",
        route: "/reports/financial",
        keywords: ["تقارير", "مالية", "إيرادات", "مصروفات", "أرباح"]
      },
      {
        id: "property-analytics",
        title: "تحليلات العقارات",
        description: "إحصائيات وأداء العقارات",
        icon: "BarChart3",
        color: "cyan",
        route: "/analytics/properties", 
        keywords: ["تحليلات", "إحصائيات", "أداء", "بيانات"]
      },
      {
        id: "locations-map",
        title: "خريطة المواقع",
        description: "عرض العقارات على الخريطة",
        icon: "MapPin",
        color: "red",
        route: "/map/locations",
        keywords: ["خريطة", "مواقع", "عقارات", "جغرافي"]
      }
    ]
  },

  communication: {
    title: "التواصل والإشعارات",
    items: [
      {
        id: "phone-calls",
        title: "سجل المكالمات", 
        description: "إدارة المكالمات والمتابعة",
        icon: "Phone",
        color: "teal",
        route: "/calls/history",
        keywords: ["مكالمات", "هاتف", "اتصال", "متابعة"]
      },
      {
        id: "email-center",
        title: "مركز الرسائل",
        description: "إرسال واستقبال الرسائل",
        icon: "Mail",
        color: "violet",
        route: "/messages/inbox",
        keywords: ["رسائل", "ايميل", "بريد", "تواصل"]
      },
      {
        id: "notifications",
        title: "الإشعارات",
        description: "مراجعة التنبيهات والتذكيرات",
        icon: "Bell",
        color: "amber",
        route: "/notifications/all",
        keywords: ["إشعارات", "تنبيهات", "تذكيرات", "رسائل"]
      }
    ]
  },

  settings: {
    title: "الإعدادات والتخصيص",
    items: [
      {
        id: "system-settings",
        title: "إعدادات النظام",
        description: "تخصيص وضبط النظام",
        icon: "Settings", 
        color: "slate",
        route: "/settings/system",
        keywords: ["إعدادات", "تخصيص", "ضبط", "نظام", "تكوين"]
      }
    ]
  }
}

// خريطة الأيقونات
const ICONS = {
  UserPlus, Home, ClipboardList, CalendarCheck2, Search, Settings,
  BarChart3, FileText, Phone, Mail, Users, DollarSign, MapPin, Bell
} as const

// ألوان الأيقونات
const COLORS = {
  blue: "bg-blue-500/20 text-blue-400",
  green: "bg-green-500/20 text-green-400", 
  purple: "bg-purple-500/20 text-purple-400",
  orange: "bg-orange-500/20 text-orange-400",
  indigo: "bg-indigo-500/20 text-indigo-400",
  emerald: "bg-emerald-500/20 text-emerald-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  red: "bg-red-500/20 text-red-400",
  teal: "bg-teal-500/20 text-teal-400",
  violet: "bg-violet-500/20 text-violet-400", 
  amber: "bg-amber-500/20 text-amber-400",
  slate: "bg-slate-500/20 text-slate-400",
} as const

export function SearchBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  // اختصار لوحة المفاتيح
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true) // فقط افتح النافذة، لا تقم بتبديل الحالة
      }
      
      // إغلاق النافذة عند الضغط على Escape
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // تصفية البيانات حسب البحث
  const filteredResults = React.useMemo((): SearchData => {
    if (!searchQuery.trim()) return searchData

    const results: SearchData = {}
    
    Object.entries(searchData).forEach(([key, group]) => {
      const matchedItems = group.items.filter((item: SearchItem) => {
        const query = searchQuery.toLowerCase()
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords.some((keyword: string) => keyword.includes(query))
        )
      })

      if (matchedItems.length > 0) {
        results[key] = { ...group, items: matchedItems }
      }
    })

    return results
  }, [searchQuery])

  // تنفيذ الإجراء
  const executeAction = React.useCallback((item: SearchItem): void => {
    setIsOpen(false)
    setSearchQuery("")
    
    // محاكاة التنقل
    setTimeout(() => {
      console.log(`التنقل إلى: ${item.route}`)
      alert(`تم الانتقال إلى: ${item.title}\nالمسار: ${item.route}`)
    }, 150)
  }, [])

  // عدد النتائج
  const totalResults = Object.values(filteredResults).reduce(
    (total, group) => total + group.items.length, 
    0
  )

  return (
    <>
      {/* زر التفعيل */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-[1.02]"
      >
        <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
        <span className="font-medium">البحث في النظام...</span>
        <kbd className="ml-auto rounded-md bg-white/20 px-2 py-1 text-xs font-mono">
          ⌘K
        </kbd>
      </button>

      {/* نافذة البحث */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/5 p-0 shadow-2xl backdrop-blur-3xl">
          
          <VisuallyHidden>
            <DialogTitle>مركز البحث والأوامر السريعة</DialogTitle>
          </VisuallyHidden>

          <Command shouldFilter={false} className="bg-transparent">
            
            {/* شريط البحث */}
            <div className="flex items-center border-b border-white/10 px-6 py-4">
              <Search className="ml-3 h-5 w-5 text-white/50" />
              <CommandInput
                placeholder="اكتب للبحث عن أي شيء في النظام..."
                className="flex-1 border-0 bg-transparent text-lg text-white placeholder-white/50 focus:ring-0"
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
              {searchQuery && (
                <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
                  {totalResults} نتيجة
                </div>
              )}
            </div>
            
            {/* قائمة النتائج */}
            <CommandList className="max-h-[500px] overflow-auto p-4 text-white">
              
              {totalResults === 0 ? (
                <CommandEmpty className="py-12 text-center">
                  <div className="text-white/60">
                    {searchQuery ? (
                      <>
                        <div className="mb-2 text-lg">لا توجد نتائج</div>
                        <div className="text-sm">جرب كلمات أخرى للبحث</div>
                      </>
                    ) : (
                      <>
                        <div className="mb-2 text-lg">ابدأ البحث</div>
                        <div className="text-sm">اكتب أي شيء للعثور على ما تحتاجه</div>
                      </>
                    )}
                  </div>
                </CommandEmpty>
              ) : (
                
                Object.entries(filteredResults).map(([groupKey, group]) => (
                  <CommandGroup key={groupKey} heading={group.title} className="mb-4">
                    <div className="space-y-2">
                      {group.items.map((item) => {
                        const IconComponent = ICONS[item.icon] || Search
                        const colorClass = COLORS[item.color] || COLORS.slate

                        return (
                          <CommandItem
                            key={item.id}
                            onSelect={() => executeAction(item)}
                            className="group flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all hover:bg-white/10 data-[selected=true]:bg-white/15"
                          >
                            {/* أيقونة الإجراء */}
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClass} transition-transform group-hover:scale-110`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            
                            {/* محتوى الإجراء */}
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-white group-hover:text-white/90">
                                {item.title}
                              </div>
                              <div className="text-sm text-white/60 group-hover:text-white/70">
                                {item.description}
                              </div>
                            </div>
                            
                            {/* مسار الصفحة */}
                            <div className="hidden sm:block text-xs font-mono text-white/40 group-hover:text-white/50">
                              {item.route}
                            </div>
                            
                            {/* سهم الانتقال */}
                            <div className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white/50">
                              ←
                            </div>
                          </CommandItem>
                        )
                      })}
                    </div>
                  </CommandGroup>
                ))
              )}
              
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
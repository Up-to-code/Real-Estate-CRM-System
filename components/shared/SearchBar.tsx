import React, { useState, useEffect, useMemo } from "react"
import { 
  Search, Home, Users, Calendar, Settings, BarChart3, FileText, 
  Phone, Mail, Bell, DollarSign, MapPin, UserPlus 
} from "lucide-react"

interface SearchItem {
  id: string
  title: string
  desc: string
  icon: string
  route: string
}

interface SearchGroup {
  title: string
  items: SearchItem[]
}

interface SearchData {
  [key: string]: SearchGroup
}

// Search data with categories
const searchData: SearchData = {
  quick: {
    title: "العمليات السريعة",
    items: [
      { id: "add-client", title: "إضافة عميل جديد", desc: "تسجيل عميل جديد في النظام", icon: "UserPlus", route: "/clients/add" },
      { id: "add-property", title: "إدراج عقار", desc: "إضافة عقار للبيع أو الإيجار", icon: "Home", route: "/properties/add" },
      { id: "new-contract", title: "عقد جديد", desc: "إنشاء عقد بيع أو إيجار", icon: "FileText", route: "/contracts/new" },
      { id: "schedule-meeting", title: "جدولة موعد", desc: "حجز موعد مع عميل", icon: "Calendar", route: "/appointments/new" }
    ]
  },
  management: {
    title: "الإدارة والمتابعة",
    items: [
      { id: "clients", title: "لوحة العملاء", desc: "متابعة وإدارة علاقات العملاء", icon: "Users", route: "/clients" },
      { id: "reports", title: "التقارير المالية", desc: "عرض الإيرادات والمصروفات", icon: "DollarSign", route: "/reports" },
      { id: "analytics", title: "تحليلات العقارات", desc: "إحصائيات وأداء العقارات", icon: "BarChart3", route: "/analytics" },
      { id: "map", title: "خريطة المواقع", desc: "عرض العقارات على الخريطة", icon: "MapPin", route: "/map" }
    ]
  },
  communication: {
    title: "التواصل",
    items: [
      { id: "calls", title: "سجل المكالمات", desc: "إدارة المكالمات والمتابعة", icon: "Phone", route: "/calls" },
      { id: "messages", title: "مركز الرسائل", desc: "إرسال واستقبال الرسائل", icon: "Mail", route: "/messages" },
      { id: "notifications", title: "الإشعارات", desc: "مراجعة التنبيهات والتذكيرات", icon: "Bell", route: "/notifications" }
    ]
  }
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const glassStyle = {
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  }

  const itemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
        setQuery("")
        setSelectedIndex(-1)
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Filter results
  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchData

    const results: SearchData = {}
    Object.entries(searchData).forEach(([key, group]) => {
      const matchedItems = group.items.filter((item: SearchItem) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
      if (matchedItems.length > 0) {
        results[key] = { ...group, items: matchedItems }
      }
    })
    return results
  }, [query])

  // Get all items as flat array for keyboard navigation
  const allItems = useMemo(() => {
    const items: SearchItem[] = []
    Object.values(filteredResults).forEach((group) => {
      items.push(...group.items)
    })
    return items
  }, [filteredResults])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex(prev => prev < allItems.length - 1 ? prev + 1 : 0)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : allItems.length - 1)
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault()
        executeAction(allItems[selectedIndex])
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, allItems, selectedIndex])

  const icons = { Search, Home, Users, Calendar, Settings, BarChart3, FileText, Phone, Mail, Bell, DollarSign, MapPin, UserPlus }

  const executeAction = (item: SearchItem) => {
    setIsOpen(false)
    setQuery("")
    setSelectedIndex(-1)
    alert(`التنقل إلى: ${item.title}\nالمسار: ${item.route}`)
  }

  const totalResults = Object.values(filteredResults).reduce((total: number, group: SearchGroup) => total + group.items.length, 0)

  // Get current item index for highlighting
  const getCurrentItemIndex = (item: SearchItem) => {
    return allItems.findIndex(i => i.id === item.id)
  }

  return (
    <>
      {/* Search Bar */}
      <button
        onClick={() => setIsOpen(true)}
        style={glassStyle}
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/90 hover:bg-[rgba(255,255,255,0.12)] w-80 h-[50px]"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left font-medium">البحث في النظام...</span>
        <kbd 
          style={itemStyle}
          className="px-2 py-1 text-xs font-mono rounded text-white/80"
        >
          ⌘K
        </kbd>
      </button>

      {/* Command Palette */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          
          <div 
            style={glassStyle}
            className="relative w-full max-w-2xl h-[500px] rounded-xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Search Input */}
            <div className="flex items-center border-b border-white/20 px-5 py-4">
              <Search className="h-5 w-5 text-white/70 mr-4" />
              <input
                type="text"
                placeholder="Search for anything..."
                className="flex-1 bg-transparent text-white/95 placeholder-white/50 border-0 outline-0 text-base font-medium"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(-1)
                }}
                autoFocus
              />
              {query && (
                <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full font-medium">
                  {totalResults}
                </span>
              )}
            </div>

            {/* Results */}
            <div className="flex-1 overflow-auto py-2">
              {totalResults === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-white/50">
                  <Search className="h-12 w-12 mb-4 opacity-30" />
                  <div className="text-base font-medium">
                    {query ? "No results found" : "Type to search"}
                  </div>
                  <div className="text-sm mt-1">
                    {query ? "Try different keywords" : "Find anything in your system"}
                  </div>
                </div>
              ) : (
                <div className="px-2">
                  {Object.entries(filteredResults).map(([groupKey, group]: [string, SearchGroup], groupIndex: number) => (
                    <div key={groupKey} className={groupIndex > 0 ? "mt-6" : ""}>
                      
                      {/* Group Title */}
                      <div className="text-xs font-semibold text-white/60 uppercase tracking-wide px-3 py-2 mb-1">
                        {group.title}
                      </div>

                      {/* Group Items */}
                      <div className="space-y-1">
                        {group.items.map((item: SearchItem) => {
                          const IconComponent = icons[item.icon as keyof typeof icons] || Search
                          const itemIndex = getCurrentItemIndex(item)
                          const isSelected = selectedIndex === itemIndex
                          return (
                            <div
                              key={item.id}
                              onClick={() => executeAction(item)}
                              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
                                isSelected ? 'bg-white/20' : 'hover:bg-white/10'
                              }`}
                            >
                              {/* Icon */}
                              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10">
                                <IconComponent className="h-4 w-4 text-white/90" />
                              </div>
                              
                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-white/95 text-sm leading-tight">
                                  {item.title}
                                </div>
                                <div className="text-xs text-white/50 leading-tight mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                              
                              {/* Route indicator */}
                              <div className="flex-shrink-0 text-xs text-white/30 font-mono bg-white/5 px-2 py-1 rounded border border-white/10">
                                {item.route.split('/').pop()}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/20 px-4 py-3 flex items-center justify-between text-xs text-white/50">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10">↵</kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10">↑↓</kbd>
                  to navigate
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10">esc</kbd>
                to close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
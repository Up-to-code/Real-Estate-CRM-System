/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FolderKanban,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  Database,
  MessageSquare,
  Shield,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Sidebar data structure
interface SidebarItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

interface SidebarFooter {
  copyright: string;
  status: string;
}

interface SidebarBrand {
  name: string;
}

interface SidebarData {
  brand: SidebarBrand;
  groups: SidebarGroup[];
  footer: SidebarFooter;
}

// Updated sidebar for Real Estate CRM
const sidebarData: SidebarData = {
  brand: {
    name: "لوحة التحكم",
  },
  groups: [
    {
      title: "الرئيسية",
      items: [
        { title: "نظرة عامة", href: "/dashboard", icon: "LayoutDashboard" },
        { title: "الإحصائيات", href: "/analytics", icon: "BarChart3" },
      ],
    },
    {
      title: "العقارات",
      items: [
        { title: "قائمة العقارات", href: "/properties", icon: "FolderKanban" },
        { title: "أضف عقار جديد", href: "/properties/new", icon: "FileText", badge: "جديد", badgeVariant: "secondary" },
        { title: "التقويم العقاري", href: "/calendar", icon: "Calendar" },
      ],
    },
    {
      title: "العملاء والمبيعات",
      items: [
        { title: "إدارة العملاء", href: "/clients", icon: "Users" },
        { title: "الرسائل / WhatsApp", href: "/messages", icon: "MessageSquare", badge: "3", badgeVariant: "default" },
        { title: "قاعدة البيانات", href: "/database", icon: "Database" },
      ],
    },
    {
      title: "الإعدادات",
      items: [
        { title: "الأمان", href: "/security", icon: "Shield" },
        { title: "الإعدادات", href: "/settings", icon: "Settings" },
        { title: "المساعدة", href: "/help", icon: "HelpCircle" },
      ],
    },
  ],
  footer: {
    copyright: "© 2025 RealEstate CRM",
    status: "النظام يعمل بكفاءة",
  },
};

// Icon map
const iconMap: Record<string, React.ComponentType<any>> = {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FolderKanban,
  FileText,
  Calendar,
  Database,
  MessageSquare,
  Shield,
  HelpCircle,
};

interface SidebarProps {
  onMobileClose?: () => void;
  className?: string;
}

export function Sidebar({ onMobileClose, className }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLinkClick = () => onMobileClose?.();

  return (
    <TooltipProvider delayDuration={100}>
      <div
        className={cn(
          "flex h-full flex-col border-l bg-card shadow-sm transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64",
          className
        )}
        dir="rtl"
      >
        {/* Header */}
        <div className="flex h-16 items-center border-b px-4 justify-between">
          {!isCollapsed ? (
            <Link href="/dashboard" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">{sidebarData.brand.name}</span>
            </Link>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto">
              <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
            </div>
          )}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">{isCollapsed ? "توسيع الشريط الجانبي" : "طي الشريط الجانبي"}</TooltipContent>
          </Tooltip>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {sidebarData.groups.map((group) => (
              <div key={group.title} className="space-y-2">
                {!isCollapsed && group.title && (
                  <h3 className="text-xs font-semibold text-muted-foreground px-3 mb-3 text-right">{group.title}</h3>
                )}
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    const IconComponent = iconMap[item.icon];

                    return (
                      <Tooltip key={item.href} disableHoverableContent>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            onClick={handleLinkClick}
                            className={cn(
                              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                              "hover:bg-accent hover:text-foreground",
                              isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                              isCollapsed && "justify-center"
                            )}
                          >
                            <IconComponent className="h-4 w-4 shrink-0" />
                            {!isCollapsed && (
                              <>
                                <span className="flex-1 text-right">{item.title}</span>
                                {item.badge && (
                                  <Badge
                                    variant={item.badgeVariant as "default" | "secondary" | "destructive" | "outline" || "default"}
                                    className="text-xs"
                                  >
                                    {item.badge}
                                  </Badge>
                                )}
                              </>
                            )}
                            {isCollapsed && item.badge && (
                              <Badge
                                variant={item.badgeVariant as "default" | "secondary" | "destructive" | "outline" || "default"}
                                className="absolute -top-1 -left-1 h-4 w-4 p-0 text-[10px] flex items-center justify-center"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        </TooltipTrigger>
                        {isCollapsed && <TooltipContent side="left">{item.title}</TooltipContent>}
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          {!isCollapsed ? (
            <div className="flex flex-col items-center text-center">
              <span className="text-xs text-muted-foreground">{sidebarData.footer.copyright}</span>
              <div className="flex items-center mt-1">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-muted-foreground">{sidebarData.footer.status}</span>
              </div>
            </div>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">{sidebarData.footer.status}</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}

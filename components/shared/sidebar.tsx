/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Database,
  MessageSquare,
  Shield,
  HelpCircle,
  Home,
  PlusCircle,
  Bell,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Star,
  TrendingUp,
  Clock,
  Mail,
  Phone,
  Key,
  UserCheck,
  Target,
  Kanban,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  onMobileClose?: () => void;
  className?: string;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

// Simplified sidebar data
const sidebarData = {
  brand: {
    name: "عقارك",
  },
  groups: [
    {
      title: "لوحة التحكم",
      items: [
        { title: "الرئيسية", href: "/dashboard", icon: "LayoutDashboard" },
      ],
    },
    {
      title: "العقارات",
      items: [
        { title: "جميع العقارات", href: "/dashboard/properties", icon: "Home" },
        { title: "إضافة عقار", href: "/dashboard/properties/new", icon: "PlusCircle", badge: "جديد" },
        { title: "العقارات المميزة", href: "/dashboard/properties/featured", icon: "Star" },
      ],
    },
    {
      title: "العملاء",
      items: [
        { title: "قائمة العملاء", href: "/dashboard/clients", icon: "Users" },
        { title: "إضافة عميل", href: "/dashboard/clients/new", icon: "PlusCircle", badge: "جديد" },
        { title: "العملاء المحتملين", href: "/dashboard/clients/prospects", icon: "Target" },
      ],
    },
    {
      title: "المشاريع",
      items: [
        { title: "لوحة المهام", href: "/dashboard/CRM", icon: "Kanban" },
        { title: "الحملات", href: "/dashboard/campaigns", icon: "MessageSquare" },
      ],
    },
    {
      title: "التواصل",
      items: [
        { title: "الرسائل", href: "/dashboard/messages", icon: "MessageSquare" },
        { title: "الإشعارات", href: "/dashboard/notifications", icon: "Bell" },
        { title: "المواعيد", href: "/dashboard/calendar", icon: "Calendar" },
      ],
    },
    {
      title: "التقارير",
      items: [
        { title: "التقارير العامة", href: "/dashboard/reports", icon: "BarChart3" },
        { title: "المبيعات", href: "/dashboard/reports/sales", icon: "TrendingUp" },
      ],
    },
    {
      title: "الإعدادات",
      items: [
        { title: "الإعدادات", href: "/dashboard/settings", icon: "Settings" },
        { title: "المستخدمين", href: "/dashboard/users", icon: "UserCheck" },
        { title: "المساعدة", href: "/dashboard/help", icon: "HelpCircle" },
      ],
    },
  ],
};

// Icon map
const iconMap: Record<string, React.ComponentType<any>> = {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FileText,
  Calendar,
  Database,
  MessageSquare,
  Shield,
  HelpCircle,
  Home,
  PlusCircle,
  Bell,
  Star,
  TrendingUp,
  Clock,
  Mail,
  Phone,
  Key,
  UserCheck,
  Target,
  Kanban,
};

export function Sidebar({ onMobileClose, className, isMobileOpen, onMobileToggle }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Auto-open groups with active items
    const initialOpenState: Record<string, boolean> = {};
    sidebarData.groups.forEach(group => {
      const hasActiveItem = group.items.some(item => item.href === pathname);
      initialOpenState[group.title] = hasActiveItem;
    });
    setOpenGroups(initialOpenState);
  }, [pathname]);

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupTitle]: !prev[groupTitle]
    }));
  };

  const handleLinkClick = () => onMobileClose?.();

  if (!isMounted) {
    return (
      <div 
        className={cn(
          "flex h-full flex-col border-l bg-background shadow-sm transition-all duration-300 ease-in-out w-72",
          className
        )}
        dir="rtl"
      />
    );
  }

  return (
    <TooltipProvider delayDuration={100}>
      <div
        className={cn(
          "flex h-full flex-col border-l bg-background shadow-sm transition-all duration-300 ease-in-out z-50",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "fixed inset-y-0 right-0 z-50" : "",
          className
        )}
        dir="rtl"
      >
        {/* Mobile Overlay */}
        {isMobileOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onMobileClose}
          />
        )}

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMobileToggle}
              className="h-8 w-8"
            >
              {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {!isCollapsed ? (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">{sidebarData.brand.name}</span>
            </Link>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto">
              <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
            </div>
          )}

          {/* Collapse Button */}
          <div className="hidden lg:block">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {isCollapsed ? (
                    <ChevronLeft className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                {isCollapsed ? "توسيع" : "طي"}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {sidebarData.groups.map((group) => (
              <div key={group.title} className="space-y-2">
                {!isCollapsed ? (
                  <>
                    <button
                      onClick={() => toggleGroup(group.title)}
                      className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{group.title}</span>
                      {openGroups[group.title] ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    
                    {openGroups[group.title] && (
                      <div className="space-y-1 mr-4">
                        {group.items.map((item) => {
                          const isActive = pathname === item.href;
                          const IconComponent = iconMap[item.icon];

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={handleLinkClick}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                                isActive 
                                  ? "bg-primary text-primary-foreground" 
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                              )}
                            >
                              <IconComponent className="h-4 w-4" />
                              <span className="flex-1">{item.title}</span>
                              {item.badge && (
                                <Badge variant="secondary" className="text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => toggleGroup(group.title)}
                          className="flex items-center justify-center w-full p-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {group.title.substring(0, 2)}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="left">{group.title}</TooltipContent>
                    </Tooltip>
                    
                    {openGroups[group.title] && (
                      <div className="space-y-1 mt-1">
                        {group.items.map((item) => {
                          const isActive = pathname === item.href;
                          const IconComponent = iconMap[item.icon];

                          return (
                            <Tooltip key={item.href}>
                              <TooltipTrigger asChild>
                                <Link
                                  href={item.href}
                                  onClick={handleLinkClick}
                                  className={cn(
                                    "flex items-center justify-center p-2 rounded-lg transition-colors",
                                    isActive 
                                      ? "bg-primary text-primary-foreground" 
                                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                  )}
                                >
                                  <IconComponent className="h-4 w-4" />
                                  {item.badge && (
                                    <Badge
                                      variant="secondary"
                                      className="absolute -top-1 -left-1 h-4 w-4 p-0 text-[10px] flex items-center justify-center"
                                    >
                                      {item.badge}
                                    </Badge>
                                  )}
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent side="left">
                                <div>
                                  <p className="font-medium">{item.title}</p>
                                  {item.badge && (
                                    <Badge variant="secondary" className="mt-1 text-xs">
                                      {item.badge}
                                    </Badge>
                                  )}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          {!isCollapsed ? (
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-muted-foreground">متصل</span>
              </div>
              <span className="text-xs text-muted-foreground">v2.1.0</span>
            </div>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mb-1"></div>
                  <span className="text-[10px] text-muted-foreground">v2.1.0</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>متصل</p>
                <p className="text-muted-foreground">v2.1.0</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
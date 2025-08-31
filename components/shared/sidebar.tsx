/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
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
  Home,
  PlusCircle,
  Bell,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

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
  version: string;
}

interface SidebarBrand {
  name: string;
  logo?: string;
}

interface SidebarData {
  brand: SidebarBrand;
  groups: SidebarGroup[];
  footer: SidebarFooter;
}

// Updated sidebar for Real Estate CRM
const sidebarData: SidebarData = {
  brand: {
    name: "عقارك",
    logo: "/logo.png",
  },
  groups: [
    {
      title: "العملاء",
      items: [
        { title: "قائمة العملاء", href: "/clients", icon: "Users" },
        { title: "إضافة عميل جديد", href: "/clients/new", icon: "PlusCircle", badge: "جديد", badgeVariant: "secondary" },
        { title: "تقييمات العملاء", href: "/clients/reviews", icon: "BarChart3" },
      ],
    },
    {
      title: "العقارات",
      items: [
        { title: "جميع العقارات", href: "/properties", icon: "Home" },
        { title: "إضافة عقار جديد", href: "/properties/new", icon: "PlusCircle", badge: "جديد", badgeVariant: "secondary" },
        { title: "العقارات المميزة", href: "/properties/featured", icon: "BarChart3" },
        { title: "المعاملات", href: "/transactions", icon: "FileText" },
      ],
    },
    {
      title: "المواعيد",
      items: [
        { title: "التقويم", href: "/calendar", icon: "Calendar" },
        { title: "المواعيد القادمة", href: "/appointments", icon: "Calendar", badge: "5", badgeVariant: "default" },
        { title: "السجلات", href: "/appointments/history", icon: "Database" },
      ],
    },
    {
      title: "التواصل",
      items: [
        { title: "الرسائل", href: "/messages", icon: "MessageSquare", badge: "3", badgeVariant: "default" },
        { title: "الإشعارات", href: "/notifications", icon: "Bell", badge: "5", badgeVariant: "destructive" },
      ],
    },
    {
      title: "الإعدادات",
      items: [
        { title: "الإعدادات العامة", href: "/settings", icon: "Settings" },
        { title: "الأمان", href: "/security", icon: "Shield" },
        { title: "المساعدة", href: "/help", icon: "HelpCircle" },
      ],
    },
  ],
  footer: {
    copyright: "© 2025 RealEstate CRM",
    status: "النظام يعمل بكفاءة",
    version: "v2.1.0",
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
  Home,
  PlusCircle,
  Bell,
};

interface SidebarProps {
  onMobileClose?: () => void;
  className?: string;
}

export function Sidebar({ onMobileClose, className }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    
    // Default to all groups closed initially
    const initialOpenState: Record<string, boolean> = {};
    sidebarData.groups.forEach(group => {
      initialOpenState[group.title] = false;
    });
    setOpenGroups(initialOpenState);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupTitle]: !prev[groupTitle]
    }));
  };

  const handleLinkClick = () => onMobileClose?.();

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div 
        className={cn(
          "flex h-full flex-col border-l bg-gradient-to-b from-background to-muted/20 shadow-lg transition-all duration-300 ease-in-out w-72",
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
          "flex h-full flex-col border-l bg-gradient-to-b from-background to-muted/20 shadow-lg transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-72",
          className
        )}
        dir="rtl"
      >
        {/* Header */}
        <div className="flex flex-col p-4 border-b">
          <div className="flex items-center justify-between">
            {!isCollapsed ? (
              <Link href="/dashboard" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                {isLoading ? (
                  <Skeleton className="w-8 h-8 rounded-lg bg-primary/20" />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 animate-in fade-in-50">
                    <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                {isLoading ? (
                  <Skeleton className="h-6 w-32 bg-muted" />
                ) : (
                  <span className="text-lg font-bold text-foreground transition-opacity duration-300 animate-in fade-in-50 slide-in-from-right-4">
                    {sidebarData.brand.name}
                  </span>
                )}
              </Link>
            ) : (
              isLoading ? (
                <Skeleton className="w-8 h-8 rounded-lg bg-primary/20 mx-auto" />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mx-auto transition-all duration-300 animate-in fade-in-50">
                  <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
                </div>
              )
            )}

            {isLoading ? (
              <Skeleton className="h-8 w-8 rounded-md bg-muted" />
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 transition-all duration-300 hover:scale-105 animate-in fade-in-50" 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    {isCollapsed ? (
                      <ChevronLeft className="h-4 w-4 transition-transform duration-300" />
                    ) : (
                      <ChevronRight className="h-4 w-4 transition-transform duration-300" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">{isCollapsed ? "توسيع الشريط الجانبي" : "طي الشريط الجانبي"}</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {isLoading ? (
              // Loading skeletons for menu items
              Array.from({ length: 5 }).map((_, groupIndex) => (
                <div key={groupIndex} className="space-y-3">
                  <Skeleton className="h-4 w-24 bg-muted rounded-md" />
                  <div className="space-y-2 mr-3">
                    {Array.from({ length: 3 }).map((_, itemIndex) => (
                      <Skeleton key={itemIndex} className="h-10 w-full bg-muted rounded-lg" />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              sidebarData.groups.map((group) => (
                <div key={group.title} className="space-y-1 animate-in fade-in-50 slide-in-from-right-4">
                  {!isCollapsed ? (
                    <>
                      <button
                        onClick={() => toggleGroup(group.title)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-accent transition-all duration-300 group"
                      >
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {group.title}
                        </span>
                        {openGroups[group.title] ? (
                          <ChevronUp className="h-4 w-4 text-muted-foreground transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-300" />
                        )}
                      </button>
                      
                      <div 
                        className={cn(
                          "grid transition-all duration-500 ease-in-out overflow-hidden",
                          openGroups[group.title] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-1 mr-3">
                            {group.items.map((item, index) => {
                              const isActive = pathname === item.href;
                              const IconComponent = iconMap[item.icon];

                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={handleLinkClick}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 group animate-in fade-in-50",
                                    "hover:bg-primary/10 hover:text-foreground hover:translate-x-1",
                                    isActive 
                                      ? "bg-primary text-primary-foreground shadow-sm" 
                                      : "text-muted-foreground"
                                  )}
                                  style={{ animationDelay: `${index * 50}ms` }}
                                >
                                  <IconComponent className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                  <span className="flex-1 text-right transition-opacity duration-300">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <Badge 
                                      variant={item.badgeVariant as "default" | "secondary" | "destructive" | "outline" || "default"} 
                                      className="text-xs transition-all duration-300"
                                    >
                                      {item.badge}
                                    </Badge>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => toggleGroup(group.title)}
                            className="flex items-center justify-center w-full p-2 text-sm font-medium rounded-lg hover:bg-accent transition-all duration-300"
                          >
                            {group.title.substring(0, 2)}
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="left">{group.title}</TooltipContent>
                      </Tooltip>
                      
                      <div 
                        className={cn(
                          "grid transition-all duration-500 ease-in-out overflow-hidden",
                          openGroups[group.title] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-1 mt-1">
                            {group.items.map((item, index) => {
                              const isActive = pathname === item.href;
                              const IconComponent = iconMap[item.icon];

                              return (
                                <Tooltip key={item.href} disableHoverableContent>
                                  <TooltipTrigger asChild>
                                    <Link
                                      href={item.href}
                                      onClick={handleLinkClick}
                                      className={cn(
                                        "flex items-center justify-center p-2 rounded-lg text-sm font-medium transition-all duration-300 group animate-in fade-in-50",
                                        "hover:bg-primary/10 hover:text-foreground",
                                        isActive 
                                          ? "bg-primary text-primary-foreground shadow-sm" 
                                          : "text-muted-foreground"
                                      )}
                                      style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                      <IconComponent className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                      {item.badge && (
                                        <Badge
                                          variant={item.badgeVariant as "default" | "secondary" | "destructive" | "outline" || "default"}
                                          className="absolute -top-1 -left-1 h-4 w-4 p-0 text-[10px] flex items-center justify-center transition-all duration-300"
                                        >
                                          {item.badge}
                                        </Badge>
                                      )}
                                    </Link>
                                  </TooltipTrigger>
                                  <TooltipContent side="left">
                                    {item.title}
                                    {item.badge && (
                                      <Badge 
                                        variant={item.badgeVariant as "default" | "secondary" | "destructive" | "outline" || "default"} 
                                        className="ml-2 text-xs"
                                      >
                                        {item.badge}
                                      </Badge>
                                    )}
                                  </TooltipContent>
                                </Tooltip>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          {isLoading ? (
            <div className="flex flex-col items-center text-center space-y-2">
              <Skeleton className="h-4 w-24 bg-muted" />
              <Skeleton className="h-3 w-32 bg-muted" />
              <Skeleton className="h-2 w-16 bg-muted" />
            </div>
          ) : !isCollapsed ? (
            <div className="flex flex-col items-center text-center space-y-2 transition-all duration-300 animate-in fade-in-50 slide-in-from-right-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-xs text-muted-foreground">{sidebarData.footer.status}</span>
              </div>
              <span className="text-xs text-muted-foreground">{sidebarData.footer.copyright}</span>
              <span className="text-[10px] text-muted-foreground/70">{sidebarData.footer.version}</span>
            </div>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center space-y-2 transition-all duration-300 animate-in fade-in-50">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-muted-foreground/70">v2.1.0</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{sidebarData.footer.status}</p>
                <p className="text-muted-foreground">{sidebarData.footer.copyright}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
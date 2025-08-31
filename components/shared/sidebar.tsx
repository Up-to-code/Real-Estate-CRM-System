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
	LogIn,
	AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// بيانات الشريط الجانبي في JSON
const sidebarData = {
	"brand": {
		"name": "لوحة التحكم",
		"logo": "LayoutDashboard"
	},
	"groups": [
		{
			"title": "عام",
			"items": [
				{
					"title": "الرئيسية",
					"href": "/dashboard",
					"icon": "LayoutDashboard",
					"badge": null
				},
				{
					"title": "التحليلات",
					"href": "/dashboard/analytics", 
					"icon": "BarChart3",
					"badge": "جديد",
					"badgeVariant": "secondary"
				},
				{
					"title": "الإعدادات",
					"href": "/dashboard/settings",
					"icon": "Settings",
					"badge": null
				}
			]
		},
		{
			"title": "الصفحات",
			"items": [
				{
					"title": "المستخدمون",
					"href": "/dashboard/users",
					"icon": "Users", 
					"badge": "12",
					"badgeVariant": "default"
				},
				{
					"title": "المشاريع",
					"href": "/dashboard/projects",
					"icon": "FolderKanban",
					"badge": null
				},
				{
					"title": "المستندات",
					"href": "/dashboard/documents",
					"icon": "FileText",
					"badge": null
				},
				{
					"title": "التقويم",
					"href": "/dashboard/calendar",
					"icon": "Calendar",
					"badge": "3",
					"badgeVariant": "outline"
				},
				{
					"title": "صفحات المصادقة",
					"href": "/dashboard/auth",
					"icon": "LogIn",
					"badge": null
				},
				{
					"title": "صفحات الأخطاء",
					"href": "/dashboard/errors",
					"icon": "AlertCircle",
					"badge": null
				}
			]
		},
		{
			"title": "أخرى",
			"items": [
				{
					"title": "الرسائل",
					"href": "/dashboard/messages",
					"icon": "MessageSquare",
					"badge": "5",
					"badgeVariant": "default"
				},
				{
					"title": "قاعدة البيانات",
					"href": "/dashboard/database",
					"icon": "Database",
					"badge": null
				},
				{
					"title": "الأمان",
					"href": "/dashboard/security",
					"icon": "Shield",
					"badge": "!",
					"badgeVariant": "destructive"
				},
				{
					"title": "المساعدة",
					"href": "/dashboard/help",
					"icon": "HelpCircle",
					"badge": null
				}
			]
		}
	],
	"footer": {
		"copyright": "© 2025 لوحة التحكم",
		"status": "متصل"
	}
};

// خريطة الأيقونات
const iconMap = {
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
	LogIn,
	AlertCircle,
};

interface SidebarProps {
	onMobileClose?: () => void;
	className?: string;
}

export function Sidebar({ onMobileClose, className }: SidebarProps) {
	const pathname = usePathname();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleLinkClick = () => {
		if (onMobileClose) {
			onMobileClose();
		}
	};

	return (
		<div
			className={cn(
				"flex h-full flex-col border-l bg-card shadow-sm transition-all duration-300",
				isCollapsed ? "w-16" : "w-64",
				className
			)}
			dir="rtl"
		>
			{/* الرأس */}
			<div className="flex h-16 items-center border-b px-4 justify-between">
				<Button
					variant="ghost"
					size="icon"
					className="h-8 w-8 hover:bg-accent"
					onClick={() => setIsCollapsed(!isCollapsed)}
				>
					{isCollapsed ? (
						<ChevronLeft className="h-4 w-4" />
					) : (
						<ChevronRight className="h-4 w-4" />
					)}
				</Button>
				
				<div className="flex items-center gap-3">
					{!isCollapsed && (
						<Link href="/dashboard" className="flex items-center gap-3">
							<span className="text-lg font-bold text-foreground hover:text-primary transition-colors">
								{sidebarData.brand.name}
							</span>
							<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
								<LayoutDashboard className="w-4 h-4 text-primary-foreground" />
							</div>
						</Link>
					)}
					{isCollapsed && (
						<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
							<LayoutDashboard className="w-4 h-4 text-primary-foreground" />
						</div>
					)}
				</div>
			</div>

			{/* التنقل */}
			<nav className="flex-1 overflow-y-auto p-4">
				<div className="space-y-6">
					{sidebarData.groups.map((group, groupIndex) => (
						<div key={group.title} className="space-y-2">
							{!isCollapsed && (
								<h3 className="text-xs font-semibold text-muted-foreground px-3 mb-3 text-right">
									{group.title}
								</h3>
							)}
							{isCollapsed && groupIndex > 0 && (
								<div className="h-px bg-border mx-2 mb-2" />
							)}

							<div className="space-y-1">
								{group.items.map((item) => {
									const isActive = pathname === item.href;
									const IconComponent = iconMap[item.icon as keyof typeof iconMap];

									return (
										<Link
											key={item.href}
											href={item.href}
											onClick={handleLinkClick}
											className={cn(
												"flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent",
												isActive
													? "bg-primary text-primary-foreground"
													: "text-muted-foreground hover:text-foreground",
												isCollapsed && "justify-center"
											)}
											title={isCollapsed ? item.title : undefined}
										>
											<IconComponent className="h-4 w-4 shrink-0" />
											{!isCollapsed && (
												<>
													<span className="flex-1 text-right">{item.title}</span>
													{item.badge && (
														<Badge
															variant={item.badgeVariant as any || "default"}
															className="text-xs"
														>
															{item.badge}
														</Badge>
													)}
												</>
											)}
											{isCollapsed && item.badge && (
												<div className="absolute -top-1 -left-1 h-4 w-4">
													<Badge
														variant={item.badgeVariant as any || "default"}
														className="h-4 w-4 p-0 text-[10px] flex items-center justify-center"
													>
														{item.badge}
													</Badge>
												</div>
											)}
										</Link>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</nav>

			{/* التذييل */}
			<div className="border-t p-4">
				<div className={cn(
					"flex items-center text-xs text-muted-foreground",
					isCollapsed ? "justify-center" : "justify-center"
				)}>
					{!isCollapsed ? (
						<span>{sidebarData.footer.copyright}</span>
					) : (
						<div className="h-2 w-2 rounded-full bg-green-500" title={sidebarData.footer.status} />
					)}
				</div>
			</div>
		</div>
	);
}
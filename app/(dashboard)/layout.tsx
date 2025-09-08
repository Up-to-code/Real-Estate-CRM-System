"use client";
import { useState } from "react";
import { Sidebar } from "@/components/shared/sidebar";
import Topbar  from "@/components/shared/topbar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

	const handleMobileSidebarToggle = () => {
		setIsMobileSidebarOpen(!isMobileSidebarOpen);
	};

	const handleMobileSidebarClose = () => {
		setIsMobileSidebarOpen(false);
	};

	return (
		<div className="relative flex h-screen overflow-hidden bg-background" dir="rtl">
			{/* Sidebar */}
			<Sidebar 
				isMobileOpen={isMobileSidebarOpen}
				onMobileToggle={handleMobileSidebarToggle}
				onMobileClose={handleMobileSidebarClose}
			/>

			{/* Main Content */}
			<div className="flex-1 overflow-auto">
				<Topbar onMobileMenuToggle={handleMobileSidebarToggle} />
				<main className="p-4 lg:p-8 max-w-[calc(100vw-1rem)] lg:max-w-[calc(100vw-18rem)] mx-auto bg-slate-50 dark:bg-slate-900">
					<div className="min-h-[calc(100vh-8rem)]">{children}</div>
				</main>
			</div>
		</div>
	);
}

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const cairo = Cairo({ 
	subsets: ["arabic"],
	display: "swap",
	variable: "--font-arabic"
});

export const metadata: Metadata = {
	title: "قالب لوحة التحكم الحديثة - Next.js 14 و shadcn/ui",
	description:
		"قالب لوحة تحكم جميل ومتجاوب مبني بـ Next.js 14 و shadcn/ui و Tailwind CSS. لوحة إدارة جاهزة للاستخدام مع مكونات واجهة مستخدم حديثة.",
	keywords: [
		"قالب لوحة تحكم",
		"لوحة إدارة",
		"Next.js 14",
		"shadcn/ui", 
		"Tailwind CSS",
		"لوحة تحكم React",
		"واجهة مستخدم حديثة",
		"لوحة تحكم إدارية",
		"تصميم متجاوب",
		"TypeScript",
		"مفتوح المصدر",
		"مكونات لوحة التحكم",
	],
	authors: [{ name: "قالب لوحة التحكم" }],
	creator: "قالب لوحة التحكم",
	publisher: "قالب لوحة التحكم",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://shadcn-nextjs-dashboard.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			'ar': '/',
			'en': '/en'
		}
	},
	openGraph: {
		type: "website",
		locale: "ar_SA",
		url: "https://shadcn-nextjs-dashboard.vercel.app",
		title: "قالب لوحة التحكم الحديثة - Next.js 14 و shadcn/ui",
		description:
			"قالب لوحة تحكم جميل ومتجاوب مبني بـ Next.js 14 و shadcn/ui و Tailwind CSS. لوحة إدارة جاهزة للاستخدام مع مكونات واجهة مستخدم حديثة.",
		siteName: "قالب لوحة التحكم",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "معاينة قالب لوحة التحكم الحديثة",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "قالب لوحة التحكم الحديثة - Next.js 14 و shadcn/ui",
		description:
			"قالب لوحة تحكم جميل ومتجاوب مبني بـ Next.js 14 و shadcn/ui و Tailwind CSS.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	category: "تكنولوجيا",
	classification: "قالب لوحة التحكم",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ar" dir="rtl" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={`${cairo.variable} font-arabic antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
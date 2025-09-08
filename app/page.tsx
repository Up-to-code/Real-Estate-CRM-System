"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  Settings, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Building2,
  Shield,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Clock,
  FileText,
  Kanban,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share2,
  Lock,
  Unlock,
  Wifi,
  WifiOff,
  AlertCircle,
  Info,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Search as SearchIcon,
  Bell,
  ChevronDown,
  ChevronUp,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIconComponent,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  CreditCard,
  MapPin as MapPinIcon,
  Building2 as Building2Icon,
  FileCheck,
  Clock as ClockIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Globe as GlobeIcon,
  Key,
  UserCheck,
  Target,
  PieChart,
  Activity,
  Zap as ZapIcon,
  Award as AwardIcon,
  BookOpen,
  Camera,
  DollarSign,
  Heart,
  ShoppingCart,
  Tag,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw as RefreshCwIcon,
  Eye as EyeIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Copy as CopyIcon,
  Share2 as Share2Icon,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  ExternalLink as ExternalLinkIcon,
  Kanban as KanbanIcon,
  Layers,
  Palette,
  Sparkles,
  Rocket,
  Crown,
  Trophy,
  Target as TargetIcon,
  Zap as ZapIconComponent,
  TrendingUp as TrendingUpComponent,
  Users as UsersComponent,
  BarChart3 as BarChart3Component,
  MessageSquare as MessageSquareComponent,
  Calendar as CalendarComponent,
  Home as HomeComponent,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <HomeComponent className="h-8 w-8" />,
      title: "إدارة العقارات المتقدمة",
      description: "إدارة شاملة للعقارات مع إمكانية إضافة وتعديل وحذف العقارات بسهولة. نظام ذكي للبحث والتصفية",
      highlight: "✨ ذكي"
    },
    {
      icon: <UsersComponent className="h-8 w-8" />,
      title: "إدارة العملاء الاحترافية",
      description: "تتبع العملاء والعملاء المحتملين مع إدارة علاقات العملاء. نظام نقاط وتصنيف متقدم",
      highlight: "🏆 احترافي"
    },
    {
      icon: <KanbanIcon className="h-8 w-8" />,
      title: "لوحة المهام التفاعلية",
      description: "إدارة المشاريع والمهام مع نظام كانبان متقدم. تتبع التقدم والإنتاجية",
      highlight: "⚡ تفاعلي"
    },
    {
      icon: <MessageSquareComponent className="h-8 w-8" />,
      title: "نظام التواصل المتكامل",
      description: "نظام رسائل متكامل مع إشعارات فورية. دعم واتساب وبريد إلكتروني",
      highlight: "💬 متكامل"
    },
    {
      icon: <BarChart3Component className="h-8 w-8" />,
      title: "التقارير والإحصائيات الذكية",
      description: "تقارير مفصلة وإحصائيات شاملة لجميع العمليات. تحليلات متقدمة ورسوم بيانية",
      highlight: "📊 ذكي"
    },
    {
      icon: <CalendarComponent className="h-8 w-8" />,
      title: "إدارة المواعيد الذكية",
      description: "جدولة وإدارة المواعيد مع تذكيرات تلقائية. تكامل مع التقويم الشخصي",
      highlight: "📅 ذكي"
    }
  ];

  const stats = [
    { number: "10,000+", label: "عقار مُدار", icon: <Building2 className="h-6 w-6" /> },
    { number: "5,000+", label: "عميل راضي", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "وكيل عقاري", icon: <Award className="h-6 w-6" /> },
    { number: "99.9%", label: "معدل الرضا", icon: <Star className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير وكالة عقارية",
      content: "النظام ساعدني في إدارة عملياتي بشكل أكثر كفاءة وفعالية. زادت مبيعاتي بنسبة 60% في أول 6 أشهر",
      avatar: "أح",
      rating: 5,
      company: "وكالة الرياض العقارية"
    },
    {
      name: "فاطمة علي",
      role: "وسيط عقاري",
      content: "واجهة سهلة الاستخدام وميزات متقدمة تساعد في زيادة المبيعات. أفضل استثمار قمت به",
      avatar: "فع",
      rating: 5,
      company: "مجموعة جدة للعقارات"
    },
    {
      name: "محمد حسن",
      role: "مدير مبيعات",
      content: "التقارير المفصلة تساعدني في اتخاذ قرارات أفضل. النظام يوفر لي ساعات من العمل يومياً",
      avatar: "مح",
      rating: 5,
      company: "شركة الدمام العقارية"
    }
  ];

  const pricingPlans = [
    {
      name: "الخطة الأساسية",
      price: "299",
      period: "شهرياً",
      description: "مثالية للوكلاء العقاريين الصغار",
      features: [
        "إدارة 100 عقار",
        "إدارة 200 عميل",
        "تقارير أساسية",
        "دعم البريد الإلكتروني",
        "تطبيق موبايل",
        "نسخ احتياطية يومية",
        "تكامل مع واتساب",
        "دعم فني 8/5"
      ],
      popular: false,
      cta: "ابدأ مجاناً",
      savings: "توفير 20% سنوياً"
    },
    {
      name: "الخطة الاحترافية",
      price: "599",
      period: "شهرياً",
      description: "مثالية للوكالات المتوسطة",
      features: [
        "إدارة 500 عقار",
        "إدارة 1000 عميل",
        "تقارير متقدمة",
        "دعم فني 24/7",
        "تطبيق موبايل",
        "نسخ احتياطية فورية",
        "تكامل مع جميع المنصات",
        "إدارة الفريق",
        "تحليلات متقدمة",
        "تدريب مخصص"
      ],
      popular: true,
      cta: "ابدأ الآن",
      savings: "توفير 30% سنوياً"
    },
    {
      name: "الخطة المؤسسية",
      price: "1,299",
      period: "شهرياً",
      description: "مثالية للشركات الكبيرة",
      features: [
        "عقارات غير محدودة",
        "عملاء غير محدودين",
        "تقارير مخصصة",
        "دعم فني مخصص",
        "تطبيق موبايل",
        "نسخ احتياطية فورية",
        "تكامل مع جميع المنصات",
        "إدارة متقدمة للفريق",
        "API مخصص",
        "تدريب مخصص",
        "مدير حساب مخصص",
        "أمان متقدم"
      ],
      popular: false,
      cta: "تواصل معنا",
      savings: "توفير 40% سنوياً"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUpComponent className="h-6 w-6" />,
      title: "زيادة المبيعات",
      description: "زيادة المبيعات بنسبة 60% في أول 6 أشهر",
      color: "text-green-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "توفير الوقت",
      description: "توفير 70% من الوقت المستغرق في المهام الروتينية",
      color: "text-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "رضا العملاء",
      description: "تحسين تجربة العملاء وزيادة معدل الرضا إلى 99%",
      color: "text-purple-600"
    },
    {
      icon: <BarChart3Component className="h-6 w-6" />,
      title: "تحليلات متقدمة",
      description: "رؤى مفصلة تساعد في اتخاذ قرارات أفضل",
      color: "text-orange-600"
    }
  ];

  const integrations = [
    { name: "واتساب", icon: "💬" },
    { name: "تويتر", icon: "🐦" },
    { name: "فيسبوك", icon: "📘" },
    { name: "إنستغرام", icon: "📷" },
    { name: "لينكد إن", icon: "💼" },
    { name: "يوتيوب", icon: "📺" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20" dir="rtl">
      {/* Navigation */}
      <nav className="border-b bg-white/95 dark:bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 flex items-center justify-center shadow-sm">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/70 bg-clip-text text-transparent">
                عقارك
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-primary transition-colors">
                المميزات
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-primary transition-colors">
                الأسعار
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-primary transition-colors">
                اتصل بنا
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 hover:from-blue-700 hover:to-blue-800 dark:hover:from-primary/90 dark:hover:to-primary/70 shadow-md hover:shadow-lg transition-all duration-300">
                  تسجيل الدخول
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-foreground">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-background dark:via-background dark:to-muted/20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-blue-100/30 dark:from-primary/5 dark:via-transparent dark:to-primary/5" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/40 dark:bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100/60 dark:bg-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-primary/20 dark:to-primary/10 border-blue-200 dark:border-primary/30 text-blue-800 dark:text-primary-foreground" variant="secondary">
              🚀 الأكثر تطوراً في الشرق الأوسط - #1 في إدارة العقارات
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-foreground">
              نظام إدارة العقارات
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/70 bg-clip-text text-transparent"> الأكثر تطوراً</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8 max-w-3xl mx-auto">
              نظام شامل لإدارة العقارات والعملاء والمبيعات. يساعدك في تنظيم عملياتك وزيادة مبيعاتك بنسبة 60% في أول 6 أشهر
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600 dark:text-muted-foreground">
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-950/20 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                <span>أكثر من 10,000 وكالة تثق بنا</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-950/20 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-500" />
                <span>دعم فني 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-950/20 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-500" />
                <span>فترة تجريبية مجانية 30 يوم</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 hover:from-blue-700 hover:to-blue-800 dark:hover:from-primary/90 dark:hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
                  ابدأ الآن مجاناً
                  <ArrowLeft className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-blue-200 dark:border-border hover:bg-blue-50 dark:hover:bg-primary/10 transition-all duration-300 text-blue-700 dark:text-foreground">
                شاهد العرض التوضيحي
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-muted-foreground mb-4">يستخدمه أفضل الوكالات العقارية في المملكة</p>
              <div className="flex justify-center gap-8 opacity-60">
                <div className="text-sm font-medium bg-gray-100 dark:bg-muted/50 px-3 py-1 rounded border border-gray-200 dark:border-border">وكالة الرياض</div>
                <div className="text-sm font-medium bg-gray-100 dark:bg-muted/50 px-3 py-1 rounded border border-gray-200 dark:border-border">مجموعة جدة</div>
                <div className="text-sm font-medium bg-gray-100 dark:bg-muted/50 px-3 py-1 rounded border border-gray-200 dark:border-border">شركة الدمام</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-muted/30 dark:via-muted/20 dark:to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-primary/20 transition-colors shadow-sm">
                  <div className="text-blue-600 dark:text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 dark:bg-primary/20 text-blue-800 dark:text-primary-foreground border-blue-200 dark:border-primary/30" variant="secondary">
              ✨ المميزات المتقدمة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              مميزات النظام المتطورة
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
              نظام متكامل يوفر جميع الأدوات التي تحتاجها لإدارة عملياتك العقارية بكفاءة عالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group hover:scale-105 border-gray-200 dark:border-primary/20 bg-white dark:bg-card shadow-sm hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-100 dark:group-hover:from-primary/30 dark:group-hover:to-primary/20 transition-all duration-300 shadow-sm">
                    <div className="text-blue-600 dark:text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl text-gray-900 dark:text-foreground">{feature.title}</CardTitle>
                    <Badge variant="outline" className="text-xs bg-blue-50 dark:bg-primary/10 border-blue-200 dark:border-primary/30 text-blue-700 dark:text-primary-foreground">
                      {feature.highlight}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-muted/30 dark:via-muted/20 dark:to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              تكامل مع جميع المنصات
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
              يتكامل نظامنا مع جميع المنصات الاجتماعية والتطبيقات الشائعة
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="font-medium text-gray-900 dark:text-foreground">{integration.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 dark:bg-primary/20 text-yellow-800 dark:text-primary-foreground border-yellow-200 dark:border-primary/30" variant="secondary">
              ⭐ آراء العملاء
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground">
              انضم إلى آلاف العملاء الراضين الذين يثقون بنظامنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-lg font-bold text-blue-600 dark:text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-primary mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-muted/30 dark:via-muted/20 dark:to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 dark:bg-primary/20 text-green-800 dark:text-primary-foreground border-green-200 dark:border-primary/30" variant="secondary">
              🎯 الفوائد الحقيقية
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              لماذا تختار عقارك؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
              اكتشف الفوائد الحقيقية التي ستحصل عليها من استخدام نظامنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center mx-auto mb-4 shadow-sm ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg mb-2 text-gray-900 dark:text-foreground">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-600 dark:text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 dark:bg-primary/20 text-purple-800 dark:text-primary-foreground border-purple-200 dark:border-primary/30" variant="secondary">
              💰 خطط الأسعار
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              خطط الأسعار المميزة
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
              اختر الخطة المناسبة لاحتياجاتك. جميع الخطط تشمل فترة تجريبية مجانية 30 يوم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 dark:ring-primary shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-105'} transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 text-white dark:text-primary-foreground">
                    الأكثر شعبية
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900 dark:text-foreground">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-blue-600 dark:text-primary">{plan.price}</span>
                    <span className="text-gray-600 dark:text-muted-foreground">ر.س</span>
                    <span className="text-gray-600 dark:text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-base text-gray-600 dark:text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <Badge variant="outline" className="w-fit mx-auto bg-blue-50 dark:bg-primary/10 border-blue-200 dark:border-primary/30 text-blue-700 dark:text-primary-foreground">
                    {plan.savings}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90 text-white" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-muted-foreground mb-4">
              تحتاج خطة مخصصة؟ تواصل معنا للحصول على عرض خاص
            </p>
            <Button variant="outline" className="bg-blue-50 dark:bg-primary/10 border-blue-200 dark:border-primary/30 text-blue-700 dark:text-primary-foreground hover:bg-blue-100 dark:hover:bg-primary/20">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-primary/10 dark:via-primary/5 dark:to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 dark:bg-primary/20 text-blue-800 dark:text-primary-foreground border-blue-200 dark:border-primary/30" variant="secondary">
            🚀 ابدأ الآن
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
            ابدأ رحلتك مع عقارك اليوم
          </h2>
          <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8">
            انضم إلى آلاف العملاء الذين يثقون بنظامنا لإدارة عملياتهم العقارية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 hover:from-blue-700 hover:to-blue-800 dark:hover:from-primary/90 dark:hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
                ابدأ مجاناً
                <ArrowLeft className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-blue-200 dark:border-border hover:bg-blue-50 dark:hover:bg-primary/10 transition-all duration-300 text-blue-700 dark:text-foreground">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 dark:bg-primary/20 text-green-800 dark:text-primary-foreground border-green-200 dark:border-primary/30" variant="secondary">
              📞 تواصل معنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              نحن هنا لمساعدتك
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-foreground">
              تواصل معنا لمساعدتك في اختيار الحل المناسب لاحتياجاتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-foreground">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-primary" />
                  معلومات الاتصال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500 dark:text-muted-foreground" />
                  <span className="text-gray-700 dark:text-foreground">+966 50 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500 dark:text-muted-foreground" />
                  <span className="text-gray-700 dark:text-foreground">info@aqaruk.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500 dark:text-muted-foreground" />
                  <span className="text-gray-700 dark:text-foreground">الرياض، المملكة العربية السعودية</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-500 dark:text-muted-foreground" />
                  <span className="text-gray-700 dark:text-foreground">الأحد - الخميس: 8 ص - 6 م</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-foreground">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="الاسم"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-border rounded-md bg-white dark:bg-background focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:ring-primary/20 dark:focus:border-primary transition-all duration-300 text-gray-900 dark:text-foreground"
                  />
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-border rounded-md bg-white dark:bg-background focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:ring-primary/20 dark:focus:border-primary transition-all duration-300 text-gray-900 dark:text-foreground"
                  />
                </div>
                <input
                  type="text"
                  placeholder="الموضوع"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-border rounded-md bg-white dark:bg-background focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:ring-primary/20 dark:focus:border-primary transition-all duration-300 text-gray-900 dark:text-foreground"
                />
                <textarea
                  placeholder="الرسالة"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-border rounded-md bg-white dark:bg-background resize-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:ring-primary/20 dark:focus:border-primary transition-all duration-300 text-gray-900 dark:text-foreground"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 hover:from-blue-700 hover:to-blue-800 dark:hover:from-primary/90 dark:hover:to-primary/70 text-white">
                  إرسال الرسالة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-border bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-muted/30 dark:via-muted/20 dark:to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 dark:from-primary dark:to-primary/80 flex items-center justify-center shadow-sm">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-700 dark:from-primary dark:to-primary/70 bg-clip-text text-transparent">
                  عقارك
                </span>
              </div>
              <p className="text-gray-600 dark:text-muted-foreground">
                نظام إدارة العقارات الأكثر تطوراً وكفاءة في الشرق الأوسط
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-foreground">المنتج</h3>
              <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">المميزات</Link></li>
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">الأسعار</Link></li>
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">العرض التوضيحي</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-foreground">الدعم</h3>
              <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">المركز المساعدة</Link></li>
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">التوثيق</Link></li>
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-foreground">الشركة</h3>
              <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">من نحن</Link></li>
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">الخصوصية</Link></li>
                <li><Link href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">الشروط</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-border mt-8 pt-8 text-center text-gray-500 dark:text-muted-foreground">
            <p>&copy; 2024 عقارك. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


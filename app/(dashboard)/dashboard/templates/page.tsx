import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Globe, 
  Eye, 
  Edit, 
  Trash2,
  Copy,
  Share2,
  Download,
  Upload,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Users,
  BarChart3,
  Settings,
  FileText,
  Image,
  Video,
  Link,
  Calendar,
  Tag,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TemplatesPage() {
  const whatsappTemplates = [
    {
      id: 1,
      name: "ترحيب بالعملاء الجدد",
      category: "ترحيب",
      status: "معتمد",
      language: "العربية",
      content: "مرحباً {{name}}! شكراً لاهتمامك بعقاراتنا. كيف يمكننا مساعدتك اليوم؟",
      variables: ["name"],
      usage: 156,
      approvalDate: "2024-01-10",
      createdBy: "أحمد محمد",
      tags: ["ترحيب", "عملاء جدد"]
    },
    {
      id: 2,
      name: "تذكير بموعد زيارة",
      category: "مواعيد",
      status: "معتمد",
      language: "العربية",
      content: "مرحباً {{name}}، تذكير بموعد زيارة العقار غداً الساعة {{time}}. ننتظركم!",
      variables: ["name", "time"],
      usage: 89,
      approvalDate: "2024-01-08",
      createdBy: "فاطمة علي",
      tags: ["مواعيد", "تذكير"]
    },
    {
      id: 3,
      name: "عرض خاص",
      category: "عروض",
      status: "في الانتظار",
      language: "العربية",
      content: "عرض خاص! خصم {{discount}}% على جميع العقارات هذا الأسبوع فقط. احجز الآن!",
      variables: ["discount"],
      usage: 0,
      approvalDate: null,
      createdBy: "محمد حسن",
      tags: ["عروض", "خصم"]
    }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: "رسالة ترحيب",
      category: "ترحيب",
      status: "نشط",
      language: "العربية",
      subject: "مرحباً بك في عقارك",
      content: "مرحباً {{name}}، شكراً لانضمامك إلى عائلتنا. نتمنى أن تجد العقار المناسب لك.",
      variables: ["name"],
      usage: 234,
      createdBy: "أحمد محمد",
      tags: ["ترحيب", "بريد إلكتروني"]
    },
    {
      id: 2,
      name: "تقرير أسبوعي",
      category: "تقارير",
      status: "نشط",
      language: "العربية",
      subject: "تقريرك الأسبوعي - عقارك",
      content: "مرحباً {{name}}، إليك تقريرك الأسبوعي عن العقارات الجديدة والفرص المتاحة.",
      variables: ["name"],
      usage: 67,
      createdBy: "فاطمة علي",
      tags: ["تقارير", "أسبوعي"]
    },
    {
      id: 3,
      name: "تأكيد الحجز",
      category: "حجوزات",
      status: "نشط",
      language: "العربية",
      subject: "تأكيد حجز موعد زيارة",
      content: "مرحباً {{name}}، تم تأكيد حجز موعد زيارة العقار في {{date}} الساعة {{time}}.",
      variables: ["name", "date", "time"],
      usage: 123,
      createdBy: "محمد حسن",
      tags: ["حجوزات", "تأكيد"]
    }
  ];

  const smsTemplates = [
    {
      id: 1,
      name: "تذكير سريع",
      category: "تذكيرات",
      status: "نشط",
      language: "العربية",
      content: "تذكير: موعد زيارة العقار غداً {{time}}. ننتظركم!",
      variables: ["time"],
      usage: 445,
      createdBy: "أحمد محمد",
      tags: ["تذكيرات", "مواعيد"]
    },
    {
      id: 2,
      name: "عرض فوري",
      category: "عروض",
      status: "نشط",
      language: "العربية",
      content: "عرض فوري! خصم {{discount}}% على العقار {{property}}. صالح حتى {{date}}.",
      variables: ["discount", "property", "date"],
      usage: 178,
      createdBy: "فاطمة علي",
      tags: ["عروض", "خصم"]
    },
    {
      id: 3,
      name: "تحديث حالة",
      category: "تحديثات",
      status: "نشط",
      language: "العربية",
      content: "تم تحديث حالة طلبك. العقار {{property}} متاح الآن. اتصل بنا فوراً!",
      variables: ["property"],
      usage: 92,
      createdBy: "محمد حسن",
      tags: ["تحديثات", "حالة"]
    }
  ];

  const stats = [
    { 
      title: "إجمالي القوالب", 
      value: "45", 
      change: "+12%", 
      changeType: "positive" as const,
      color: "text-blue-600" 
    },
    { 
      title: "القوالب المعتمدة", 
      value: "38", 
      change: "+8%", 
      changeType: "positive" as const,
      color: "text-green-600" 
    },
    { 
      title: "في الانتظار", 
      value: "7", 
      change: "+3", 
      changeType: "positive" as const,
      color: "text-yellow-600" 
    },
    { 
      title: "إجمالي الاستخدام", 
      value: "1,234", 
      change: "+25%", 
      changeType: "positive" as const,
      color: "text-purple-600" 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "معتمد":
      case "نشط": return "bg-green-100 text-green-800";
      case "في الانتظار": return "bg-yellow-100 text-yellow-800";
      case "مرفوض": return "bg-red-100 text-red-800";
      case "مسودة": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "واتساب": return MessageSquare;
      case "البريد الإلكتروني": return Mail;
      case "رسائل نصية": return Phone;
      default: return MessageSquare;
    }
  };

  const renderTemplateCard = (template: any, channel: string) => {
    const ChannelIcon = getChannelIcon(channel);
    
    return (
      <Card key={template.id} className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <ChannelIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm">{template.name}</h3>
                  <Badge className={`text-xs ${getStatusColor(template.status)}`}>
                    {template.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>الفئة: {template.category}</span>
                  <span>اللغة: {template.language}</span>
                  <span>الاستخدام: {template.usage}</span>
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Eye className="h-4 w-4 mr-2" />
                  معاينة
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="h-4 w-4 mr-2" />
                  تعديل
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="h-4 w-4 mr-2" />
                  نسخ
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="h-4 w-4 mr-2" />
                  مشاركة
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  حذف
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          {template.subject && (
            <div className="mb-3">
              <p className="text-sm font-medium text-muted-foreground">الموضوع:</p>
              <p className="text-sm">{template.subject}</p>
            </div>
          )}
          <div className="mb-3">
            <p className="text-sm font-medium text-muted-foreground">المحتوى:</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{template.content}</p>
          </div>
          {template.variables && template.variables.length > 0 && (
            <div className="mb-3">
              <p className="text-sm font-medium text-muted-foreground">المتغيرات:</p>
              <div className="flex flex-wrap gap-1">
                {template.variables.map((variable: string) => (
                  <Badge key={variable} variant="outline" className="text-xs">
                    {variable}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>أنشئ بواسطة: {template.createdBy}</span>
            {template.approvalDate && (
              <span>تاريخ الاعتماد: {template.approvalDate}</span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">قوالب الرسائل</h1>
            <p className="text-muted-foreground">
              إدارة قوالب الرسائل للواتساب والبريد الإلكتروني والرسائل النصية
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إنشاء قالب جديد
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <FileText className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> من الشهر الماضي
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            البحث والتصفية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="البحث في القوالب..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="حالة القالب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="approved">معتمد</SelectItem>
                <SelectItem value="pending">في الانتظار</SelectItem>
                <SelectItem value="rejected">مرفوض</SelectItem>
                <SelectItem value="draft">مسودة</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الفئات</SelectItem>
                <SelectItem value="welcome">ترحيب</SelectItem>
                <SelectItem value="appointments">مواعيد</SelectItem>
                <SelectItem value="offers">عروض</SelectItem>
                <SelectItem value="reminders">تذكيرات</SelectItem>
                <SelectItem value="reports">تقارير</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="اللغة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع اللغات</SelectItem>
                <SelectItem value="arabic">العربية</SelectItem>
                <SelectItem value="english">الإنجليزية</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Templates Tabs */}
      <Tabs defaultValue="whatsapp" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="whatsapp" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            واتساب
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            البريد الإلكتروني
          </TabsTrigger>
          <TabsTrigger value="sms" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            رسائل نصية
          </TabsTrigger>
        </TabsList>

        <TabsContent value="whatsapp" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">قوالب واتساب</h2>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              إضافة قالب واتساب
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whatsappTemplates.map((template) => renderTemplateCard(template, "واتساب"))}
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">قوالب البريد الإلكتروني</h2>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              إضافة قالب بريد إلكتروني
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {emailTemplates.map((template) => renderTemplateCard(template, "البريد الإلكتروني"))}
          </div>
        </TabsContent>

        <TabsContent value="sms" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">قوالب الرسائل النصية</h2>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              إضافة قالب رسالة نصية
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {smsTemplates.map((template) => renderTemplateCard(template, "رسائل نصية"))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Template Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            فئات القوالب
          </CardTitle>
          <CardDescription>
            إدارة فئات القوالب وتنظيمها
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "ترحيب", count: 8, color: "bg-blue-500" },
              { name: "مواعيد", count: 12, color: "bg-green-500" },
              { name: "عروض", count: 6, color: "bg-purple-500" },
              { name: "تذكيرات", count: 10, color: "bg-orange-500" },
              { name: "تقارير", count: 4, color: "bg-red-500" },
              { name: "حجوزات", count: 7, color: "bg-indigo-500" },
              { name: "تحديثات", count: 5, color: "bg-pink-500" },
              { name: "عروض خاصة", count: 3, color: "bg-yellow-500" }
            ].map((category) => (
              <div key={category.name} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="font-medium">{category.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{category.count} قالب</span>
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض 1 إلى 9 من 45 قالب
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            السابق
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            التالي
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Target, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Eye, 
  Edit, 
  Trash2,
  Star,
  TrendingUp,
  UserCheck,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ClientsPage() {
  const clients = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@email.com",
      phone: "+966 50 123 4567",
      status: "جديد",
      source: "الموقع الإلكتروني",
      lastActivity: "منذ 5 دقائق",
      avatar: "AM",
      location: "الرياض",
      budget: "₪2,000,000 - ₪3,000,000",
      interests: ["فيلا", "شقة"],
      notes: "مهتم بشراء فيلا في حي النخيل",
      assignedTo: "أحمد محمد",
      createdAt: "2024-01-15",
      totalInteractions: 12,
      lastContact: "2024-01-15"
    },
    {
      id: 2,
      name: "فاطمة علي",
      email: "fatima@email.com",
      phone: "+966 55 987 6543",
      status: "ساخن",
      source: "واتساب",
      lastActivity: "منذ 15 دقيقة",
      avatar: "فع",
      location: "جدة",
      budget: "₪800,000 - ₪1,200,000",
      interests: ["شقة", "دوبلكس"],
      notes: "تبحث عن شقة في وسط المدينة",
      assignedTo: "فاطمة علي",
      createdAt: "2024-01-10",
      totalInteractions: 8,
      lastContact: "2024-01-14"
    },
    {
      id: 3,
      name: "محمد حسن",
      email: "mohammed@email.com",
      phone: "+966 54 456 7890",
      status: "متابعة",
      source: "الإحالة",
      lastActivity: "منذ ساعة",
      avatar: "مح",
      location: "الدمام",
      budget: "₪1,500,000 - ₪2,500,000",
      interests: ["فيلا", "أرض"],
      notes: "مهتم بشراء فيلا عائلية",
      assignedTo: "محمد حسن",
      createdAt: "2024-01-08",
      totalInteractions: 15,
      lastContact: "2024-01-13"
    },
    {
      id: 4,
      name: "سارة أحمد",
      email: "sara@email.com",
      phone: "+966 56 789 0123",
      status: "مغلق",
      source: "الموقع الإلكتروني",
      lastActivity: "منذ يومين",
      avatar: "سأ",
      location: "الرياض",
      budget: "₪500,000 - ₪800,000",
      interests: ["شقة"],
      notes: "تم إغلاق الصفقة بنجاح",
      assignedTo: "سارة أحمد",
      createdAt: "2024-01-05",
      totalInteractions: 25,
      lastContact: "2024-01-12"
    },
    {
      id: 5,
      name: "علي محمد",
      email: "ali@email.com",
      phone: "+966 57 321 6540",
      status: "جديد",
      source: "وسائل التواصل الاجتماعي",
      lastActivity: "منذ 3 ساعات",
      avatar: "عم",
      location: "جدة",
      budget: "₪1,000,000 - ₪1,800,000",
      interests: ["دوبلكس", "فيلا"],
      notes: "مهتم بالاستثمار العقاري",
      assignedTo: "علي محمد",
      createdAt: "2024-01-14",
      totalInteractions: 3,
      lastContact: "2024-01-14"
    },
    {
      id: 6,
      name: "نورا سعد",
      email: "nora@email.com",
      phone: "+966 58 147 2580",
      status: "ساخن",
      source: "المعرض",
      lastActivity: "منذ 30 دقيقة",
      avatar: "نس",
      location: "الرياض",
      budget: "₪3,000,000 - ₪5,000,000",
      interests: ["فيلا فاخرة"],
      notes: "تبحث عن فيلا فاخرة مع مسبح",
      assignedTo: "نورا سعد",
      createdAt: "2024-01-12",
      totalInteractions: 18,
      lastContact: "2024-01-15"
    }
  ];

  const stats = [
    { 
      title: "إجمالي العملاء", 
      value: "1,234", 
      change: "+12%", 
      changeType: "positive" as const,
      color: "text-blue-600" 
    },
    { 
      title: "العملاء الجدد", 
      value: "89", 
      change: "+5%", 
      changeType: "positive" as const,
      color: "text-green-600" 
    },
    { 
      title: "العملاء الساخنين", 
      value: "45", 
      change: "+15%", 
      changeType: "positive" as const,
      color: "text-red-600" 
    },
    { 
      title: "الصفقات المغلقة", 
      value: "67", 
      change: "+8%", 
      changeType: "positive" as const,
      color: "text-purple-600" 
    }
  ];

  const leadStages = [
    { stage: "جديد", count: 25, percentage: 35, color: "bg-blue-500", change: "+5" },
    { stage: "ساخن", count: 18, percentage: 25, color: "bg-red-500", change: "+3" },
    { stage: "متابعة", count: 15, percentage: 20, color: "bg-yellow-500", change: "+2" },
    { stage: "مغلق", count: 12, percentage: 20, color: "bg-green-500", change: "+8" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "جديد": return "bg-blue-100 text-blue-800";
      case "ساخن": return "bg-red-100 text-red-800";
      case "متابعة": return "bg-yellow-100 text-yellow-800";
      case "مغلق": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">العملاء والعملاء المحتملين</h1>
            <p className="text-muted-foreground">
              إدارة العملاء والعملاء المحتملين ومتابعة مراحل المبيعات
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة عميل جديد
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
              <Users className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                {stat.changeType === "positive" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-600" />
                )}
                <span className={stat.changeType === "positive" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>
                <span>من الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lead Funnel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            قمع العملاء المحتملين
          </CardTitle>
          <CardDescription>
            توزيع العملاء المحتملين حسب مراحل المبيعات
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadStages.map((stage) => (
              <div key={stage.stage} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                    <span className="font-medium">{stage.stage}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    +{stage.change}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stage.count} عميل</span>
                    <span className="font-medium">{stage.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${stage.color}`}
                      style={{ width: `${stage.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
                placeholder="البحث في العملاء..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="حالة العميل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="new">جديد</SelectItem>
                <SelectItem value="hot">ساخن</SelectItem>
                <SelectItem value="follow-up">متابعة</SelectItem>
                <SelectItem value="closed">مغلق</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="المصدر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع المصادر</SelectItem>
                <SelectItem value="website">الموقع الإلكتروني</SelectItem>
                <SelectItem value="whatsapp">واتساب</SelectItem>
                <SelectItem value="referral">الإحالة</SelectItem>
                <SelectItem value="social">وسائل التواصل الاجتماعي</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الموقع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع المواقع</SelectItem>
                <SelectItem value="riyadh">الرياض</SelectItem>
                <SelectItem value="jeddah">جدة</SelectItem>
                <SelectItem value="dammam">الدمام</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Clients List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            قائمة العملاء والعملاء المحتملين
          </CardTitle>
          <CardDescription>
            عرض وإدارة جميع العملاء والعملاء المحتملين
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/api/avatar/${client.avatar}`} />
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {client.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{client.name}</h3>
                    <Badge className={`text-xs ${getStatusColor(client.status)}`}>
                      {client.status}
                    </Badge>
                    {client.status === "ساخن" && (
                      <Star className="h-3 w-3 text-yellow-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {client.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {client.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {client.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>الميزانية: {client.budget}</span>
                    <span>المصدر: {client.source}</span>
                    <span>آخر نشاط: {client.lastActivity}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
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
                        عرض التفاصيل
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        تعديل
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="h-4 w-4 mr-2" />
                        إضافة موعد
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        إرسال رسالة
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض 1 إلى 6 من 1,234 عميل
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

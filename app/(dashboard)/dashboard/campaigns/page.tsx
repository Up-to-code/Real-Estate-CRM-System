import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Filter, 
  Target, 
  Users, 
  Calendar, 
  BarChart3, 
  Eye, 
  Edit, 
  Trash2,
  Star,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Send,
  Clock,
  Zap,
  Mail,
  Phone,
  Globe,
  Settings,
  Download,
  Share2,
  Copy,
  Play,
  Pause,
  Stop,
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

export default function CampaignsPage() {
  const campaigns = [
    {
      id: 1,
      name: "حملة العقارات الجديدة",
      channel: "واتساب",
      status: "نشط",
      audience: "العملاء المحتملين",
      recipients: 1250,
      sent: 1180,
      opened: 890,
      clicked: 234,
      conversion: 45,
      scheduledDate: "2024-01-20 10:00",
      createdBy: "أحمد محمد",
      createdAt: "2024-01-15",
      template: "عقارات جديدة متاحة",
      budget: "₪500",
      spent: "₪320"
    },
    {
      id: 2,
      name: "تذكير بالمواعيد",
      channel: "البريد الإلكتروني",
      status: "مجدول",
      audience: "العملاء النشطين",
      recipients: 890,
      sent: 0,
      opened: 0,
      clicked: 0,
      conversion: 0,
      scheduledDate: "2024-01-22 14:30",
      createdBy: "فاطمة علي",
      createdAt: "2024-01-14",
      template: "تذكير بموعد زيارة العقار",
      budget: "₪200",
      spent: "₪0"
    },
    {
      id: 3,
      name: "عرض خاص للعملاء المخلصين",
      channel: "رسائل نصية",
      status: "مكتمل",
      audience: "العملاء المخلصين",
      recipients: 567,
      sent: 567,
      opened: 445,
      clicked: 123,
      conversion: 28,
      scheduledDate: "2024-01-10 09:00",
      createdBy: "محمد حسن",
      createdAt: "2024-01-08",
      template: "عرض خاص - خصم 10%",
      budget: "₪300",
      spent: "₪300"
    },
    {
      id: 4,
      name: "حملة العودة للعملاء",
      channel: "واتساب",
      status: "مسودة",
      audience: "العملاء السابقين",
      recipients: 0,
      sent: 0,
      opened: 0,
      clicked: 0,
      conversion: 0,
      scheduledDate: "غير محدد",
      createdBy: "سارة أحمد",
      createdAt: "2024-01-16",
      template: "عودة للعملاء - عروض جديدة",
      budget: "₪400",
      spent: "₪0"
    },
    {
      id: 5,
      name: "إعلان فيديو قصير",
      channel: "وسائل التواصل الاجتماعي",
      status: "نشط",
      audience: "جميع المتابعين",
      recipients: 2500,
      sent: 2500,
      opened: 1890,
      clicked: 567,
      conversion: 89,
      scheduledDate: "2024-01-18 12:00",
      createdBy: "علي محمد",
      createdAt: "2024-01-12",
      template: "فيديو جولة في العقار",
      budget: "₪800",
      spent: "₪650"
    },
    {
      id: 6,
      name: "حملة العروض الموسمية",
      channel: "البريد الإلكتروني",
      status: "متوقف",
      audience: "قائمة البريد الإلكتروني",
      recipients: 1200,
      sent: 800,
      opened: 600,
      clicked: 180,
      conversion: 32,
      scheduledDate: "2024-01-16 11:00",
      createdBy: "نورا سعد",
      createdAt: "2024-01-10",
      template: "عروض الشتاء - تخفيضات كبيرة",
      budget: "₪600",
      spent: "₪400"
    }
  ];

  const stats = [
    { 
      title: "إجمالي الحملات", 
      value: "24", 
      change: "+8%", 
      changeType: "positive" as const,
      color: "text-blue-600" 
    },
    { 
      title: "الحملات النشطة", 
      value: "8", 
      change: "+2", 
      changeType: "positive" as const,
      color: "text-green-600" 
    },
    { 
      title: "معدل الفتح", 
      value: "78%", 
      change: "+5%", 
      changeType: "positive" as const,
      color: "text-purple-600" 
    },
    { 
      title: "معدل التحويل", 
      value: "12%", 
      change: "+3%", 
      changeType: "positive" as const,
      color: "text-orange-600" 
    }
  ];

  const channelStats = [
    { channel: "واتساب", campaigns: 8, recipients: 3200, conversion: "15%" },
    { channel: "البريد الإلكتروني", campaigns: 6, recipients: 2800, conversion: "8%" },
    { channel: "رسائل نصية", campaigns: 4, recipients: 1200, conversion: "12%" },
    { channel: "وسائل التواصل الاجتماعي", campaigns: 6, recipients: 4500, conversion: "6%" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-100 text-green-800";
      case "مجدول": return "bg-blue-100 text-blue-800";
      case "مكتمل": return "bg-purple-100 text-purple-800";
      case "مسودة": return "bg-gray-100 text-gray-800";
      case "متوقف": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "واتساب": return MessageSquare;
      case "البريد الإلكتروني": return Mail;
      case "رسائل نصية": return Phone;
      case "وسائل التواصل الاجتماعي": return Globe;
      default: return MessageSquare;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">الحملات التسويقية</h1>
            <p className="text-muted-foreground">
              إدارة الحملات التسويقية عبر مختلف القنوات
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إنشاء حملة جديدة
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
              <MessageSquare className={`h-4 w-4 ${stat.color}`} />
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

      {/* Channel Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            أداء القنوات
          </CardTitle>
          <CardDescription>
            مقارنة أداء الحملات عبر مختلف القنوات
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {channelStats.map((channel) => {
              const IconComponent = getChannelIcon(channel.channel);
              return (
                <div key={channel.channel} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <span className="font-medium">{channel.channel}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">الحملات</span>
                      <span className="font-medium">{channel.campaigns}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">المستقبلون</span>
                      <span className="font-medium">{channel.recipients.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">معدل التحويل</span>
                      <span className="font-medium text-green-600">{channel.conversion}</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
                placeholder="البحث في الحملات..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="حالة الحملة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="scheduled">مجدول</SelectItem>
                <SelectItem value="completed">مكتمل</SelectItem>
                <SelectItem value="draft">مسودة</SelectItem>
                <SelectItem value="paused">متوقف</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="القناة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع القنوات</SelectItem>
                <SelectItem value="whatsapp">واتساب</SelectItem>
                <SelectItem value="email">البريد الإلكتروني</SelectItem>
                <SelectItem value="sms">رسائل نصية</SelectItem>
                <SelectItem value="social">وسائل التواصل الاجتماعي</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الجمهور" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الجماهير</SelectItem>
                <SelectItem value="leads">العملاء المحتملين</SelectItem>
                <SelectItem value="active">العملاء النشطين</SelectItem>
                <SelectItem value="loyal">العملاء المخلصين</SelectItem>
                <SelectItem value="previous">العملاء السابقين</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            قائمة الحملات
          </CardTitle>
          <CardDescription>
            عرض وإدارة جميع الحملات التسويقية
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => {
              const ChannelIcon = getChannelIcon(campaign.channel);
              const openRate = campaign.recipients > 0 ? ((campaign.opened / campaign.recipients) * 100).toFixed(1) : "0";
              const clickRate = campaign.recipients > 0 ? ((campaign.clicked / campaign.recipients) * 100).toFixed(1) : "0";
              
              return (
                <div key={campaign.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <ChannelIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm">{campaign.name}</h3>
                        <Badge className={`text-xs ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>القناة: {campaign.channel}</span>
                        <span>الجمهور: {campaign.audience}</span>
                        <span>القالب: {campaign.template}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-sm font-medium">{campaign.recipients.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">المستقبلون</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{openRate}%</div>
                      <div className="text-xs text-muted-foreground">معدل الفتح</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{clickRate}%</div>
                      <div className="text-xs text-muted-foreground">معدل النقر</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{campaign.conversion}</div>
                      <div className="text-xs text-muted-foreground">التحويلات</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {campaign.status === "نشط" && (
                      <Button size="sm" variant="ghost">
                        <Pause className="h-4 w-4" />
                      </Button>
                    )}
                    {campaign.status === "مسودة" && (
                      <Button size="sm" variant="ghost">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
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
                          <BarChart3 className="h-4 w-4 mr-2" />
                          عرض التقارير
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
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض 1 إلى 6 من 24 حملة
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

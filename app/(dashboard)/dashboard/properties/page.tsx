import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  Plus, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  MapPin, 
  DollarSign, 
  Bed, 
  Bath, 
  Square, 
  Eye, 
  Edit, 
  Trash2,
  Building2,
  Star,
  Calendar,
  Phone,
  Mail,
  Share2,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal,
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

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      title: "فيلا فاخرة في حي النخيل",
      price: "₪2,500,000",
      location: "حي النخيل، الرياض",
      status: "متاح",
      type: "فيلا",
      bedrooms: 5,
      bathrooms: 4,
      area: "450م²",
      featured: true,
      images: ["/api/placeholder/400/300"],
      description: "فيلا فاخرة مع حديقة خاصة ومسبح في أحد أفضل أحياء الرياض",
      agent: "أحمد محمد",
      dateAdded: "2024-01-15",
      views: 245,
      phone: "+966 50 123 4567",
      email: "ahmed@realestate.com"
    },
    {
      id: 2,
      title: "شقة حديثة في وسط المدينة",
      price: "₪850,000",
      location: "وسط المدينة، جدة",
      status: "مؤجر",
      type: "شقة",
      bedrooms: 3,
      bathrooms: 2,
      area: "120م²",
      featured: false,
      images: ["/api/placeholder/400/300"],
      description: "شقة حديثة في قلب المدينة مع إطلالة رائعة على البحر",
      agent: "فاطمة علي",
      dateAdded: "2024-01-10",
      views: 189,
      phone: "+966 55 987 6543",
      email: "fatima@realestate.com"
    },
    {
      id: 3,
      title: "أرض سكنية في حي الربيع",
      price: "₪1,200,000",
      location: "حي الربيع، الدمام",
      status: "متاح",
      type: "أرض",
      bedrooms: 0,
      bathrooms: 0,
      area: "800م²",
      featured: true,
      images: ["/api/placeholder/400/300"],
      description: "أرض سكنية مميزة في حي هادئ ومنظم",
      agent: "محمد حسن",
      dateAdded: "2024-01-08",
      views: 156,
      phone: "+966 54 456 7890",
      email: "mohammed@realestate.com"
    },
    {
      id: 4,
      title: "دوبلكس في حي السليمانية",
      price: "₪1,800,000",
      location: "حي السليمانية، الرياض",
      status: "متاح",
      type: "دوبلكس",
      bedrooms: 4,
      bathrooms: 3,
      area: "280م²",
      featured: false,
      images: ["/api/placeholder/400/300"],
      description: "دوبلكس أنيق مع حديقة خاصة وموقف سيارات",
      agent: "سارة أحمد",
      dateAdded: "2024-01-05",
      views: 203,
      phone: "+966 56 789 0123",
      email: "sara@realestate.com"
    },
    {
      id: 5,
      title: "شقة استثمارية في حي العليا",
      price: "₪650,000",
      location: "حي العليا، الرياض",
      status: "متاح",
      type: "شقة",
      bedrooms: 2,
      bathrooms: 2,
      area: "90م²",
      featured: false,
      images: ["/api/placeholder/400/300"],
      description: "شقة استثمارية مميزة في حي تجاري",
      agent: "علي محمد",
      dateAdded: "2024-01-03",
      views: 134,
      phone: "+966 57 321 6540",
      email: "ali@realestate.com"
    },
    {
      id: 6,
      title: "فيلا عائلية في حي الياسمين",
      price: "₪3,200,000",
      location: "حي الياسمين، جدة",
      status: "متاح",
      type: "فيلا",
      bedrooms: 6,
      bathrooms: 5,
      area: "600م²",
      featured: true,
      images: ["/api/placeholder/400/300"],
      description: "فيلا عائلية فاخرة مع مسبح وملعب تنس",
      agent: "نورا سعد",
      dateAdded: "2024-01-01",
      views: 312,
      phone: "+966 58 147 2580",
      email: "nora@realestate.com"
    }
  ];

  const stats = [
    { title: "إجمالي العقارات", value: "1,234", change: "+12%", color: "text-blue-600" },
    { title: "العقارات المتاحة", value: "856", change: "+8%", color: "text-green-600" },
    { title: "العقارات المميزة", value: "45", change: "+15%", color: "text-purple-600" },
    { title: "العقارات المؤجرة", value: "378", change: "+5%", color: "text-orange-600" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">العقارات</h1>
            <p className="text-muted-foreground">
              إدارة جميع العقارات وعرضها وتعديلها
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة عقار جديد
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
              <Home className={`h-4 w-4 ${stat.color}`} />
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
                placeholder="البحث في العقارات..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="نوع العقار" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأنواع</SelectItem>
                <SelectItem value="villa">فيلا</SelectItem>
                <SelectItem value="apartment">شقة</SelectItem>
                <SelectItem value="duplex">دوبلكس</SelectItem>
                <SelectItem value="land">أرض</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="available">متاح</SelectItem>
                <SelectItem value="rented">مؤجر</SelectItem>
                <SelectItem value="sold">مباع</SelectItem>
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

      {/* Properties Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="h-48 bg-muted flex items-center justify-center">
                <Building2 className="h-12 w-12 text-muted-foreground" />
              </div>
              {property.featured && (
                <Badge className="absolute top-2 right-2 bg-yellow-500">
                  <Star className="h-3 w-3 mr-1" />
                  مميز
                </Badge>
              )}
              <Badge 
                variant={property.status === "متاح" ? "default" : "secondary"}
                className="absolute top-2 left-2"
              >
                {property.status}
              </Badge>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {property.location}
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
                      عرض التفاصيل
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      تعديل
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Phone className="h-4 w-4 mr-2" />
                      الاتصال
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Mail className="h-4 w-4 mr-2" />
                      إرسال بريد
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
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-primary">{property.price}</span>
                <Badge variant="outline">{property.type}</Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-4 w-4" />
                  <span>{property.area}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {property.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>الوكيل: {property.agent}</span>
                <span>{property.views} مشاهدة</span>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  عرض التفاصيل
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض 1 إلى 6 من 1,234 عقار
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

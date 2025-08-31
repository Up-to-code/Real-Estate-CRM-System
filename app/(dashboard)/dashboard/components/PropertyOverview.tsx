// components/PropertyOverview.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, Edit, Trash2, MapPin, Calendar, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

const properties = [
  { 
    id: 1, 
    title: "شقة فاخرة", 
    status: "متاحة", 
    price: "1,200,000 ر.س", 
    location: "الرياض، حي الصحافة", 
    date: "2023-10-15",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    beds: 3,
    baths: 2,
    area: "150 م²"
  },
  { 
    id: 2, 
    title: "فيلا مودرن", 
    status: "مباعة", 
    price: "3,500,000 ر.س", 
    location: "جدة، حي الروضة", 
    date: "2023-09-22",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    beds: 5,
    baths: 4,
    area: "320 م²"
  },
  { 
    id: 3, 
    title: "أرض تجارية", 
    status: "تحت الإجراء", 
    price: "2,000,000 ر.س", 
    location: "الدمام، حي الاتصالات", 
    date: "2023-11-05",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    beds: 0,
    baths: 0,
    area: "500 م²"
  },
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case "متاحة":
      return { variant: "default", class: "bg-green-50 text-green-700 border-green-200" }
    case "مباعة":
      return { variant: "secondary", class: "bg-blue-50 text-blue-700 border-blue-200" }
    case "تحت الإجراء":
      return { variant: "destructive", class: "bg-amber-50 text-amber-700 border-amber-200" }
    default:
      return { variant: "default", class: "bg-gray-50 text-gray-700 border-gray-200" }
  }
}

export function PropertyTable() {
  return (
    <Card className="border-0 shadow-sm" dir="rtl">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">عقاراتي</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">نظرة عامة على أحدث العقارات</p>
        </div>
        <Button size="sm" className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          إضافة عقار
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[280px]">العقار</TableHead>
              <TableHead className="text-center">التفاصيل</TableHead>
              <TableHead>السعر</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead className="text-center">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => {
              const statusInfo = getStatusVariant(property.status);
              
              return (
                <TableRow key={property.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0 border">
                        <Image
                          src={property.image}
                          alt={property.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium truncate">{property.title}</div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 ml-1 flex-shrink-0" />
                          <span className="truncate">{property.location}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-2 text-sm">
                      {property.beds > 0 && (
                        <span className="bg-muted px-2 py-1 rounded text-xs">🛏️ {property.beds}</span>
                      )}
                      {property.baths > 0 && (
                        <span className="bg-muted px-2 py-1 rounded text-xs">🚿 {property.baths}</span>
                      )}
                      <span className="bg-muted px-2 py-1 rounded text-xs">📐 {property.area}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-primary">
                    {property.price}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={statusInfo.variant as "default" | "secondary" | "destructive"}
                      className={`rounded-md px-2 py-1 text-xs border ${statusInfo.class}`}
                    >
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 ml-1 flex-shrink-0" />
                      {property.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                            <Eye className="w-4 h-4" />
                            <span>عرض</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                            <Edit className="w-4 h-4" />
                            <span>تعديل</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive">
                            <Trash2 className="w-4 h-4" />
                            <span>حذف</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        
        {/* Empty state */}
        {properties.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="rounded-full bg-muted p-3 mb-4">
              <MapPin className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-base font-medium mb-2">لا توجد عقارات</h3>
            <p className="text-muted-foreground text-sm mb-4">ابدأ بإضافة أول عقار لك</p>
            <Button size="sm">
              <Plus className="h-4 w-4 ml-1" />
              إضافة عقار جديد
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
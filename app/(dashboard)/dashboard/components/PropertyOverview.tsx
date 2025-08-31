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
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const properties = [
  { id: 1, title: "شقة فاخرة", status: "متاحة", price: "1,200,000 ر.س", location: "الرياض، حي الصحافة", date: "2023-10-15" },
  { id: 2, title: "فيلا مودرن", status: "مباعة", price: "3,500,000 ر.س", location: "جدة، حي الروضة", date: "2023-09-22" },
  { id: 3, title: "أرض تجارية", status: "تحت الإجراء", price: "2,000,000 ر.س", location: "الدمام، حي الاتصالات", date: "2023-11-05" },
]

const getBadgeVariant = (status: string) => {
  switch (status) {
    case "متاحة":
      return "default"
    case "مباعة":
      return "secondary"
    case "تحت الإجراء":
      return "destructive"
    default:
      return "default"
  }
}

export function PropertyTable() {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg">نظرة عامة على العقارات</CardTitle>
        <Button variant="outline" size="sm">
          عرض الكل
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>العقار</TableHead>
              <TableHead>الموقع</TableHead>
              <TableHead>السعر</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead className="text-center">خيارات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell className="font-medium">{property.title}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{property.location}</TableCell>
                <TableCell className="font-semibold text-primary">{property.price}</TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(property.status)}>
                    {property.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>عرض</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Edit className="w-4 h-4" />
                          <span>تعديل</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                          <Trash2 className="w-4 h-4" />
                          <span>حذف</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
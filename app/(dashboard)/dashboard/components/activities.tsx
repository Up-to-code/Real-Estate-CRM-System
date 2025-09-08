import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ActivityFeed() {
  const activities = [
    {
      user: "أحمد محمد",
      action: "أضاف عقار جديد",
      target: "شقة في حي الربيع",
      time: "منذ 5 دقائق",
      initials: "أح"
    },
    {
      user: "فاطمة عبدالله",
      action: "حدثت حالة العقار",
      target: "فيلا في حي الورود",
      time: "منذ ساعة",
      initials: "فع"
    },
    {
      user: "خالد السعدي",
      action: "أغلق صفقة",
      target: "أرض تجارية",
      time: "منذ 3 ساعات",
      initials: "خس"
    },
    {
      user: "نورة الرشيد",
      action: "أضافت عميل جديد",
      target: "محمد العتيبي",
      time: "منذ 5 ساعات",
      initials: "نر"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>النشاطات الحديثة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  {activity.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <span className="text-xs text-muted-foreground">{activity.action}</span>
                </div>
                <p className="text-sm text-foreground/80">{activity.target}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
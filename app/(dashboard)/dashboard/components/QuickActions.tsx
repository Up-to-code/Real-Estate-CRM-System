"use client"
// components/QuickActions.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Send, Download } from "lucide-react"

export function QuickActions() {
  const actions = [
    { icon: <Plus className="w-4 h-4" />, label: "إضافة عقار جديد", onClick: () => {} },
    { icon: <FileText className="w-4 h-4" />, label: "إنشاء تقرير", onClick: () => {} },
    { icon: <Send className="w-4 h-4" />, label: "إرسال بريد جماعي", onClick: () => {} },
    { icon: <Download className="w-4 h-4" />, label: "تحميل البيانات", onClick: () => {} },
  ]

  return (
    <Card className="bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">إجراءات سريعة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={action.onClick}
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
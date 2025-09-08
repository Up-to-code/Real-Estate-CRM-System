/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const clientData = {
  weekly: [
    { period: "السبت", clients: 45 },
    { period: "الأحد", clients: 62 },
    { period: "الإثنين", clients: 78 },
    { period: "الثلاثاء", clients: 55 },
    { period: "الأربعاء", clients: 81 },
    { period: "الخميس", clients: 67 },
    { period: "الجمعة", clients: 72 },
  ],
  monthly: [
    { period: "يناير", clients: 186 },
    { period: "فبراير", clients: 305 },
    { period: "مارس", clients: 237 },
    { period: "أبريل", clients: 273 },
    { period: "مايو", clients: 309 },
    { period: "يونيو", clients: 314 },
    { period: "يوليو", clients: 285 },
    { period: "أغسطس", clients: 295 },
    { period: "سبتمبر", clients: 332 },
    { period: "أكتوبر", clients: 356 },
    { period: "نوفمبر", clients: 378 },
    { period: "ديسمبر", clients: 402 },
  ],
  yearly: [
    { period: "2020", clients: 2850 },
    { period: "2021", clients: 3120 },
    { period: "2022", clients: 3560 },
    { period: "2023", clients: 4120 },
    { period: "2024", clients: 4800 },
  ]
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg p-3 shadow-md text-right">
        <p className="font-medium">{label}</p>
        <p className="text-primary">العملاء: {payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export default function ClientAnalytics() {
  const [timeFrame, setTimeFrame] = useState<keyof typeof clientData>("weekly")
  const currentData = clientData[timeFrame]

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-right">
          <h2 className="text-2xl font-semibold tracking-tight">تحليلات العملاء</h2>
          <p className="text-muted-foreground">تتبع اكتساب العملاء مع مرور الوقت</p>
        </div>
        
        <Select value={timeFrame} onValueChange={(value) => setTimeFrame(value as keyof typeof clientData)}>
          <SelectTrigger className="w-[140px] rounded-lg">
            <SelectValue placeholder="الإطار الزمني" />
          </SelectTrigger>
          <SelectContent className="rounded-lg">
            <SelectItem value="weekly">أسبوعي</SelectItem>
            <SelectItem value="monthly">شهري</SelectItem>
            <SelectItem value="yearly">سنوي</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="rounded-xl">
        <CardHeader className="text-right">
          <CardTitle>نمو العملاء</CardTitle>
          <CardDescription>
            {timeFrame === "weekly" ? "اكتساب العملاء خلال الأسبوع" : 
            timeFrame === "monthly" ? "اكتساب العملاء خلال 12 شهرًا" : "اكتساب العملاء من 2020 إلى 2024"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="period" 
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="clients" 
                  radius={[6, 6, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
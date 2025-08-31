"use client"

import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { chartData } from "./data/datat"
import { useState } from "react"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export function ChartClient() {
  const [range, setRange] = useState<keyof typeof chartData>("7 أيام")

  return (
    <Card className="bg-background max-w-4xl ">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>الإحصائيات</CardTitle>
        <Select defaultValue="7 أيام" onValueChange={(val) => setRange(val as keyof typeof chartData)}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="اختر المدة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7 أيام">7 أيام</SelectItem>
            <SelectItem value="30 يوم">30 يوم</SelectItem>
            <SelectItem value="12 شهر">12 شهر</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData[range]}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                borderRadius: "0.5rem",
                border: "1px solid hsl(var(--border))",
              }}
              itemStyle={{
                color: "hsl(var(--foreground))",
              }}
            />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

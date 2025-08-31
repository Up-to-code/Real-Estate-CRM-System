"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Sample data for the charts
const chartData = [
  { month: "يناير", مبيعات: 186, استئجار: 305 },
  { month: "فبراير", مبيعات: 305, استئجار: 298 },
  { month: "مارس", مبيعات: 237, استئجار: 410 },
  { month: "أبريل", مبيعات: 73, استئجار: 230 },
  { month: "مايو", مبيعات: 209, استئجار: 350 },
  { month: "يونيو", مبيعات: 214, استئجار: 320 },
]

const chartConfig = {
  مبيعات: {
    label: "المبيعات",
    color: "var(--color-sales)",
  },
  استئجار: {
    label: "الإيجارات",
    color: "var(--color-rentals)",
  },
} satisfies ChartConfig

// CSS variables for chart colors
const chartStyle = `
  :root {
    --color-sales: #3b82f6;
    --color-rentals: #10b981;
    --color-bg: #f8fafc;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --color-sales: #60a5fa;
      --color-rentals: #34d399;
      --color-bg: #0f172a;
    }
  }
`

export default function SalesRentalDashboard() {

  return (
    <div className="min-h-screen bg-background p-6">
      <style>{chartStyle}</style>
      


      {/* Main Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>إحصائيات المبيعات والإيجارات</CardTitle>
          <CardDescription>أداء الشهر الحالي مقارنة بالأشهر السابقة</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 10,
                }}
                barGap={10}
                barCategoryGap="20%"
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis 
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  width={35}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar 
                  dataKey="مبيعات" 
                  fill="var(--color-sales)" 
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                    formatter={(value: number) => value.toLocaleString()}
                  />
                </Bar>
                <Bar 
                  dataKey="استئجار" 
                  fill="var(--color-rentals)" 
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                    formatter={(value: number) => value.toLocaleString()}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            اتجاه إيجابي بنسبة ٨٪ هذا الشهر
          </div>
          <div className="text-muted-foreground">
            عرض إجمالي المبيعات والإيجارات خلال آخر ٦ أشهر
          </div>
        </CardFooter>
      </Card>

      {/* Performance Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">أعلى أشهر المبيعات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData
                .sort((a, b) => b.مبيعات - a.مبيعات)
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span>{item.month}</span>
                    </div>
                    <span className="font-medium">{item.مبيعات.toLocaleString()}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">أعلى أشهر الإيجارات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData
                .sort((a, b) => b.استئجار - a.استئجار)
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                      <span>{item.month}</span>
                    </div>
                    <span className="font-medium">{item.استئجار.toLocaleString()}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
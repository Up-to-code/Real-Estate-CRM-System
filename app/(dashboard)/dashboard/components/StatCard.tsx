// components/StatCard.tsx
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function StatCard({ title, value, subtitle, icon, trend }: StatCardProps) {
  return (
    <Card className="bg-card">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <div className="p-2 rounded-full bg-muted">
            {icon}
          </div>
        </div>
        {trend && (
          <div className={`flex items-center mt-3 text-xs ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? (
              <ArrowUpIcon className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDownIcon className="w-3 h-3 mr-1" />
            )}
            <span>{trend.value}% {trend.isPositive ? 'زيادة' : 'انخفاض'}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
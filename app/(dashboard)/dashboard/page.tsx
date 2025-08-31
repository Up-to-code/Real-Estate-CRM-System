import { StatCard } from "./components/StatCard"
import { QuickActions } from "./components/QuickActions"
 import { PropertyTable } from "./components/PropertyOverview"
import ChartWrapper from "@/components/charts/ChartWrapper"
import { Home, UserPlus, TrendingUp, ClipboardCheck, DollarSign } from "lucide-react"
import { ActivityFeed } from "./components/activities"

export default function Page() {
  return (
    <div className="space-y-6 p-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-card-foreground">لوحة تحكم العقارات</h1>
        <div className="text-sm text-muted-foreground">
          آخر تحديث: اليوم في 10:30 صباحاً
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="العقارات النشطة"
          value="85"
          subtitle="محدثة اليوم"
          icon={<Home className="w-5 h-5 text-blue-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="العملاء الجدد اليوم"
          value="25"
          subtitle="تمت إضافتهم اليوم"
          icon={<UserPlus className="w-5 h-5 text-green-600" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="العملاء المهتمين"
          value="40"
          subtitle="أعلى أولويات اليوم"
          icon={<TrendingUp className="w-5 h-5 text-amber-600" />}
          trend={{ value: 3, isPositive: false }}
        />
        <StatCard
          title="الصفقات المغلقة"
          value="12"
          subtitle="هذا الأسبوع"
          icon={<ClipboardCheck className="w-5 h-5 text-purple-600" />}
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard
          title="إجمالي الإيرادات"
          value="45,000 ر.س"
          subtitle="إجمالي السنة"
          icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Property Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Property Overview */}
          <PropertyTable />

          {/* Charts / Analytics */}
          <ChartWrapper />
        </div>

        {/* Right Column - Actions and Activities */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <QuickActions />

          {/* Activity Feed */}
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}
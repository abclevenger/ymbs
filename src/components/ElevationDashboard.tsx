import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard,
  Users,
  Target,
  Settings,
  Bell,
  Search,
  Menu,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

// Mock Data
const CONVERSION_DATA = [
  { name: "Converted", value: 68 },
  { name: "Lost", value: 32 },
];
const DONUT_COLORS = ["hsl(var(--primary))", "#e2e8f0"];
const DONUT_COLORS_DARK = ["hsl(var(--primary))", "#334155"];

const FUNNEL_DATA = [
  { stage: "New Lead", count: 1250 },
  { stage: "Qualified", count: 850 },
  { stage: "Proposal", count: 420 },
  { stage: "Won", count: 185 },
];

const PERFORMANCE_DATA = [
  { client: "Acme Corp", progress: 85 },
  { client: "Stark Ind.", progress: 62 },
  { client: "Wayne Ent.", progress: 91 },
  { client: "Globex", progress: 45 },
];

const RECENT_ACTIVITY = [
  {
    id: 1,
    title: "Proposal Accepted",
    desc: "Acme Corp signed the Q3 contract.",
    time: "10 mins ago",
    status: "Complete",
  },
  {
    id: 2,
    title: "New Lead Captured",
    desc: "John Doe submitted the contact form.",
    time: "1 hour ago",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Urgent Support Ticket",
    desc: "Wayne Ent. reported a downtime issue.",
    time: "2 hours ago",
    status: "High Priority",
  },
  {
    id: 4,
    title: "Campaign Launched",
    desc: "Q3 Email Sequence initiated.",
    time: "5 hours ago",
    status: "Complete",
  },
];

const STATUS_COLORS = {
  Complete: "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400",
  "In Progress":
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400",
  "High Priority":
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400",
};

export function ElevationDashboard() {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="rounded-xl overflow-hidden border shadow-2xl flex flex-col md:flex-row min-h-[700px] w-full font-sans transition-colors duration-300 bg-background border-border">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 border-r p-6 transition-colors duration-300 bg-muted/30 border-border">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md shadow-primary/20">
            <Target className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-widest text-foreground">
            ELEVATION
          </span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Users, label: "Contacts" },
            { icon: Target, label: "Pipelines" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                item.active
                  ? "bg-primary/20 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="p-4 rounded-xl bg-background border border-border">
            <p className="text-xs font-medium mb-2 text-muted-foreground">
              Monthly Usage
            </p>
            <div className="h-2 w-full rounded-full overflow-hidden bg-muted">
              <div className="h-full bg-primary w-[68%] rounded-full" />
            </div>
            <p className="text-xs mt-2 text-foreground">68% of plan limit</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-muted/10">
        {/* Top Nav */}
        <header className="h-16 border-b flex items-center justify-between px-6 transition-colors duration-300 bg-background border-border">
          <div className="flex items-center gap-4 md:hidden">
            <Menu className="w-5 h-5 text-foreground" />
            <span className="font-serif font-bold text-lg text-foreground">
              ELEVATION
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <h1 className="font-serif text-2xl font-medium text-foreground">
              Overview
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full transition-colors hover:bg-muted text-muted-foreground hover:text-foreground">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full transition-colors hover:bg-muted text-muted-foreground hover:text-foreground">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-primary/50 shadow-sm" />
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Conversion Rate Donut */}
            <div className="p-6 rounded-2xl border transition-all duration-300 bg-card border-border hover:border-primary/50 shadow-sm">
              <h3 className="font-serif text-lg font-medium mb-6 text-foreground">
                Conversion Rate
              </h3>
              <div className="h-[200px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={CONVERSION_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {CONVERSION_DATA.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            isDark
                              ? DONUT_COLORS_DARK[index]
                              : DONUT_COLORS[index]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? "#000000" : "#ffffff",
                        borderColor: isDark ? "#333333" : "#e2e8f0",
                        color: isDark ? "#ffffff" : "#000000",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-bold text-foreground">
                    68%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Win Rate
                  </span>
                </div>
              </div>
            </div>

            {/* Sales Funnel */}
            <div className="p-6 rounded-2xl border transition-all duration-300 bg-card border-border hover:border-primary/50 shadow-sm lg:col-span-2">
              <h3 className="font-serif text-lg font-medium mb-6 text-foreground">
                Sales Funnel
              </h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={FUNNEL_DATA}
                    layout="vertical"
                    margin={{ top: 0, right: 0, left: 20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      stroke={isDark ? "#333333" : "#e2e8f0"}
                    />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="stage"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: isDark ? "#9ca3af" : "#64748b",
                        fontSize: 12,
                      }}
                    />
                    <Tooltip
                      cursor={{ fill: isDark ? "#1a1a1a" : "#f1f5f9" }}
                      contentStyle={{
                        backgroundColor: isDark ? "#000000" : "#ffffff",
                        borderColor: isDark ? "#333333" : "#e2e8f0",
                        color: isDark ? "#ffffff" : "#000000",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar
                      dataKey="count"
                      fill="hsl(var(--primary))"
                      radius={[0, 4, 4, 0]}
                      barSize={24}
                    >
                      {FUNNEL_DATA.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            index === 0
                              ? "hsl(var(--primary))"
                              : index === 1
                                ? "hsl(var(--primary) / 0.8)"
                                : index === 2
                                  ? "hsl(var(--primary) / 0.6)"
                                  : "hsl(var(--primary) / 0.4)"
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Project Performance */}
            <div className="p-6 rounded-2xl border transition-all duration-300 bg-card border-border hover:border-primary/50 shadow-sm lg:col-span-2">
              <h3 className="font-serif text-lg font-medium mb-6 text-foreground">
                Project Performance
              </h3>
              <div className="space-y-6">
                {PERFORMANCE_DATA.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-medium text-foreground">
                        {item.client}
                      </span>
                      <span className="text-muted-foreground">
                        {item.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full overflow-hidden bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-2xl border transition-all duration-300 bg-card border-border hover:border-primary/50 shadow-sm">
              <h3 className="font-serif text-lg font-medium mb-6 text-foreground">
                Recent Activity
              </h3>
              <div className="space-y-6">
                {RECENT_ACTIVITY.map((activity) => (
                  <div
                    key={activity.id}
                    className="relative pl-4 border-l-2 border-border"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        {activity.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {activity.desc}
                      </span>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-muted-foreground/70">
                          {activity.time}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[activity.status as keyof typeof STATUS_COLORS]}`}
                        >
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

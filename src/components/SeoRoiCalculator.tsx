import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export function SeoRoiCalculator() {
  const [traffic, setTraffic] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2);
  const [leadValue, setLeadValue] = useState(500);
  const [seoGrowth, setSeoGrowth] = useState(50);
  const [monthlyCost, setMonthlyCost] = useState(1800);

  const stats = useMemo(() => {
    const currentLeads = traffic * (conversionRate / 100);
    const currentRevenue = currentLeads * leadValue;

    const newTraffic = traffic * (1 + seoGrowth / 100);
    const newLeads = newTraffic * (conversionRate / 100);
    const newRevenue = newLeads * leadValue;

    const monthlyIncrease = newRevenue - currentRevenue;
    const yearlyIncrease = monthlyIncrease * 12;
    const yearlyCost = monthlyCost * 12;
    const roi = ((yearlyIncrease - yearlyCost) / yearlyCost) * 100;

    const chartData = [
      { name: "Current", revenue: currentRevenue },
      { name: "Projected", revenue: newRevenue },
    ];

    return {
      currentRevenue,
      newRevenue,
      monthlyIncrease,
      yearlyIncrease,
      roi,
      chartData,
    };
  }, [traffic, conversionRate, leadValue, seoGrowth, monthlyCost]);

  return (
    <Card className="w-full border-2 border-primary/10 shadow-xl overflow-hidden">
      <CardHeader className="bg-brand-dark text-white p-8">
        <CardTitle className="text-3xl font-bold">SEO ROI Calculator</CardTitle>
        <CardDescription className="text-white/70 text-lg">
          Estimate the revenue impact of improving your search visibility.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Current Monthly Traffic
                </Label>
                <span className="text-primary font-bold">
                  {traffic.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[traffic]}
                onValueChange={(v) => setTraffic(v[0])}
                max={20000}
                step={100}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Website Conversion Rate (%)
                </Label>
                <span className="text-primary font-bold">
                  {conversionRate}%
                </span>
              </div>
              <Slider
                value={[conversionRate]}
                onValueChange={(v) => setConversionRate(v[0])}
                max={10}
                step={0.1}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Average Lead Value ($)
                </Label>
                <span className="text-primary font-bold">
                  ${leadValue.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[leadValue]}
                onValueChange={(v) => setLeadValue(v[0])}
                max={5000}
                step={50}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Projected SEO Traffic Growth (%)
                </Label>
                <span className="text-primary font-bold">{seoGrowth}%</span>
              </div>
              <Slider
                value={[seoGrowth]}
                onValueChange={(v) => setSeoGrowth(v[0])}
                max={300}
                step={10}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-base font-bold">
                Monthly SEO Investment ($)
              </Label>
              <Input
                type="number"
                value={monthlyCost}
                onChange={(e) => setMonthlyCost(Number(e.target.value))}
                className="text-lg font-bold"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8 bg-muted/30 p-8 rounded-xl border">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
                  New Monthly Revenue
                </p>
                <p className="text-2xl font-bold text-brand-dark">
                  $
                  {stats.newRevenue.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
                  Yearly Revenue Increase
                </p>
                <p className="text-2xl font-bold text-brand-dark">
                  $
                  {stats.yearlyIncrease.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
              <div className="bg-brand-dark p-4 rounded-lg shadow-sm col-span-2">
                <p className="text-xs text-white/50 uppercase font-bold mb-1">
                  Projected Annual ROI
                </p>
                <p className="text-4xl font-bold text-primary">
                  {stats.roi > 0
                    ? stats.roi.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })
                    : 0}
                  %
                </p>
              </div>
            </div>

            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    opacity={0.1}
                  />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      "Monthly Revenue",
                    ]}
                  />
                  <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                    {stats.chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          index === 0
                            ? "hsl(var(--muted-foreground))"
                            : "hsl(var(--primary))"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

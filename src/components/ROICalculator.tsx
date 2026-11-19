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
import { Button } from "@/components/ui/button";
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

export function ROICalculator() {
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(50);
  const [efficiency, setEfficiency] = useState(60);
  const [cost, setCost] = useState(5000);
  const [activePreset, setActivePreset] = useState<string>("custom");

  const applyPreset = (preset: "small" | "medium" | "large") => {
    setActivePreset(preset);
    if (preset === "small") {
      setHours(40);
      setRate(35);
      setEfficiency(50);
      setCost(2500);
    }
    if (preset === "medium") {
      setHours(120);
      setRate(50);
      setEfficiency(60);
      setCost(5000);
    }
    if (preset === "large") {
      setHours(300);
      setRate(65);
      setEfficiency(75);
      setCost(12000);
    }
  };

  const stats = useMemo(() => {
    const monthlySavings = hours * rate * (efficiency / 100);
    const yearlySavings = monthlySavings * 12;
    const paybackMonths = cost / monthlySavings;
    const threeYearROI = ((yearlySavings * 3 - cost) / cost) * 100;

    const chartData = [
      { name: "Year 1", savings: yearlySavings - cost },
      { name: "Year 2", savings: yearlySavings * 2 - cost },
      { name: "Year 3", savings: yearlySavings * 3 - cost },
    ];

    return {
      monthlySavings,
      yearlySavings,
      paybackMonths,
      threeYearROI,
      chartData,
    };
  }, [hours, rate, efficiency, cost]);

  return (
    <Card className="w-full border-2 border-primary/10 shadow-xl overflow-hidden">
      <CardHeader className="bg-brand-dark text-white p-8">
        <CardTitle className="text-3xl font-bold">
          Automation ROI Calculator
        </CardTitle>
        <CardDescription className="text-white/70 text-lg">
          See how much your business can save by automating manual tasks.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8">
            <div className="flex gap-2 mb-2">
              <Button
                variant={activePreset === "small" ? "default" : "outline"}
                size="sm"
                onClick={() => applyPreset("small")}
                className="flex-1"
              >
                Small Team
              </Button>
              <Button
                variant={activePreset === "medium" ? "default" : "outline"}
                size="sm"
                onClick={() => applyPreset("medium")}
                className="flex-1"
              >
                Medium Team
              </Button>
              <Button
                variant={activePreset === "large" ? "default" : "outline"}
                size="sm"
                onClick={() => applyPreset("large")}
                className="flex-1"
              >
                Large Team
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Monthly Manual Hours
                </Label>
                <span className="text-primary font-bold">{hours}h</span>
              </div>
              <Slider
                value={[hours]}
                onValueChange={(v) => {
                  setHours(v[0]);
                  setActivePreset("custom");
                }}
                max={500}
                step={5}
                className="py-4"
              />
              <p className="text-xs text-muted-foreground">
                Total hours your team spends on manual data entry, follow-ups,
                and admin.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Average Hourly Rate ($)
                </Label>
                <span className="text-primary font-bold">${rate}/hr</span>
              </div>
              <Slider
                value={[rate]}
                onValueChange={(v) => {
                  setRate(v[0]);
                  setActivePreset("custom");
                }}
                max={200}
                step={5}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-base font-bold">
                  Target Efficiency Gain (%)
                </Label>
                <span className="text-primary font-bold">{efficiency}%</span>
              </div>
              <Slider
                value={[efficiency]}
                onValueChange={(v) => {
                  setEfficiency(v[0]);
                  setActivePreset("custom");
                }}
                max={100}
                step={5}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-base font-bold">
                Estimated Implementation Cost ($)
              </Label>
              <Input
                type="number"
                value={cost}
                onChange={(e) => {
                  setCost(Number(e.target.value));
                  setActivePreset("custom");
                }}
                className="text-lg font-bold"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8 bg-muted/30 p-8 rounded-xl border">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
                  Yearly Savings
                </p>
                <p className="text-2xl font-bold text-brand-dark">
                  $
                  {stats.yearlySavings.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
                  Payback Period
                </p>
                <p className="text-2xl font-bold text-brand-dark">
                  {stats.paybackMonths.toFixed(1)} Months
                </p>
              </div>
              <div className="bg-brand-dark p-4 rounded-lg shadow-sm col-span-2">
                <p className="text-xs text-white/50 uppercase font-bold mb-1">
                  3-Year Projected ROI
                </p>
                <p className="text-4xl font-bold text-primary">
                  {stats.threeYearROI.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
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
                      "Net Savings",
                    ]}
                  />
                  <Bar dataKey="savings" radius={[4, 4, 0, 0]}>
                    {stats.chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.savings > 0
                            ? "hsl(var(--primary))"
                            : "hsl(var(--destructive))"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-muted-foreground italic">
              Estimated 3-year net savings:{" "}
              <span className="font-bold text-brand-dark">
                $
                {(stats.yearlySavings * 3 - cost).toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

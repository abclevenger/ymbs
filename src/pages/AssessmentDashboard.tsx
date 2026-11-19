import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Activity,
  ShieldAlert,
  Cpu,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
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

const MOCK_SCORES = [
  {
    name: "System Health",
    score: 72,
    status: "warning",
    icon: Activity,
    date: "Oct 15, 2023",
  },
  {
    name: "Cyber Readiness",
    score: 45,
    status: "critical",
    icon: ShieldAlert,
    date: "Oct 18, 2023",
  },
  {
    name: "Tech Audit",
    score: 88,
    status: "good",
    icon: Cpu,
    date: "Nov 02, 2023",
  },
  {
    name: "SEO & Visibility",
    score: 64,
    status: "warning",
    icon: Search,
    date: "Nov 10, 2023",
  },
];

const CHART_DATA = MOCK_SCORES.map((item) => ({
  name: item.name,
  score: item.score,
  fill:
    item.score >= 80
      ? "hsl(var(--primary))"
      : item.score >= 60
        ? "#f59e0b"
        : "#ef4444",
}));

export default function AssessmentDashboard() {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-500 bg-green-500/10";
      case "warning":
        return "text-amber-500 bg-amber-500/10";
      case "critical":
        return "text-red-500 bg-red-500/10";
      default:
        return "text-zinc-500 bg-zinc-500/10";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case "critical":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <SEOHead
        title="Assessment Dashboard | YMBS"
        description="YMBS assessment dashboard."
        canonical="/assessments/dashboard"
        noIndex
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Assessment Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Overview of your organization's operational health scores.
            </p>
          </div>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-primary text-primary-foreground font-bold"
          >
            Discuss Results <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average Score</CardDescription>
              <CardTitle className="text-4xl">
                67
                <span className="text-xl text-muted-foreground font-normal">
                  /100
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-500 flex items-center gap-1 mt-2 font-medium">
                <AlertTriangle className="w-4 h-4" /> Needs Improvement
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Critical Areas</CardDescription>
              <CardTitle className="text-4xl text-red-500">1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mt-2">
                Cybersecurity requires immediate attention.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Assessments Completed</CardDescription>
              <CardTitle className="text-4xl">
                4
                <span className="text-xl text-muted-foreground font-normal">
                  /4
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mt-2">
                All baseline assessments finished.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Score Breakdown</CardTitle>
              <CardDescription>
                Performance across different operational domains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={CHART_DATA}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--muted))" }}
                      contentStyle={{
                        borderRadius: "8px",
                        border: "1px solid hsl(var(--border))",
                        backgroundColor: "hsl(var(--card))",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                    <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={60}>
                      {CHART_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Scores List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Results</CardTitle>
              <CardDescription>Latest assessment scores</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {MOCK_SCORES.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">{item.score}</span>
                    {getStatusIcon(item.status)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

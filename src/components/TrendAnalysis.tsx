
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, TrendingDown, BarChart3, Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";

const TrendAnalysis = () => {
  const monthlyTrends = [
    { month: "Jan 2024", total: 120, domestic: 54, sexual: 30, emotional: 24, economic: 12 },
    { month: "Feb 2024", total: 135, domestic: 61, sexual: 34, emotional: 27, economic: 13 },
    { month: "Mar 2024", total: 128, domestic: 58, sexual: 32, emotional: 26, economic: 12 },
    { month: "Apr 2024", total: 142, domestic: 64, sexual: 35, emotional: 28, economic: 15 },
    { month: "May 2024", total: 118, domestic: 53, sexual: 30, emotional: 24, economic: 11 },
    { month: "Jun 2024", total: 156, domestic: 70, sexual: 39, emotional: 31, economic: 16 },
    { month: "Jul 2024", total: 149, domestic: 67, sexual: 37, emotional: 30, economic: 15 },
    { month: "Aug 2024", total: 163, domestic: 73, sexual: 41, emotional: 33, economic: 16 },
  ];

  const weeklyTrends = [
    { week: "Week 1", incidents: 38, reports: 42, resolved: 35 },
    { week: "Week 2", incidents: 41, reports: 45, resolved: 38 },
    { week: "Week 3", incidents: 35, reports: 38, resolved: 33 },
    { week: "Week 4", incidents: 42, reports: 46, resolved: 39 },
  ];

  const hourlyPatterns = [
    { hour: "00", incidents: 8 }, { hour: "01", incidents: 6 }, { hour: "02", incidents: 4 },
    { hour: "03", incidents: 3 }, { hour: "04", incidents: 2 }, { hour: "05", incidents: 4 },
    { hour: "06", incidents: 7 }, { hour: "07", incidents: 9 }, { hour: "08", incidents: 12 },
    { hour: "09", incidents: 15 }, { hour: "10", incidents: 18 }, { hour: "11", incidents: 22 },
    { hour: "12", incidents: 25 }, { hour: "13", incidents: 23 }, { hour: "14", incidents: 26 },
    { hour: "15", incidents: 28 }, { hour: "16", incidents: 24 }, { hour: "17", incidents: 21 },
    { hour: "18", incidents: 32 }, { hour: "19", incidents: 35 }, { hour: "20", incidents: 38 },
    { hour: "21", incidents: 34 }, { hour: "22", incidents: 28 }, { hour: "23", incidents: 18 },
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Trend Analysis Controls</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select defaultValue="8months">
              <SelectTrigger>
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="8months">Last 8 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Incident Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="domestic">Domestic Violence</SelectItem>
                <SelectItem value="sexual">Sexual Violence</SelectItem>
                <SelectItem value="emotional">Emotional Abuse</SelectItem>
                <SelectItem value="economic">Economic Abuse</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="nairobi">
              <SelectTrigger>
                <SelectValue placeholder="County" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nairobi">Nairobi</SelectItem>
                <SelectItem value="mombasa">Mombasa</SelectItem>
                <SelectItem value="kisumu">Kisumu</SelectItem>
                <SelectItem value="all">All Counties</SelectItem>
              </SelectContent>
            </Select>

            <Button className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-red-500">+15.4%</div>
                <p className="text-sm text-gray-600">vs previous month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Peak Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">6-9 PM</div>
                <p className="text-sm text-gray-600">Highest incident rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <TrendingDown className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-green-500">87.3%</div>
                <p className="text-sm text-gray-600">Cases resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Incident Trends by Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="domestic" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.8} />
              <Area type="monotone" dataKey="sexual" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.8} />
              <Area type="monotone" dataKey="emotional" stackId="1" stroke="#eab308" fill="#eab308" fillOpacity={0.8} />
              <Area type="monotone" dataKey="economic" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Weekly and Hourly Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Reporting Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="incidents" fill="#ef4444" />
                <Bar dataKey="reports" fill="#3b82f6" />
                <Bar dataKey="resolved" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hourly Incident Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyPatterns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="incidents" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrendAnalysis;

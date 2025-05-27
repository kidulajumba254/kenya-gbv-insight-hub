
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertTriangle, Brain, Target, Calendar, Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Area, AreaChart } from "recharts";

const PredictiveAnalytics = () => {
  const forecastData = [
    { month: "Sep 2024", predicted: 168, confidence: 85, historical: 156 },
    { month: "Oct 2024", predicted: 175, confidence: 82, historical: null },
    { month: "Nov 2024", predicted: 182, confidence: 78, historical: null },
    { month: "Dec 2024", predicted: 195, confidence: 75, historical: null },
    { month: "Jan 2025", predicted: 188, confidence: 72, historical: null },
    { month: "Feb 2025", predicted: 192, confidence: 70, historical: null },
  ];

  const riskFactors = [
    {
      factor: "Economic Stress",
      impact: 85,
      trend: "increasing",
      description: "Job losses and inflation correlate with incident spikes"
    },
    {
      factor: "Holiday Periods",
      impact: 72,
      trend: "seasonal",
      description: "December and April show consistent increases"
    },
    {
      factor: "School Closures",
      impact: 68,
      trend: "cyclical",
      description: "Extended school breaks correlate with child abuse cases"
    },
    {
      factor: "Political Events",
      impact: 55,
      trend: "event-based",
      description: "Election periods show temporary spikes"
    }
  ];

  const interventionRecommendations = [
    {
      priority: "high",
      intervention: "Increase Counselor Availability",
      targetMonth: "December 2024",
      expectedReduction: "15-20%",
      cost: "KES 3.2M",
      confidence: 88
    },
    {
      priority: "medium",
      intervention: "Mobile Unit Deployment",
      targetMonth: "November 2024",
      expectedReduction: "10-15%",
      cost: "KES 4.5M",
      confidence: 76
    },
    {
      priority: "high",
      intervention: "Public Awareness Campaign",
      targetMonth: "October 2024",
      expectedReduction: "8-12%",
      cost: "KES 2.1M",
      confidence: 82
    }
  ];

  const countyRiskPredictions = [
    {
      county: "Nairobi",
      currentRisk: "high",
      predictedChange: "+12%",
      confidence: 89,
      keyFactors: ["Population density", "Economic stress"]
    },
    {
      county: "Mombasa",
      currentRisk: "medium",
      predictedChange: "+8%",
      confidence: 83,
      keyFactors: ["Tourism fluctuations", "Port activities"]
    },
    {
      county: "Kisumu",
      currentRisk: "medium",
      predictedChange: "+5%",
      confidence: 78,
      keyFactors: ["Agricultural cycles", "Urban migration"]
    },
    {
      county: "Nakuru",
      currentRisk: "low",
      predictedChange: "-2%",
      confidence: 71,
      keyFactors: ["Stable employment", "Strong community programs"]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "default";
      default: return "outline";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5" />
            <span>Predictive Analytics Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select defaultValue="6months">
              <SelectTrigger>
                <SelectValue placeholder="Forecast Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">Next 3 Months</SelectItem>
                <SelectItem value="6months">Next 6 Months</SelectItem>
                <SelectItem value="1year">Next Year</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Model Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Incidents</SelectItem>
                <SelectItem value="domestic">Domestic Violence</SelectItem>
                <SelectItem value="seasonal">Seasonal Patterns</SelectItem>
                <SelectItem value="economic">Economic Correlation</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="nairobi">
              <SelectTrigger>
                <SelectValue placeholder="Geographic Scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="national">National</SelectItem>
                <SelectItem value="nairobi">Nairobi</SelectItem>
                <SelectItem value="urban">Urban Areas</SelectItem>
                <SelectItem value="rural">Rural Areas</SelectItem>
              </SelectContent>
            </Select>

            <Button className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Forecast</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Next Month Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-red-500">+12%</div>
                <p className="text-sm text-gray-600">Expected increase (85% confidence)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Peak Risk Period</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">Dec 2024</div>
                <p className="text-sm text-gray-600">Holiday season impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Model Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-green-500">87.3%</div>
                <p className="text-sm text-gray-600">30-day prediction accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Chart */}
      <Card>
        <CardHeader>
          <CardTitle>6-Month Incident Forecast</CardTitle>
          <p className="text-sm text-gray-600">
            Predictive model based on historical data, seasonal patterns, and external factors
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'predicted') return [`${value} incidents`, 'Predicted'];
                  if (name === 'historical') return [`${value} incidents`, 'Historical'];
                  if (name === 'confidence') return [`${value}%`, 'Confidence'];
                  return [value, name];
                }}
              />
              <Area type="monotone" dataKey="predicted" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Line type="monotone" dataKey="historical" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="confidence" stroke="#3b82f6" strokeWidth={1} strokeDasharray="5 5" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Risk Factors and County Predictions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskFactors.map((factor, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{factor.factor}</h3>
                    <Badge variant="outline">{factor.trend}</Badge>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Impact Score</span>
                      <span>{factor.impact}%</span>
                    </div>
                    <Progress value={factor.impact} className="h-2" />
                  </div>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>County Risk Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {countyRiskPredictions.map((county, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{county.county}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium ${getRiskColor(county.currentRisk)}`}>
                        {county.currentRisk.toUpperCase()}
                      </span>
                      <span className="text-sm font-bold text-red-600">{county.predictedChange}</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Prediction Confidence</span>
                      <span>{county.confidence}%</span>
                    </div>
                    <Progress value={county.confidence} className="h-2" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Key factors: </span>
                    {county.keyFactors.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Intervention Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>AI-Recommended Interventions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interventionRecommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{rec.intervention}</h3>
                      <Badge variant={getPriorityColor(rec.priority)}>
                        {rec.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Target: </span>
                        <span className="text-blue-600">{rec.targetMonth}</span>
                      </div>
                      <div>
                        <span className="font-medium">Reduction: </span>
                        <span className="text-green-600">{rec.expectedReduction}</span>
                      </div>
                      <div>
                        <span className="font-medium">Cost: </span>
                        <span className="text-orange-600">{rec.cost}</span>
                      </div>
                      <div>
                        <span className="font-medium">Confidence: </span>
                        <span className="text-purple-600">{rec.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">
                    Implement
                  </Button>
                </div>
                <Progress value={rec.confidence} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveAnalytics;

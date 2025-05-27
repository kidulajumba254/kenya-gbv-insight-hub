
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, AlertTriangle, TrendingUp, Users } from "lucide-react";

const GeographicView = () => {
  const counties = [
    {
      name: "Nairobi",
      incidents: 156,
      population: 4500000,
      riskLevel: "high",
      services: 12,
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      name: "Mombasa",
      incidents: 89,
      population: 1200000,
      riskLevel: "medium",
      services: 8,
      coordinates: { lat: -4.0435, lng: 39.6682 }
    },
    {
      name: "Kisumu",
      incidents: 67,
      population: 610000,
      riskLevel: "medium",
      services: 6,
      coordinates: { lat: -0.1022, lng: 34.7617 }
    },
    {
      name: "Nakuru",
      incidents: 45,
      population: 570000,
      riskLevel: "low",
      services: 5,
      coordinates: { lat: -0.3031, lng: 36.0800 }
    },
    {
      name: "Eldoret",
      incidents: 38,
      population: 475000,
      riskLevel: "low",
      services: 4,
      coordinates: { lat: 0.5143, lng: 35.2698 }
    },
    {
      name: "Machakos",
      incidents: 32,
      population: 150000,
      riskLevel: "medium",
      services: 3,
      coordinates: { lat: -1.5177, lng: 37.2634 }
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "default";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="central">Central Kenya</SelectItem>
                <SelectItem value="coast">Coast Province</SelectItem>
                <SelectItem value="western">Western Kenya</SelectItem>
                <SelectItem value="rift-valley">Rift Valley</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="6months">
              <SelectTrigger>
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Map Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Kenya GBV Incident Heat Map</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 h-96 relative overflow-hidden">
            {/* Simplified Kenya Map Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 bg-gray-200 rounded-lg shadow-inner">
                {/* County markers */}
                {counties.map((county, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${30 + (index * 15)}%`,
                      top: `${20 + (index * 12)}%`
                    }}
                  >
                    <div className={`w-4 h-4 rounded-full ${getRiskColor(county.riskLevel)} animate-pulse`}>
                      <div className={`w-6 h-6 rounded-full ${getRiskColor(county.riskLevel)} opacity-30 absolute -top-1 -left-1 animate-ping`}></div>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {county.name}: {county.incidents} incidents
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
              <h4 className="text-sm font-medium mb-2">Risk Level</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs">High Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs">Medium Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs">Low Risk</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* County Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counties.map((county, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{county.name}</CardTitle>
                <Badge variant={getRiskBadgeVariant(county.riskLevel)}>
                  {county.riskLevel.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Incidents</span>
                  </div>
                  <span className="font-bold">{county.incidents}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Population</span>
                  </div>
                  <span className="font-bold">{(county.population / 1000000).toFixed(1)}M</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Rate per 100k</span>
                  </div>
                  <span className="font-bold">
                    {((county.incidents / county.population) * 100000).toFixed(1)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Support Services</span>
                  <span className="font-bold text-blue-600">{county.services}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GeographicView;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, MapPin, Phone, Shield, AlertTriangle, CheckCircle, Building } from "lucide-react";

const ResourceAllocation = () => {
  const resources = [
    {
      type: "Counseling Centers",
      total: 45,
      active: 42,
      capacity: "85%",
      urgent: 3,
      counties: ["Nairobi", "Mombasa", "Kisumu"],
      contact: "+254-700-123-456"
    },
    {
      type: "Safe Houses",
      total: 18,
      active: 16,
      capacity: "78%",
      urgent: 2,
      counties: ["Nairobi", "Nakuru", "Eldoret"],
      contact: "+254-700-234-567"
    },
    {
      type: "Legal Aid Centers",
      total: 32,
      active: 30,
      capacity: "92%",
      urgent: 2,
      counties: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
      contact: "+254-700-345-678"
    },
    {
      type: "Medical Facilities",
      total: 67,
      active: 65,
      capacity: "95%",
      urgent: 2,
      counties: ["All Counties"],
      contact: "+254-700-456-789"
    },
    {
      type: "Police Stations (GBV Units)",
      total: 28,
      active: 26,
      capacity: "88%",
      urgent: 2,
      counties: ["All Counties"],
      contact: "999"
    }
  ];

  const allocationRecommendations = [
    {
      priority: "high",
      title: "Additional Counselors - Nairobi",
      description: "High incident rate requires 5 additional counselors in Nairobi county",
      cost: "KES 2,500,000",
      impact: "Could serve 200+ additional victims monthly",
      timeline: "2-4 weeks"
    },
    {
      priority: "medium",
      title: "Mobile Unit - Western Kenya",
      description: "Deploy mobile support unit to rural areas in Western Kenya",
      cost: "KES 4,000,000",
      impact: "Reach 15 remote communities",
      timeline: "6-8 weeks"
    },
    {
      priority: "high",
      title: "24/7 Hotline Expansion",
      description: "Expand hotline capacity to handle increased call volume",
      cost: "KES 1,800,000",
      impact: "Reduce wait times by 60%",
      timeline: "1-2 weeks"
    }
  ];

  const partnerOrganizations = [
    {
      name: "Coalition on Violence Against Women (COVAW)",
      type: "NGO",
      services: ["Legal Aid", "Counseling", "Advocacy"],
      coverage: "Nairobi, Central Kenya"
    },
    {
      name: "Gender Violence Recovery Centre",
      type: "Medical",
      services: ["Medical Care", "Counseling", "Legal Support"],
      coverage: "Nairobi"
    },
    {
      name: "Ujamaa Africa",
      type: "NGO",
      services: ["Training", "Advocacy", "Research"],
      coverage: "Nairobi, Coast"
    },
    {
      name: "Kenya Women Lawyers Association (FIDA)",
      type: "Legal",
      services: ["Legal Aid", "Court Support", "Training"],
      coverage: "Nationwide"
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

  return (
    <div className="space-y-6">
      {/* Resource Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>Resource Capacity Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{resource.type}</h3>
                  <Badge variant={parseInt(resource.capacity) > 90 ? "destructive" : "default"}>
                    {resource.capacity} Capacity
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{resource.total}</div>
                    <div className="text-sm text-gray-600">Total Centers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{resource.active}</div>
                    <div className="text-sm text-gray-600">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{resource.urgent}</div>
                    <div className="text-sm text-gray-600">Need Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{resource.contact}</div>
                    <div className="text-sm text-gray-600">Contact</div>
                  </div>
                </div>
                
                <Progress value={parseInt(resource.capacity)} className="mb-2" />
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Coverage: {resource.counties.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Allocation Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Resource Allocation Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {allocationRecommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{rec.title}</h3>
                      <Badge variant={getPriorityColor(rec.priority)}>
                        {rec.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{rec.description}</p>
                  </div>
                  <Button size="sm">
                    Approve
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Cost: </span>
                    <span className="text-blue-600">{rec.cost}</span>
                  </div>
                  <div>
                    <span className="font-medium">Impact: </span>
                    <span className="text-green-600">{rec.impact}</span>
                  </div>
                  <div>
                    <span className="font-medium">Timeline: </span>
                    <span className="text-orange-600">{rec.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Partner Organizations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Partner Organizations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partnerOrganizations.map((org, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{org.name}</h3>
                  <Badge variant="outline">{org.type}</Badge>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm text-gray-600 mb-1">Services:</div>
                  <div className="flex flex-wrap gap-1">
                    {org.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{org.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Emergency Contacts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-semibold">Emergency Hotline</span>
              </div>
              <div className="text-2xl font-bold text-red-600">1195</div>
              <div className="text-sm text-gray-600">24/7 GBV Support</div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Police Emergency</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">999</div>
              <div className="text-sm text-gray-600">Immediate Danger</div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold">Medical Emergency</span>
              </div>
              <div className="text-2xl font-bold text-green-600">911</div>
              <div className="text-sm text-gray-600">Medical Assistance</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceAllocation;

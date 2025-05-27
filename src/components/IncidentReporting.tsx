
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Shield, Phone, MapPin, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IncidentReporting = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    incidentType: "",
    severity: "",
    location: "",
    county: "",
    date: "",
    time: "",
    description: "",
    victimAge: "",
    victimGender: "",
    perpetratorRelation: "",
    reporterType: "",
    isAnonymous: false,
    needsImmediateHelp: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Report Submitted Successfully",
      description: "Your report has been received and assigned case ID: GBV-2024-1247. Support services will contact you within 2 hours.",
    });

    // Reset form
    setFormData({
      incidentType: "",
      severity: "",
      location: "",
      county: "",
      date: "",
      time: "",
      description: "",
      victimAge: "",
      victimGender: "",
      perpetratorRelation: "",
      reporterType: "",
      isAnonymous: false,
      needsImmediateHelp: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Emergency Banner */}
      {formData.needsImmediateHelp && (
        <Card className="border-red-500 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-900">Immediate Help Required</h3>
                <p className="text-red-700">If you're in immediate danger, please call emergency services immediately:</p>
                <div className="flex space-x-4 mt-2">
                  <Button variant="destructive" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 999 (Police)
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 1195 (GBV Hotline)
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Reporting Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Confidential Incident Report</span>
              </CardTitle>
              <p className="text-sm text-gray-600">
                All reports are handled with strict confidentiality. You can choose to remain anonymous.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Emergency Checkbox */}
                <div className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <Checkbox 
                    id="immediate-help"
                    checked={formData.needsImmediateHelp}
                    onCheckedChange={(checked) => handleInputChange('needsImmediateHelp', checked as boolean)}
                  />
                  <Label htmlFor="immediate-help" className="text-orange-800 font-medium">
                    This is an emergency - I need immediate help
                  </Label>
                </div>

                {/* Incident Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="incident-type">Type of Incident *</Label>
                    <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="domestic-violence">Domestic Violence</SelectItem>
                        <SelectItem value="sexual-violence">Sexual Violence</SelectItem>
                        <SelectItem value="emotional-abuse">Emotional/Psychological Abuse</SelectItem>
                        <SelectItem value="economic-abuse">Economic Abuse</SelectItem>
                        <SelectItem value="female-genital-mutilation">Female Genital Mutilation</SelectItem>
                        <SelectItem value="early-marriage">Early/Forced Marriage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="severity">Severity Level *</Label>
                    <Select value={formData.severity} onValueChange={(value) => handleInputChange('severity', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical - Life threatening</SelectItem>
                        <SelectItem value="high">High - Serious injury/trauma</SelectItem>
                        <SelectItem value="medium">Medium - Moderate impact</SelectItem>
                        <SelectItem value="low">Low - Verbal/minor incident</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="county">County *</Label>
                    <Select value={formData.county} onValueChange={(value) => handleInputChange('county', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select county" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nairobi">Nairobi</SelectItem>
                        <SelectItem value="mombasa">Mombasa</SelectItem>
                        <SelectItem value="kisumu">Kisumu</SelectItem>
                        <SelectItem value="nakuru">Nakuru</SelectItem>
                        <SelectItem value="eldoret">Eldoret</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Specific Location (Optional)</Label>
                    <Input
                      id="location"
                      placeholder="Area, estate, or landmark"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date of Incident *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Approximate Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                    />
                  </div>
                </div>

                {/* Victim Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="victim-age">Victim Age Range</Label>
                    <Select value={formData.victimAge} onValueChange={(value) => handleInputChange('victimAge', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-18">Under 18</SelectItem>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-35">26-35</SelectItem>
                        <SelectItem value="36-45">36-45</SelectItem>
                        <SelectItem value="46-55">46-55</SelectItem>
                        <SelectItem value="over-55">Over 55</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="victim-gender">Victim Gender</Label>
                    <Select value={formData.victimGender} onValueChange={(value) => handleInputChange('victimGender', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="perpetrator-relation">Relationship to Perpetrator</Label>
                    <Select value={formData.perpetratorRelation} onValueChange={(value) => handleInputChange('perpetratorRelation', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse/Partner</SelectItem>
                        <SelectItem value="ex-partner">Ex-Partner</SelectItem>
                        <SelectItem value="family">Family Member</SelectItem>
                        <SelectItem value="acquaintance">Acquaintance</SelectItem>
                        <SelectItem value="stranger">Stranger</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Incident Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide any additional details that might help in providing appropriate support..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Reporter Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reporter-type">I am reporting as *</Label>
                    <Select value={formData.reporterType} onValueChange={(value) => handleInputChange('reporterType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reporter type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="victim">The victim</SelectItem>
                        <SelectItem value="family">Family member</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="witness">Witness</SelectItem>
                        <SelectItem value="professional">Healthcare/Social worker</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 pt-8">
                    <Checkbox 
                      id="anonymous"
                      checked={formData.isAnonymous}
                      onCheckedChange={(checked) => handleInputChange('isAnonymous', checked as boolean)}
                    />
                    <Label htmlFor="anonymous">Submit anonymously</Label>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Shield className="h-4 w-4 mr-2" />
                  Submit Confidential Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Support Resources Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-red-900">24/7 GBV Hotline</div>
                <div className="text-2xl font-bold text-red-600">1195</div>
                <div className="text-sm text-red-700">Free, confidential support</div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-900">Police Emergency</div>
                <div className="text-2xl font-bold text-blue-600">999</div>
                <div className="text-sm text-blue-700">Immediate danger</div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-900">Medical Emergency</div>
                <div className="text-2xl font-bold text-green-600">911</div>
                <div className="text-sm text-green-700">Medical assistance</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>All reports are handled confidentially</span>
                </div>
                <div className="flex items-start space-x-2">
                  <User className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span>You can choose to remain anonymous</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-orange-600 mt-0.5" />
                  <span>Support teams respond within 2 hours</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-purple-600 mt-0.5" />
                  <span>Location data helps us provide local resources</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IncidentReporting;

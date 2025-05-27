
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Users, TrendingUp, MapPin, Calendar, Shield } from "lucide-react";
import Dashboard from "@/components/Dashboard";
import GeographicView from "@/components/GeographicView";
import TrendAnalysis from "@/components/TrendAnalysis";
import ResourceAllocation from "@/components/ResourceAllocation";
import IncidentReporting from "@/components/IncidentReporting";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Kenya GBV Insight Hub</h1>
                <p className="text-sm text-gray-600">Analytics-Driven Violence Prevention Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Emergency Resources
              </Button>
              <Button size="sm">
                <Users className="h-4 w-4 mr-2" />
                Partner Network
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Empowering Data-Driven Action Against Gender-Based Violence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive analytics platform providing real-time insights, trend analysis, and predictive modeling 
            to support effective resource allocation and targeted interventions across Kenya.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid grid-cols-6 w-full max-w-4xl mx-auto">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="geographic" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Geographic</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Trends</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Resources</span>
            </TabsTrigger>
            <TabsTrigger value="reporting" className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Report</span>
            </TabsTrigger>
            <TabsTrigger value="predictive" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Predictive</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="geographic">
            <GeographicView />
          </TabsContent>

          <TabsContent value="trends">
            <TrendAnalysis />
          </TabsContent>

          <TabsContent value="resources">
            <ResourceAllocation />
          </TabsContent>

          <TabsContent value="reporting">
            <IncidentReporting />
          </TabsContent>

          <TabsContent value="predictive">
            <PredictiveAnalytics />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;

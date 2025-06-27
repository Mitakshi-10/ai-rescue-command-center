
import React, { useState } from 'react';
import { MapPin, Users, AlertTriangle, Activity, Filter } from 'lucide-react';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const sosRequests = [
    { id: 1, name: 'Maria Santos', location: 'Sector 7, Manila', type: 'Medical', urgency: 'high', time: '5 min ago' },
    { id: 2, name: 'John Cruz', location: 'Barangay 12, Cebu', type: 'Rescue', urgency: 'critical', time: '12 min ago' },
    { id: 3, name: 'Ana Reyes', location: 'Zone 3, Davao', type: 'Food', urgency: 'medium', time: '25 min ago' },
    { id: 4, name: 'Carlos Lopez', location: 'District 4, Iloilo', type: 'Shelter', urgency: 'high', time: '1 hour ago' },
  ];

  const riskZones = [
    { zone: 'Metro Manila North', risk: 8, type: 'Flood', action: 'Evacuate' },
    { zone: 'Cebu Coastal Areas', risk: 7, type: 'Storm Surge', action: 'Deploy' },
    { zone: 'Davao Highlands', risk: 6, type: 'Landslide', action: 'Monitor' },
    { zone: 'Iloilo Plains', risk: 5, type: 'Flood', action: 'Monitor' },
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskColor = (risk) => {
    if (risk >= 8) return 'bg-red-500';
    if (risk >= 6) return 'bg-orange-500';
    return 'bg-yellow-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Disaster Dashboard</h1>
          <p className="text-gray-600">Real-time monitoring and coordination center</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active SOS</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rescue Teams</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Safe Shelters</p>
                <p className="text-2xl font-bold text-gray-900">42</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Risk Zones</p>
                <p className="text-2xl font-bold text-gray-900">7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Live Disaster Map</h2>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <select 
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                  >
                    <option value="all">All Incidents</option>
                    <option value="sos">SOS Requests</option>
                    <option value="shelters">Shelters</option>
                    <option value="teams">Rescue Teams</option>
                  </select>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700">Interactive Disaster Map</p>
                  <p className="text-gray-500">Real-time incident tracking</p>
                  
                  {/* Mock Map Pins */}
                  <div className="absolute top-8 left-12 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-20 right-16 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-16 left-20 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Map Legend */}
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>SOS Requests</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Rescue Teams</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Shelters</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span>Blocked Routes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Panels */}
          <div className="space-y-6">
            {/* Recent SOS Requests */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent SOS Requests</h2>
              <div className="space-y-4">
                {sosRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{request.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(request.urgency)}`}>
                        {request.urgency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{request.location}</p>
                    <p className="text-sm text-gray-500">Need: {request.type} • {request.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Risk Assessment */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Risk Assessment</h2>
              <div className="space-y-3">
                {riskZones.map((zone, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{zone.zone}</p>
                      <p className="text-xs text-gray-500">{zone.type} Risk</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${getRiskColor(zone.risk)} mr-2`}></div>
                        <span className="text-sm font-medium">{zone.risk}/10</span>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {zone.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

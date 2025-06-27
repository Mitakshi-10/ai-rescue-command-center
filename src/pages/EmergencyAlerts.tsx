
import React, { useState } from 'react';
import { AlertTriangle, Info, CheckCircle, Clock, Filter, Bell } from 'lucide-react';

const EmergencyAlerts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Flash Flood Warning - Metro Manila',
      description: 'Heavy rainfall causing flash floods in Quezon City, Marikina, and surrounding areas. Avoid low-lying areas.',
      timestamp: '2 minutes ago',
      source: 'PAGASA Weather Bureau',
      location: 'Metro Manila',
      isActive: true
    },
    {
      id: 2,
      type: 'high',
      title: 'Typhoon Pepito Update',
      description: 'Typhoon moving towards Eastern Visayas. Signal No. 2 raised in Samar and Leyte provinces.',
      timestamp: '15 minutes ago',
      source: 'NDRRMC',
      location: 'Eastern Visayas',
      isActive: true
    },
    {
      id: 3,
      type: 'medium',
      title: 'Road Closure - EDSA Northbound',
      description: 'EDSA Northbound closed from Ortigas to Cubao due to flooding. Use alternate routes.',
      timestamp: '45 minutes ago',
      source: 'MMDA',
      location: 'EDSA, Metro Manila',
      isActive: true
    },
    {
      id: 4,
      type: 'info',
      title: 'Evacuation Centers Open',
      description: '12 evacuation centers now open in Marikina City for flood-affected families.',
      timestamp: '1 hour ago',
      source: 'Marikina LGU',
      location: 'Marikina City',
      isActive: true
    },
    {
      id: 5,
      type: 'resolved',
      title: 'Power Restoration Complete',
      description: 'Power has been fully restored in Pasig City after yesterday\'s outage.',
      timestamp: '3 hours ago',
      source: 'Meralco',
      location: 'Pasig City',
      isActive: false
    },
    {
      id: 6,
      type: 'medium',
      title: 'Landslide Risk Advisory',
      description: 'Moderate to high landslide risk in mountainous areas of Rizal Province due to continuous rainfall.',
      timestamp: '4 hours ago',
      source: 'MGB-DENR',
      location: 'Rizal Province',
      isActive: true
    }
  ];

  const safetyTips = [
    '🌊 Never drive through flooded roads - Turn Around, Don\'t Drown',
    '⚡ Stay away from fallen power lines and report them immediately',
    '📱 Keep your phone charged and have a backup power source',
    '🎒 Keep an emergency kit ready: water, food, flashlight, radio',
    '👥 Stay connected with family and neighbors during emergencies',
    '📻 Monitor official weather and emergency broadcasts regularly'
  ];

  const getAlertStyle = (type) => {
    switch (type) {
      case 'critical':
        return 'border-l-red-500 bg-red-50 text-red-900';
      case 'high':
        return 'border-l-orange-500 bg-orange-50 text-orange-900';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50 text-yellow-900';
      case 'info':
        return 'border-l-blue-500 bg-blue-50 text-blue-900';
      case 'resolved':
        return 'border-l-green-500 bg-green-50 text-green-900';
      default:
        return 'border-l-gray-500 bg-gray-50 text-gray-900';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical':
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const filteredAlerts = selectedFilter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Bell className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Emergency Alerts & Communications</h1>
          </div>
          <p className="text-gray-600">Real-time emergency notifications and safety information</p>
        </div>

        {/* Active Alerts Banner */}
        <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              <span className="font-semibold">
                {alerts.filter(alert => alert.isActive && (alert.type === 'critical' || alert.type === 'high')).length} Active High-Priority Alerts
              </span>
            </div>
            <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-sm transition-colors">
              Subscribe to Notifications
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Alerts Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {/* Filter Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Live Alert Feed</h2>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-gray-500" />
                    <select 
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="all">All Alerts</option>
                      <option value="critical">Critical</option>
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="info">Information</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Alerts List */}
              <div className="divide-y divide-gray-200">
                {filteredAlerts.map((alert) => (
                  <div key={alert.id} className={`p-6 border-l-4 ${getAlertStyle(alert.type)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold">{alert.title}</h3>
                            {alert.isActive && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700 mb-3">{alert.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{alert.timestamp}</span>
                            </div>
                            <span>Source: {alert.source}</span>
                            <span>📍 {alert.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Hotlines</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">🚔 Police</span>
                  <span className="font-bold text-red-600">117</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">🚒 Fire Bureau</span>
                  <span className="font-bold text-red-600">116</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">🚑 Emergency Medical</span>
                  <span className="font-bold text-red-600">911</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span className="font-medium">📞 NDRRMC Hotline</span>
                  <span className="font-bold text-blue-600">911-1406</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="font-medium">🌊 Flood Control</span>
                  <span className="font-bold text-green-600">1633</span>
                </div>
              </div>
            </div>

            {/* Weather Update */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Weather</h3>
              <div className="text-center">
                <div className="text-4xl mb-2">🌧️</div>
                <p className="text-2xl font-bold text-gray-900">Heavy Rain</p>
                <p className="text-gray-600">Manila, Philippines</p>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Advisory:</strong> Monsoon rains expected to continue for the next 6-12 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Tips</h3>
              <div className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start p-2 bg-blue-50 rounded">
                    <span className="text-sm text-blue-800">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Sources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Official Sources</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>PAGASA</span>
                  <span className="text-green-600">✓ Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>NDRRMC</span>
                  <span className="text-green-600">✓ Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>MMDA</span>
                  <span className="text-green-600">✓ Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>DOH</span>
                  <span className="text-green-600">✓ Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlerts;

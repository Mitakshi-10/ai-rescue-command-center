
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, MapPin, Users, Shield } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-red-100 rounded-full">
                <AlertTriangle className="h-16 w-16 text-red-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ResQ-AI
            </h1>
            
            <p className="text-2xl md:text-3xl text-red-600 font-semibold mb-8">
              Smart Coordination. Real-Time Response.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI-powered disaster response coordination platform that connects civilians, rescue teams, 
              and agencies for effective emergency response during floods, earthquakes, and cyclones.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => navigate('/sos')}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🆘 Submit SOS
              </button>
              <button 
                onClick={() => navigate('/volunteer')}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🤝 Join as Volunteer
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                📍 View Disaster Map
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-100">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Mapping</h3>
              <p className="text-gray-600">Live disaster tracking with SOS locations, shelters, and rescue teams</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Response</h3>
              <p className="text-gray-600">Connect volunteers, NGOs, and rescue teams for coordinated relief</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Predictive analytics for risk assessment and resource allocation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Stats */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">24/7</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">1000+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Partner Agencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">95%</div>
              <div className="text-gray-600">Response Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

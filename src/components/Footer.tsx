
import React from 'react';
import { Phone, Mail, MapPin, AlertTriangle } from 'lucide-react';

const Footer = () => {
  const emergencyContacts = [
    { label: 'Police', number: '100', icon: '🚔' },
    { label: 'Fire', number: '101', icon: '🚒' },
    { label: 'Ambulance', number: '102', icon: '🚑' },
    { label: 'Disaster Helpline', number: '1070', icon: '🆘' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Emergency Contacts Bar */}
      <div className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyContacts.map((contact) => (
              <div key={contact.number} className="text-center">
                <div className="text-2xl mb-1">{contact.icon}</div>
                <div className="font-semibold">{contact.label}</div>
                <div className="text-xl font-bold">{contact.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold">ResQ-AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing disaster response through AI-powered coordination, 
              connecting communities with life-saving resources when they need them most.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
                Facebook
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded transition-colors">
                Twitter
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
            <ul className="space-y-2">
              <li><a href="/sos" className="text-gray-300 hover:text-red-400 transition-colors">Submit Emergency SOS</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors">Live Disaster Map</a></li>
              <li><a href="/volunteer" className="text-gray-300 hover:text-green-400 transition-colors">Volunteer Registration</a></li>
              <li><a href="/alerts" className="text-gray-300 hover:text-orange-400 transition-colors">Emergency Alerts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-300">Emergency: 1070</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-300">support@resq-ai.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-300">National Disaster Response HQ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 ResQ-AI. Built for humanity in crisis. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Guidelines</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

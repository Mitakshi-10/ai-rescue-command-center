
import React, { useState } from 'react';
import { Users, Heart, Award, MapPin, CheckCircle } from 'lucide-react';

const VolunteerPortal = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    experience: '',
    availability: '',
    location: ''
  });

  const skillOptions = [
    { value: 'medical', label: '🏥 Medical/First Aid', description: 'First aid, nursing, medical assistance' },
    { value: 'rescue', label: '🚑 Search & Rescue', description: 'Emergency response, rescue operations' },
    { value: 'logistics', label: '📦 Logistics & Supply', description: 'Supply distribution, coordination' },
    { value: 'communication', label: '📞 Communication', description: 'Translation, community outreach' },
    { value: 'technology', label: '💻 Technology', description: 'IT support, data management' },
    { value: 'counseling', label: '🤗 Psychological Support', description: 'Crisis counseling, mental health' },
  ];

  const activeDeployments = [
    { zone: 'Metro Manila - Flood Response', volunteers: 45, status: 'Active', urgency: 'High' },
    { zone: 'Cebu - Evacuation Support', volunteers: 23, status: 'Active', urgency: 'Medium' },
    { zone: 'Davao - Relief Distribution', volunteers: 31, status: 'Recruiting', urgency: 'Medium' },
    { zone: 'Iloilo - Medical Assistance', volunteers: 12, status: 'Critical', urgency: 'High' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillChange = (skillValue) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillValue)
        ? prev.skills.filter(s => s !== skillValue)
        : [...prev.skills, skillValue]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Registration:', formData);
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Team! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Your volunteer registration has been successful. You'll receive deployment notifications based on your skills and availability.
          </p>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">Volunteer ID: #VOL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-green-700 text-sm mt-1">Keep this for your records</p>
          </div>
          <button 
            onClick={() => window.location.href = '/dashboard'}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Active Deployments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Heart className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Volunteer Portal</h1>
          <p className="text-xl text-gray-600">Join our community of heroes making a difference</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Volunteer Registration</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="+63 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="City, Province"
                    />
                  </div>
                </div>

                {/* Skills Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Skills & Areas of Interest *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {skillOptions.map((skill) => (
                      <div key={skill.value} className="border border-gray-200 rounded-lg p-3">
                        <label className="flex items-start cursor-pointer">
                          <input
                            type="checkbox"
                            value={skill.value}
                            checked={formData.skills.includes(skill.value)}
                            onChange={() => handleSkillChange(skill.value)}
                            className="mt-1 mr-3 text-green-600 focus:ring-green-500"
                          />
                          <div>
                            <span className="font-medium text-gray-900">{skill.label}</span>
                            <p className="text-sm text-gray-600">{skill.description}</p>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows="3"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Describe any relevant experience, training, or certifications..."
                  ></textarea>
                </div>

                {/* Availability */}
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select your availability</option>
                    <option value="immediate">Immediate Response (24/7)</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="evenings">Evenings & Weekends</option>
                    <option value="flexible">Flexible Schedule</option>
                    <option value="emergency">Emergency Situations Only</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    🤝 Join as Volunteer
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                    <p className="text-sm text-gray-600">Active Volunteers</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15,830</p>
                    <p className="text-sm text-gray-600">Lives Helped</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-yellow-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">156</p>
                    <p className="text-sm text-gray-600">Successful Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Deployments */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Active Deployments</h3>
              <div className="space-y-3">
                {activeDeployments.map((deployment, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{deployment.zone}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deployment.urgency === 'High' ? 'bg-red-100 text-red-800' :
                        deployment.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {deployment.urgency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{deployment.volunteers} volunteers</span>
                      <span className={`font-medium ${
                        deployment.status === 'Critical' ? 'text-red-600' :
                        deployment.status === 'Recruiting' ? 'text-orange-600' :
                        'text-green-600'
                      }`}>
                        {deployment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Benefits */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Volunteer?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Make a direct impact in disaster response</li>
                <li>• Gain valuable emergency response skills</li>
                <li>• Connect with like-minded volunteers</li>
                <li>• Flexible commitment based on availability</li>
                <li>• Training and certification opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPortal;

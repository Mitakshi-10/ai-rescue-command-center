
import React, { useState } from 'react';
import { Users, Heart, MapPin, Clock, Star, CheckCircle, AlertTriangle } from 'lucide-react';

const VolunteerPortal = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: [] as string[],
    availability: '',
    experience: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const skillOptions = [
    { id: 'medical', label: '🏥 Medical Aid', description: 'First aid, nursing, medical support' },
    { id: 'rescue', label: '🚑 Search & Rescue', description: 'Physical rescue operations' },
    { id: 'logistics', label: '📦 Logistics', description: 'Supply distribution, coordination' },
    { id: 'communication', label: '📞 Communication', description: 'Translation, information relay' },
    { id: 'counseling', label: '💚 Counseling', description: 'Psychological support' },
    { id: 'technical', label: '🔧 Technical', description: 'IT support, equipment repair' },
  ];

  const emergencyDeployments = [
    {
      id: 1,
      location: 'Quezon City Flood Zone',
      type: 'Flood Response',
      urgency: 'High',
      volunteers: 12,
      needed: 20,
      skills: ['Medical', 'Rescue'],
      status: 'Active'
    },
    {
      id: 2,
      location: 'Baguio Landslide Area',
      type: 'Landslide Response',
      urgency: 'Critical',
      volunteers: 8,
      needed: 15,
      skills: ['Rescue', 'Medical'],
      status: 'Urgent'
    },
    {
      id: 3,
      location: 'Cebu Typhoon Relief',
      type: 'Typhoon Recovery',
      urgency: 'Medium',
      volunteers: 25,
      needed: 30,
      skills: ['Logistics', 'Communication'],
      status: 'Active'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillToggle = (skillId: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(s => s !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer Registration:', formData);
    setIsRegistered(true);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for joining ResQ-AI as a volunteer. You'll be notified of deployment opportunities matching your skills. 🙏
          </p>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">Volunteer ID: #VOL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-green-700 text-sm mt-1">Save this for your records</p>
          </div>
          <button 
            onClick={() => setActiveTab('deployments')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Active Deployments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Portal</h1>
          <p className="text-gray-600">Join our community of heroes making a difference during emergencies</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('register')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'register'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Register as Volunteer
              </button>
              <button
                onClick={() => setActiveTab('deployments')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'deployments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Active Deployments
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Profile
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Registration Tab */}
            {activeTab === 'register' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Become a Volunteer</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+63 XXX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Location/City *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your city or region"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Skills & Expertise *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {skillOptions.map((skill) => (
                        <div key={skill.id} className="border border-gray-200 rounded-lg p-3">
                          <label className="flex items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.skills.includes(skill.id)}
                              onChange={() => handleSkillToggle(skill.id)}
                              className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{skill.label}</div>
                              <div className="text-sm text-gray-600">{skill.description}</div>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your availability</option>
                      <option value="24/7">24/7 (Emergency responder)</option>
                      <option value="weekends">Weekends only</option>
                      <option value="evenings">Evenings (6PM-10PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe any relevant experience, certifications, or training..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      🤝 Register as Volunteer
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Deployments Tab */}
            {activeTab === 'deployments' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Emergency Deployments</h2>
                <div className="space-y-4">
                  {emergencyDeployments.map((deployment) => (
                    <div key={deployment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{deployment.location}</h3>
                          <p className="text-gray-600">{deployment.type}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(deployment.urgency)}`}>
                          {deployment.urgency} Priority
                        </span>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm">
                            {deployment.volunteers}/{deployment.needed} volunteers
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm">{deployment.status}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm">{deployment.skills.join(', ')}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(deployment.volunteers / deployment.needed) * 100}%` }}
                          ></div>
                        </div>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors whitespace-nowrap">
                          Join Mission
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Volunteer Profile</h2>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Please register first to view your volunteer profile.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPortal;

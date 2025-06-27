
import React, { useState } from 'react';
import { AlertTriangle, MapPin, Phone, Upload, CheckCircle } from 'lucide-react';

const SOSForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    helpType: '',
    description: '',
    image: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const helpTypes = [
    { value: 'medical', label: '🏥 Medical Emergency', color: 'text-red-600' },
    { value: 'rescue', label: '🚑 Rescue Required', color: 'text-orange-600' },
    { value: 'food', label: '🍽️ Food & Water', color: 'text-green-600' },
    { value: 'shelter', label: '🏠 Shelter Needed', color: 'text-blue-600' },
    { value: 'other', label: '🆘 Other Emergency', color: 'text-purple-600' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const getCurrentLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          }));
          setIsLocating(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
          alert('Unable to get your location. Please enter it manually.');
        }
      );
    } else {
      setIsLocating(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SOS Request:', formData);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Help Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            We've got you. Your emergency request has been received and rescue teams have been notified. 💪
          </p>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">Request ID: #SOS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-green-700 text-sm mt-1">Keep this number for reference</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency SOS Request</h1>
          <p className="text-gray-600">Fill out this form to request immediate assistance</p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center">
          <p className="font-semibold">CRITICAL EMERGENCY? CALL IMMEDIATELY:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <span>🚔 Police: 100</span>
            <span>🚒 Fire: 101</span>
            <span>🚑 Ambulance: 102</span>
          </div>
        </div>

        {/* SOS Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="+63 XXX XXX XXXX"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Current Location *
              </label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your address or coordinates"
                  />
                </div>
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  disabled={isLocating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                >
                  {isLocating ? 'Locating...' : 'Use GPS'}
                </button>
              </div>
            </div>

            {/* Help Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type of Help Needed *
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {helpTypes.map((type) => (
                  <label key={type.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="helpType"
                      value={type.value}
                      required
                      onChange={handleInputChange}
                      className="mr-3 text-red-600 focus:ring-red-500"
                    />
                    <span className={`${type.color} font-medium`}>{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description of Emergency
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Please describe your situation and what help you need..."
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image (Optional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 10MB)</p>
                  </div>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              {formData.image && (
                <p className="mt-2 text-sm text-green-600">
                  ✓ File selected: {formData.image.name}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🆘 SUBMIT EMERGENCY REQUEST
              </button>
            </div>
          </form>
        </div>

        {/* Safety Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Safety Reminders</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• Stay calm and move to a safe location if possible</li>
            <li>• Keep your phone charged and within reach</li>
            <li>• Follow instructions from rescue personnel</li>
            <li>• Do not attempt dangerous rescues yourself</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SOSForm;

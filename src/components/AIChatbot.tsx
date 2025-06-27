
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [userName, setUserName] = useState('');
  const [initialProblem, setInitialProblem] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [chatStarted, setChatStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // AI responses for demonstration
  const aiResponses = [
    "I understand your situation. Let me help you with that. Can you provide more details about your location?",
    "Thank you for the information. I'm analyzing your situation now. Have you tried any immediate safety measures?",
    "Based on what you've told me, here are some immediate steps you can take while help is on the way...",
    "I'm coordinating with our emergency response team. Your case has been prioritized. Is there anyone else with you?",
    "Help is being dispatched to your location. Please stay calm and follow these safety instructions...",
    "Emergency services have been notified. Can you confirm if you're in a safe location right now?",
    "I'm monitoring your situation closely. Additional resources are being allocated to assist you.",
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !initialProblem.trim()) return;

    const initialMessage: Message = {
      id: 1,
      text: initialProblem,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([initialMessage]);
    setChatStarted(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: 2,
        text: `Hello ${userName}, I'm ResQ-AI and I'm here to help you through this emergency. ${aiResponses[0]}`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI typing and response
    setTimeout(() => {
      setIsTyping(false);
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!chatStarted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <MessageCircle className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency AI Assistant</h2>
          <p className="text-gray-600">Let our AI help guide you through your emergency situation</p>
        </div>

        <form onSubmit={handleStartChat} className="space-y-6">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="initialProblem" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your problem *
            </label>
            <textarea
              id="initialProblem"
              value={initialProblem}
              onChange={(e) => setInitialProblem(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please describe your emergency situation in detail..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Bot className="h-5 w-5 mr-2" />
            Start Chat with AI Assistant
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <Bot className="h-8 w-8 mr-3" />
          <div>
            <h3 className="text-lg font-semibold">ResQ-AI Emergency Assistant</h3>
            <p className="text-blue-100 text-sm">Helping {userName} through their emergency</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Avatar */}
              <div className={`flex-shrink-0 ${message.isUser ? 'ml-3' : 'mr-3'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isUser ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  {message.isUser ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>

              {/* Message Bubble */}
              <div className={`px-4 py-2 rounded-2xl shadow-sm ${
                message.isUser 
                  ? 'bg-blue-500 text-white rounded-br-sm' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
              }`}>
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isUser ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex mr-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={!currentMessage.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatbot;

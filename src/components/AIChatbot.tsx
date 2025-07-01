
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "HELLO! I'M RESQ-AI EMERGENCY ASSISTANT. HOW CAN I HELP YOU TODAY?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // AI responses for demonstration
  const aiResponses = [
    "I UNDERSTAND YOUR SITUATION. LET ME HELP YOU WITH THAT. CAN YOU PROVIDE MORE DETAILS ABOUT YOUR LOCATION?",
    "THANK YOU FOR THE INFORMATION. I'M ANALYZING YOUR SITUATION NOW. HAVE YOU TRIED ANY IMMEDIATE SAFETY MEASURES?",
    "BASED ON WHAT YOU'VE TOLD ME, HERE ARE SOME IMMEDIATE STEPS YOU CAN TAKE WHILE HELP IS ON THE WAY...",
    "I'M COORDINATING WITH OUR EMERGENCY RESPONSE TEAM. YOUR CASE HAS BEEN PRIORITIZED. IS THERE ANYONE ELSE WITH YOU?",
    "HELP IS BEING DISPATCHED TO YOUR LOCATION. PLEASE STAY CALM AND FOLLOW THESE SAFETY INSTRUCTIONS...",
    "EMERGENCY SERVICES HAVE BEEN NOTIFIED. CAN YOU CONFIRM IF YOU'RE IN A SAFE LOCATION RIGHT NOW?",
    "I'M MONITORING YOUR SITUATION CLOSELY. ADDITIONAL RESOURCES ARE BEING ALLOCATED TO ASSIST YOU.",
    "LET ME CONNECT YOU WITH THE APPROPRIATE EMERGENCY SERVICES. WHAT TYPE OF ASSISTANCE DO YOU NEED MOST URGENTLY?",
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: currentMessage.toUpperCase(),
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
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-4xl mx-auto pixel-card h-[600px] flex flex-col font-pixel">
      {/* Chat Header */}
      <div className="bg-red-600 text-white p-4 flex-shrink-0 pixel-border border-b-0">
        <div className="flex items-center">
          <Bot className="h-8 w-8 mr-3 pixel-animate-bounce" />
          <div>
            <h3 className="text-sm font-bold">RESQ-AI EMERGENCY ASSISTANT</h3>
            <p className="text-red-100 text-xs">AI-POWERED EMERGENCY RESPONSE SUPPORT</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`flex max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Avatar */}
              <div className={`flex-shrink-0 ${message.isUser ? 'ml-3' : 'mr-3'}`}>
                <div className={`w-8 h-8 flex items-center justify-center pixel-border ${
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
              <div className={`px-4 py-2 pixel-shadow pixel-border ${
                message.isUser 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-800'
              }`}>
                <p className="text-xs">{message.text}</p>
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
          <div className="flex justify-start animate-fade-in">
            <div className="flex mr-3">
              <div className="w-8 h-8 bg-green-500 flex items-center justify-center pixel-border">
                <Bot className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="bg-white text-gray-800 pixel-border px-4 py-2 pixel-shadow">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Message Input */}
      <div className="pixel-border border-t-0 p-4 flex-shrink-0 bg-gray-50">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="TYPE YOUR EMERGENCY MESSAGE..."
            className="flex-1 pixel-input text-xs uppercase"
          />
          <button
            type="submit"
            disabled={!currentMessage.trim()}
            className="pixel-button text-white px-6 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center text-xs"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatbot;

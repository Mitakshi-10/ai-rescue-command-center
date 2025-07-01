
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
      text: "GREETINGS, CRAFTER! I'M RESCUE-BOT, YOUR EMERGENCY ASSISTANT. HOW CAN I HELP YOU SURVIVE TODAY?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Minecraft-themed AI responses
  const aiResponses = [
    "I SEE YOU NEED HELP! LET ME CRAFT A SOLUTION FOR YOUR SITUATION. CAN YOU TELL ME MORE ABOUT YOUR COORDINATES?",
    "UNDERSTOOD, CRAFTER. I'M BREWING UP SOME ASSISTANCE FOR YOU. HAVE YOU SECURED YOUR IMMEDIATE AREA?",
    "BASED ON YOUR INTEL, HERE ARE SOME SURVIVAL STRATEGIES WHILE RESCUE MOBS ARE BEING DEPLOYED...",
    "I'M COORDINATING WITH THE RESCUE GUILD. YOUR QUEST HAS BEEN MARKED AS HIGH PRIORITY. ARE THERE OTHER PLAYERS WITH YOU?",
    "HELP IS BEING TELEPORTED TO YOUR LOCATION. STAY CALM AND FOLLOW THESE SAFETY PROTOCOLS...",
    "EMERGENCY SERVICES HAVE BEEN NOTIFIED VIA REDSTONE SIGNAL. CONFIRM IF YOU'RE IN A SAFE SHELTER?",
    "I'M MONITORING YOUR SITUATION LIKE A GUARDIAN. ADDITIONAL RESOURCES ARE BEING ALLOCATED TO YOUR COORDINATES.",
    "LET ME CONNECT YOU WITH THE APPROPRIATE RESCUE SPECIALISTS. WHAT TYPE OF ASSISTANCE DO YOU NEED MOST URGENTLY?",
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
    <div className="max-w-4xl mx-auto minecraft-card h-[600px] flex flex-col font-minecraft">
      {/* Chat Header */}
      <div className="minecraft-header p-4 flex-shrink-0">
        <div className="flex items-center">
          <Bot className="h-6 w-6 mr-3 minecraft-animate-bounce text-minecraft-emerald" />
          <div>
            <h3 className="text-xs font-bold">⛏️ RESCUE-BOT EMERGENCY SYSTEM ⛏️</h3>
            <p className="text-orange-200 text-xs mt-1">MINECRAFT-POWERED EMERGENCY RESPONSE</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 minecraft-cobblestone">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`flex max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Avatar */}
              <div className={`flex-shrink-0 ${message.isUser ? 'ml-3' : 'mr-3'}`}>
                <div className={`w-8 h-8 flex items-center justify-center minecraft-border ${
                  message.isUser ? 'minecraft-diamond' : 'minecraft-grass'
                }`}>
                  {message.isUser ? (
                    <User className="h-3 w-3 text-white" />
                  ) : (
                    <Bot className="h-3 w-3 text-white" />
                  )}
                </div>
              </div>

              {/* Message Bubble */}
              <div className={`px-3 py-2 minecraft-shadow ${
                message.isUser 
                  ? 'minecraft-user-bubble' 
                  : 'minecraft-ai-bubble'
              }`}>
                <p className="text-xs leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 opacity-75`}>
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
              <div className="w-8 h-8 minecraft-grass flex items-center justify-center minecraft-border">
                <Bot className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="minecraft-ai-bubble px-3 py-2 minecraft-shadow">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Message Input */}
      <div className="minecraft-wood p-4 flex-shrink-0">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="TYPE YOUR EMERGENCY MESSAGE..."
            className="flex-1 minecraft-input text-xs uppercase"
          />
          <button
            type="submit"
            disabled={!currentMessage.trim()}
            className="minecraft-button text-white px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-xs minecraft-animate-glow"
          >
            <Send className="h-3 w-3" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatbot;

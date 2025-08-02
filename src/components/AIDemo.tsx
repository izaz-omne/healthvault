import React, { useState } from 'react';
import { Bot, Send, User, Heart } from 'lucide-react';

const AIDemo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hello! I'm your AI Health Assistant. I can help answer questions about your health, medications, and medical history. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sampleQuestions = [
    "What are the side effects of my blood pressure medication?",
    "Should I be concerned about my recent lab results?",
    "What exercises are safe with my heart condition?",
    "When should I schedule my next check-up?"
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { type: 'user', content: message },
      { 
        type: 'ai', 
        content: "Based on your medical history, I can provide some insights. However, please consult with your healthcare provider for personalized medical advice. This is a demo response to show the AI interaction." 
      }
    ];
    
    setMessages(newMessages);
    setInputValue('');
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try Our AI Health Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience intelligent health insights powered by advanced AI. Ask questions and get instant, 
            personalized responses based on your medical history.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Health Assistant</h3>
                  <p className="text-blue-100 text-sm">Always here to help with your health questions</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-teal-500 to-green-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Heart className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Questions */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <p className="text-sm text-gray-600 mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs bg-white hover:bg-blue-50 text-gray-700 px-3 py-2 rounded-full border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Ask about your health, medications, or medical history..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
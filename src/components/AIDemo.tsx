import React, { useState } from 'react';
import { Bot, Send, User, Heart, Search, Loader, RefreshCw } from 'lucide-react';
import { useAI } from '../hooks/useAI';
import { formatAIMessage } from '../utils/formatMessage';

const AIDemo = () => {
  const { messages, sendMessage, isLoading, error, clearMessages } = useAI();
  const [inputValue, setInputValue] = useState('');

  const sampleQuestions = [
    "What are the latest treatments for diabetes?",
    "Tell me about recent COVID-19 research",
    "What are the side effects of metformin?",
    "Current guidelines for blood pressure management"
  ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;
    
    await sendMessage(message);
    setInputValue('');
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Health Assistant <span className="text-blue-600">with LLaMA 3.3</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience intelligent health insights powered by LLaMA 3.3 with real-time internet access. 
            Get the latest medical information and personalized health guidance.
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
                  <h3 className="text-white font-semibold">LLaMA 3.3 Health Assistant</h3>
                  <p className="text-blue-100 text-sm flex items-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>Connected to internet • Always learning</span>
                  </p>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <button 
                    onClick={clearMessages}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    title="Clear conversation"
                  >
                    <RefreshCw className="w-4 h-4 text-white" />
                  </button>
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
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.type === 'user' ? (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      ) : (
                        <div 
                          className="text-sm leading-relaxed" 
                          dangerouslySetInnerHTML={{
                            __html: formatAIMessage(message.content)
                          }}
                        />
                      )}
                      {message.timestamp && (
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-green-500">
                      <Loader className="w-4 h-4 text-white animate-spin" />
                    </div>
                    <div className="rounded-2xl px-4 py-3 bg-gray-100 text-gray-800">
                      <p className="text-sm leading-relaxed">Thinking and searching...</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Error display */}
            {error && (
              <div className="px-6 py-2 bg-red-50 border-t border-red-200">
                <p className="text-sm text-red-600">Error: {error}</p>
              </div>
            )}

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
                  placeholder="Ask about health topics, latest research, medications..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2"
                >
                  {isLoading ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
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
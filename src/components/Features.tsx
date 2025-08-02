import React from 'react';
import { Database, Bot, Mic, Share2, Shield, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Unified Medical Records",
      description: "Securely store and organize all your medical records in one centralized, encrypted platform accessible anytime, anywhere.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Bot,
      title: "AI Health Assistant",
      description: "Get instant answers to health questions with our advanced AI that understands your medical history and provides personalized insights.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Mic,
      title: "Voice-to-Text Prescriptions",
      description: "Enable doctors to generate prescriptions quickly using voice commands, reducing errors and improving patient care efficiency.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Share2,
      title: "Seamless Provider Sharing",
      description: "Instantly share medical records with healthcare providers while maintaining complete control over your privacy and permissions.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption, HIPAA compliance, and multi-factor authentication keep your sensitive health data protected.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your health records on any device with our responsive design optimized for smartphones, tablets, and desktops.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"> Digital Health</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare technology designed to simplify medical record management 
            and enhance patient-provider communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
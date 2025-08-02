import React from 'react';
import { ArrowRight, Play, Shield, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">HIPAA Compliant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health Records,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"> Unified & Secure</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Store, manage, and share your medical records securely across all healthcare providers. 
              Get instant AI-powered health insights and empower your doctors with voice-to-text prescriptions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 text-blue-500" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-teal-500" />
                <span>50,000+ Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-teal-500" />
                <span>1,200+ Providers</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare professional using digital platform" 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Medical Records</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Synced</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">AI Health Assistant</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Voice Prescriptions</span>
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
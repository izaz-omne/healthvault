import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VoiceDemo from '../components/VoiceDemo';
import { Stethoscope, Clock, FileText, Shield, Users, Zap } from 'lucide-react';

const DoctorsPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: "85% Faster",
      description: "Reduce prescription writing time with voice dictation",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "99.2% Accuracy",
      description: "Medical terminology optimized transcription",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Secure handling of all patient data",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "Instant transcription and prescription generation",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Stethoscope className="w-8 h-8 text-blue-500" />
              <span className="text-lg font-semibold text-blue-600 tracking-wide uppercase">For Healthcare Professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Voice-to-Text
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"> Prescription System</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your clinical workflow with AI-powered voice dictation. Generate accurate prescriptions 
              in seconds with support for English and Bangla medical terminology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Doctors Choose HealthVault
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven results that improve patient care and reduce administrative burden
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      <VoiceDemo />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join 1,200+ Healthcare Providers
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the future of prescription management with our voice-powered platform
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorsPage;

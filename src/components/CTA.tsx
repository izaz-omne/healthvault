import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "30-day free trial",
    "No setup fees",
    "Cancel anytime",
    "24/7 support",
    "HIPAA compliant",
    "Instant setup"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of patients and healthcare providers who trust HealthVault 
            to manage their medical records securely and efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-white hover:border-white/80 flex items-center justify-center space-x-2">
              <span>Schedule Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 justify-center">
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                <span className="text-sm text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-200 text-sm">
              Trusted by 50,000+ patients and 1,200+ healthcare providers worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
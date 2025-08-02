import React from 'react';
import { Shield, Lock, Eye, Key, CheckCircle } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy regulations and data protection standards."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption protects your data in transit and at rest."
    },
    {
      icon: Eye,
      title: "Zero-Knowledge Architecture",
      description: "We can't see your data - only you and authorized providers have access."
    },
    {
      icon: Key,
      title: "Multi-Factor Authentication",
      description: "Advanced authentication methods including biometrics and hardware tokens."
    }
  ];

  const certifications = [
    "SOC 2 Type II",
    "HIPAA Compliant",
    "FDA 21 CFR Part 11",
    "ISO 27001",
    "GDPR Ready",
    "HITECH Act"
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bank-Level Security for Your Health Data
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your medical information is protected by the most advanced security measures available, 
            ensuring complete privacy and compliance with all healthcare regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Trusted by Healthcare Leaders</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our platform meets the highest standards for healthcare data security and has been 
                audited by leading cybersecurity firms. We maintain certifications across all major 
                compliance frameworks.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 Security Operations Center monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Regular third-party security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Incident response team with 1-hour SLA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Business Associate Agreements available</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Security Certifications & Compliance</h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
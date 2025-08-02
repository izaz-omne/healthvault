import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Cardiologist, Metro Heart Center",
      image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "HealthVault has revolutionized how I access patient records. The voice-to-text feature saves me hours each week, and the AI insights help me provide better care.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Patient, Diabetes Management",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Finally, all my medical records in one place! The AI assistant helped me understand my test results and when to take my medications. It's like having a health expert in my pocket.",
      rating: 5
    },
    {
      name: "Dr. Emily Thompson",
      role: "Family Physician, Community Health",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The seamless record sharing between providers has eliminated so much paperwork. My patients love having control over their health data while keeping everything secure.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals & Patients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how HealthVault is transforming healthcare experiences for providers and patients alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <p className="text-gray-600">Healthcare Providers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
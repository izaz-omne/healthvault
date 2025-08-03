import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AIDemo from '../components/AIDemo';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <AIDemo />
      <Security />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { Menu, X, Heart, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">HealthVault</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</Link>
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">For Doctors</Link>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">AI Demo</a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/doctors" className="block text-gray-600 hover:text-blue-600 font-medium">For Doctors</Link>
            <a href="#features" className="block text-gray-600 hover:text-blue-600 font-medium">Features</a>
            <a href="#demo" className="block text-gray-600 hover:text-blue-600 font-medium">AI Demo</a>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
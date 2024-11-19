import React from 'react';
import { Plane, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Voyage</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-indigo-600">Destinations</a>
            <a href="#experiences" className="text-gray-700 hover:text-indigo-600">Experiences</a>
            <a href="#deals" className="text-gray-700 hover:text-indigo-600">Deals</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#destinations" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Destinations</a>
            <a href="#experiences" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Experiences</a>
            <a href="#deals" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Deals</a>
            <button className="w-full text-left px-3 py-2 text-indigo-600">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}
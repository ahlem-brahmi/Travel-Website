import React from 'react';
import { Search, MapPin, Calendar, TrendingUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import DestinationCard from './components/DestinationCard';

function App() {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      title: "Paris, France",
      description: "Experience the city of love with its iconic landmarks and rich culture",
      price: "From $899"
    },
    {
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      title: "Tuscany, Italy",
      description: "Discover rolling hills, vineyards, and Renaissance art",
      price: "From $799"
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Bali, Indonesia",
      description: "Explore tropical beaches, temples, and vibrant culture",
      price: "From $999"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Discover Your Next Adventure</h1>
            <p className="text-xl mb-8">Explore the world's most beautiful destinations with our curated travel experiences</p>
            
            {/* Search Box */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-indigo-600" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full focus:outline-none text-gray-800"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-indigo-600" />
                  <input
                    type="text"
                    placeholder="When?"
                    className="w-full focus:outline-none text-gray-800"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-indigo-600" />
                  <select className="w-full focus:outline-none text-gray-800 bg-transparent">
                    <option>Budget</option>
                    <option>$0 - $1000</option>
                    <option>$1000 - $2000</option>
                    <option>$2000+</option>
                  </select>
                </div>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-20 max-w-7xl mx-auto px-4" id="destinations">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handpicked Destinations</h3>
              <p className="text-gray-600">Carefully selected locations ensuring unforgettable experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-gray-600">Expert recommendations on when to travel for the best experience</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Value for Money</h3>
              <p className="text-gray-600">Competitive prices and exclusive deals for our customers</p>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  );
}

export default App;
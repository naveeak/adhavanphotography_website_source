import React, { useState, useEffect } from 'react';
import { Camera, ChevronRight, Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "/api/placeholder/1920/1080",
      title: "Capturing Love Stories",
      description: "Timeless Wedding Photography"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Pre-Wedding Moments",
      description: "Beautiful Couple Shoots"
    },
    {
      image: "/api/placeholder/1920/1080",
      title: "Wedding Events",
      description: "Every Detail Matters"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: "Wedding", image: "/api/placeholder/600/400" },
    { name: "Pre-Wedding", image: "/api/placeholder/600/400" },
    { name: "Outdoor", image: "/api/placeholder/600/400" },
    { name: "Traditional", image: "/api/placeholder/600/400" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white bg-opacity-95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-serif">Weddings by Aadhavan</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-light">
              <a href="#home" className="hover:text-rose-500 transition">Home</a>
              <a href="#about" className="hover:text-rose-500 transition">About</a>
              <a href="#portfolio" className="hover:text-rose-500 transition">Portfolio</a>
              <a href="#services" className="hover:text-rose-500 transition">Services</a>
              <a href="#contact" className="hover:text-rose-500 transition">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-rose-50 rounded">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-rose-50 rounded">About</a>
              <a href="#portfolio" className="block px-3 py-2 hover:bg-rose-50 rounded">Portfolio</a>
              <a href="#services" className="block px-3 py-2 hover:bg-rose-50 rounded">Services</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-rose-50 rounded">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-7xl font-serif mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl font-light">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">Creating timeless memories of your special day</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                    <button className="flex items-center space-x-2 bg-rose-500 text-white px-4 py-2 rounded-full">
                      <span>View Gallery</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/800/600"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-6">About Aadhavan</h2>
              <p className="text-gray-600 mb-6">
                With a passion for capturing authentic moments and a keen eye for detail, 
                I specialize in creating timeless wedding photographs that tell your unique 
                love story. Each wedding is a new canvas, and I take pride in preserving 
                those precious moments that you'll cherish forever.
              </p>
              <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Latest Works</h2>
          <p className="text-center text-gray-600 mb-12">A glimpse into our recent wedding stories</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative overflow-hidden group rounded-lg shadow-lg">
                <img
                  src="/api/placeholder/400/400"
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-12">Let's discuss your special day</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-600">
                <p>Email: aadhavan@weddings.com</p>
                <p>Phone: +91 123 456 7890</p>
                <p>Based in Chennai, Available Worldwide</p>
                <div className="flex space-x-4 mt-6 text-rose-500">
                  <Instagram className="h-6 w-6 cursor-pointer hover:text-rose-600" />
                  <Facebook className="h-6 w-6 cursor-pointer hover:text-rose-600" />
                  <Youtube className="h-6 w-6 cursor-pointer hover:text-rose-600" />
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              <textarea
                placeholder="Tell us about your wedding"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Camera className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-serif">Weddings by Aadhavan</span>
          </div>
          <div className="flex space-x-6 text-rose-500">
            <Instagram className="h-5 w-5 cursor-pointer hover:text-rose-600" />
            <Facebook className="h-5 w-5 cursor-pointer hover:text-rose-600" />
            <Youtube className="h-5 w-5 cursor-pointer hover:text-rose-600" />
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} Weddings by Aadhavan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

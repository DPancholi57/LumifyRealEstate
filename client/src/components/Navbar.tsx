import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Building2, HelpCircle, Users, MessageCircle, Menu, X, DollarSign, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-2xl font-bold text-gray-900">Lumify</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">How It Works</a>
            <a href="#listings" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              <Search className="h-4 w-4 inline mr-1" />Listings
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              <DollarSign className="h-4 w-4 inline mr-1" />Cashback
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
          </div>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex md:items-center">
            <Button asChild className="px-4 py-2 shadow-sm">
              <a href="#contact">Get 1.25% Cashback</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#features" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-primary">Features</a>
          <a href="#how-it-works" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-primary">How It Works</a>
          <a href="#listings" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-primary">
            <Search className="h-4 w-4 inline mr-1" />Listings
          </a>
          <a href="#benefits" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-primary">
            <DollarSign className="h-4 w-4 inline mr-1" />1.25% Cashback
          </a>
          <a href="#testimonials" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-primary">Testimonials</a>
          <a href="#faq" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-primary">FAQ</a>
          <a href="#contact" onClick={handleNavLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

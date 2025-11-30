import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on scroll state
  // When at top (not scrolled): Transparent BG, White Text
  // When scrolled: White BG, Dark Text
  const navBg = isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 lg:py-6';
  const textColor = isScrolled ? 'text-slate-600' : 'text-white/90';
  const hoverColor = isScrolled ? 'hover:text-emerald-600' : 'hover:text-white';
  const mobileMenuButton = isScrolled ? 'text-slate-700' : 'text-white';

  // Please ensure you have uploaded 'logo.png' to your project root
  const LOGO_URL = "./logo.png";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Image Based */}
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <img 
                src={LOGO_URL} 
                alt="GreenRx Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'How it Works', 'Services', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className={`${textColor} ${hoverColor} font-medium transition-colors`}
              >
                {item}
              </a>
            ))}
            <button className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg ${
              isScrolled 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20' 
                : 'bg-white text-emerald-900 hover:bg-emerald-50 shadow-black/20'
            }`}>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${mobileMenuButton} p-2`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Always white background for readability */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'How it Works', 'Services', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
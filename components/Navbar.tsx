
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone, Star, Moon, Sun } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 dark:bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-blue-900 dark:text-blue-100 font-extrabold text-xl tracking-tight block leading-none">KLEENIT</span>
                <span className="text-green-600 dark:text-green-400 font-bold text-[10px] uppercase tracking-[0.2em]">Ghana Limited</span>
              </div>
            </a>
          </div>

          {/* Navigation Links - Visible from MD (Tablet) upwards */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.path}`}
                className={`px-3 py-2 text-[13px] lg:text-sm font-bold transition-all rounded-full ${
                  isActive(link.path) 
                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Visible from MD upwards */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="hidden lg:flex items-center bg-gray-50 dark:bg-slate-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-slate-700">
               <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
               <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">{BUSINESS_INFO.rating} Rating</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center px-4 lg:px-6 py-2.5 border border-transparent text-xs lg:text-sm font-black rounded-full text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle - Only visible on small phones */}
          <div className="md:hidden flex items-center gap-3">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
             <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="p-2.5 bg-blue-900 dark:bg-blue-700 text-white rounded-full shadow-lg"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.path}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-base font-bold rounded-2xl ${
                  isActive(link.path)
                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-2">
              <div className="p-6 bg-slate-900 dark:bg-slate-800 rounded-[2rem] text-white space-y-4">
                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest text-center">Contact Us Directly</p>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center px-6 py-4 text-lg font-black rounded-xl text-white bg-green-600 hover:bg-green-500 shadow-xl shadow-green-900/20 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

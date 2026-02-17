
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">K</span>
              </div>
              <div>
                <span className="text-white font-extrabold text-xl tracking-tight block leading-none">KLEENIT</span>
                <span className="text-green-400 font-bold text-xs uppercase tracking-widest">Ghana Limited</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional cleaning services for both domestic and commercial spaces across Ghana. Committed to quality, reliability, and excellence.
            </p>
            <div className="flex space-x-4">
              <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/reviews" className="text-slate-400 hover:text-white transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/gallery" className="text-slate-400 hover:text-white transition-colors text-sm">Work Gallery</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">Our Services</h3>
            <ul className="space-y-4">
              {SERVICES.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-slate-400 text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-slate-400 hover:text-white transition-colors text-sm">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-slate-400 text-sm">{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kleenit Ghana Limited. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

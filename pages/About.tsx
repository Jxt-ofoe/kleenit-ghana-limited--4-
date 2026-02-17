
import React from 'react';
import { ShieldCheck, UserCheck, Clock, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10">
      {/* Header with high-key clean image */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover opacity-15 dark:opacity-5 grayscale" 
            alt="Teamwork cleaning" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-slate-50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 dark:text-blue-100 mb-6 tracking-tight">Our Story</h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Kleenit Ghana Limited is built on a foundation of trust and a passion for hygiene. We transform spaces across Ghana.
          </p>
        </div>
      </section>

      {/* Company Intro with floating images */}
      <section className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-in fade-in slide-in-from-left duration-700">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-green-50 dark:bg-green-900/20 rounded-full blur-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1000&q=80"
                alt="Professional Cleaning"
                className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white dark:border-slate-800 object-cover aspect-square"
              />
              <div className="absolute -bottom-10 -right-10 glass-card dark:bg-slate-800/90 p-10 rounded-[2.5rem] shadow-2xl z-20 border border-white/50 dark:border-slate-700">
                <span className="block text-5xl font-black text-blue-900 dark:text-blue-100 mb-1 tracking-tighter">4.5</span>
                <span className="text-xs uppercase tracking-widest font-black text-slate-500 dark:text-slate-400">Google Rated</span>
              </div>
            </div>
            
            <div className="space-y-10 animate-in fade-in slide-in-from-right duration-700">
              <div>
                <h2 className="text-sm font-black text-green-600 dark:text-green-400 uppercase tracking-widest mb-4">Committed to Quality</h2>
                <h3 className="text-4xl md:text-5xl font-black text-blue-900 dark:text-white leading-tight">The Kleenit Advantage</h3>
              </div>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                We are more than a cleaning company; we are your partners in creating productive work environments and peaceful homes. Our team is trained in the latest sanitation techniques to ensure safety and brilliance.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 p-6 glass-card dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-2xl h-fit"><Target className="w-8 h-8 text-blue-900 dark:text-blue-300" /></div>
                  <div>
                    <h4 className="font-black text-blue-900 dark:text-blue-100 mb-2 text-xl">Our Mission</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">To lead the cleaning industry in Ghana through innovation, reliability, and unparalleled customer service.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 glass-card dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-2xl h-fit"><Heart className="w-8 h-8 text-green-600 dark:text-green-400" /></div>
                  <div>
                    <h4 className="font-black text-blue-900 dark:text-blue-100 mb-2 text-xl">Our Culture</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">We treat every property as our own, ensuring meticulous attention to even the smallest details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage with high-res Ghana themed backdrop */}
      <section className="py-32 relative text-white overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Corporate background" 
          />
          <div className="absolute inset-0 bg-blue-900/90 dark:bg-blue-950/90 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Serving Ghana Nationwide</h2>
          <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed">
            Headquartered in Accra, we extend our premium services to Kumasi and surrounding regions. Our mobile teams are equipped to handle large-scale contracts across the entire country.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full border border-white/20">
            <UserCheck className="w-6 h-6 text-green-400" />
            24/7 Professional Support
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

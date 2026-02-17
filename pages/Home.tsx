
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star, Award, Shield } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80"
            alt="Clean minimalist room"
            className="w-full h-full object-cover opacity-100 dark:opacity-40 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 md:via-white/80 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-900/60 md:dark:via-slate-900/90 transition-colors duration-300"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-100 dark:border-blue-800 px-4 py-2 rounded-full mb-8">
                <Shield className="w-4 h-4 text-blue-900 dark:text-blue-300" />
                <span className="text-blue-900 dark:text-blue-300 font-bold text-xs uppercase tracking-widest">Premium Cleaning Service Ghana</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 dark:text-white leading-tight mb-8 drop-shadow-sm">
                Reliable & <br />
                <span className="text-green-600 dark:text-green-400">Professional</span> <br />
                Cleaning Services
              </h1>
              
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-lg leading-relaxed font-medium">
                Expert domestic & commercial cleaning solutions for a healthier, fresher environment. Serving Accra, Kumasi, and nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-blue-900 dark:text-blue-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-blue-900 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-6 p-4 glass-card dark:bg-slate-800/60 rounded-2xl w-fit border border-white/50 dark:border-slate-700 shadow-lg">
                <div className="flex -space-x-2">
                  {[11,12,13].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800" src={`https://i.pravatar.cc/100?img=${i}`} alt="Client" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200 mt-1">4.5 Rating (4 Reviews)</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000">
               <div className="absolute -inset-4 bg-green-500/10 rounded-[3rem] rotate-3 blur-3xl"></div>
               <img 
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1000&q=80" 
                className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-800 object-cover aspect-square"
                alt="Modern bright cleaning" 
               />
               <div className="absolute bottom-10 -left-10 z-20 glass-card dark:bg-slate-800/90 p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/50 dark:border-slate-700">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-2xl"><Award className="w-8 h-8 text-green-600 dark:text-green-400" /></div>
                  <div>
                    <p className="text-xl font-extrabold text-blue-900 dark:text-white">100%</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Hygiene Guaranteed</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats with subtle background */}
      <section className="bg-blue-900 dark:bg-blue-950 py-20 text-white overflow-hidden relative transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80"
            alt="Corporate office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black">200+</p>
              <p className="text-blue-300 font-bold uppercase text-xs tracking-widest">Successful Projects</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black">4.5</p>
              <p className="text-blue-300 font-bold uppercase text-xs tracking-widest">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black">Nation</p>
              <p className="text-blue-300 font-bold uppercase text-xs tracking-widest">Wide Service</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black">8 AM</p>
              <p className="text-blue-300 font-bold uppercase text-xs tracking-widest">Daily Start</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Clean white pattern background from index.html */}
      <section className="py-24 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-green-600 dark:text-green-400 uppercase tracking-widest mb-4">What We Offer</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white">Specialized Cleaning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl shadow-inner flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-slate-600 transition-all border border-slate-100 dark:border-slate-600">
                  <div className="dark:text-blue-300">{s.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">{s.description}</p>
                <Link to="/services" className="inline-flex items-center text-blue-900 dark:text-blue-300 font-black text-sm group-hover:gap-2 transition-all">
                  View Service <ArrowRight className="ml-1 w-4 h-4 text-green-600 dark:text-green-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials with high-quality blurred background */}
      <section className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover blur-sm" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-blue-900 dark:bg-blue-950 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="" />
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                   <h2 className="text-4xl font-black mb-6">Trusted Nationwide</h2>
                   <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">
                    Kleenit Ghana Limited sets the standard for professional cleaning. Our testimonials reflect our commitment to excellence in every space we touch.
                   </p>
                   <Link to="/reviews" className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-xl font-bold text-lg transition-all inline-block shadow-lg active:scale-95">
                    See All Reviews
                   </Link>
                </div>
                <div className="space-y-6">
                  {TESTIMONIALS.slice(0, 2).map((t, i) => (
                    <div key={i} className="glass-card bg-white/10 dark:bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                       <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, idx) => <Star key={idx} className={`w-3 h-3 ${idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-400'}`} />)}
                       </div>
                       <p className="text-lg italic mb-4 font-medium leading-relaxed">"{t.text}"</p>
                       <p className="font-bold text-white uppercase text-xs tracking-widest">{t.name} — <span className="text-blue-300">{t.role}</span></p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Final Call to Action with bright clean image background */}
      <section className="py-24 text-center relative overflow-hidden dark:bg-slate-900 transition-colors duration-300">
         <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-10">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="" />
         </div>
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 dark:text-blue-100 mb-8">Ready for a Sparkling Result?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 font-medium">From domestic deep cleans to commercial maintenance, Kleenit is your partner in hygiene.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-900/40 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600">
                Get Your Free Quote
              </Link>
              <a href={BUSINESS_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-green-600/40 flex items-center justify-center hover:bg-green-500">
                 Quick WhatsApp Chat
              </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;

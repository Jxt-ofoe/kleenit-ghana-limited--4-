
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-10">
      {/* Enhanced Header with Clean Background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Clean office space" 
          />
          <div className="absolute inset-0 bg-blue-900/90 dark:bg-slate-900/90 mix-blend-multiply transition-colors duration-300"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Expert Cleaning</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Professional solutions tailored for homes, retail, and corporate spaces across Ghana.
          </p>
        </div>
      </section>

      {/* Services List with pattern background */}
      <section className="py-24 bg-white/50 dark:bg-slate-900/50 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 transition-colors">
                      <div className="dark:text-blue-300">{service.icon}</div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 font-bold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/contact" className="px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 active:scale-95">
                      Get a Quote
                    </Link>
                    <a href={BUSINESS_INFO.social.whatsapp} className="px-8 py-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 font-bold rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors flex items-center shadow-sm active:scale-95">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Chat with Us
                    </a>
                  </div>
                </div>

                <div className="flex-1 w-full animate-in fade-in zoom-in duration-700">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-900/5 dark:bg-blue-500/10 rounded-[2.5rem] rotate-2 -z-10 group-hover:rotate-0 transition-transform"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-700"
                    />
                    <div className="absolute bottom-6 right-6 glass-card dark:bg-slate-800/80 p-4 rounded-2xl shadow-xl border border-white/50 dark:border-slate-600">
                       <p className="text-blue-900 dark:text-blue-200 font-black text-xs uppercase tracking-widest">Premium Choice</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Callout with bright background */}
      <section className="py-24 relative overflow-hidden dark:bg-slate-900 transition-colors duration-300">
        <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
           <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-2 px-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-bold text-xs uppercase tracking-widest mb-6">Custom Solutions</div>
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-100 mb-6">Need a Tailored Cleaning Plan?</h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-medium">
            Every business and home has unique needs. We provide free site visits to discuss your specific requirements and offer a comprehensive service proposal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center px-10 py-4 bg-blue-900 dark:bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 dark:hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-white dark:bg-transparent border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-100 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
              Request Visit <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="pt-10">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 text-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-center mb-6">
              <div className="flex items-center bg-white dark:bg-slate-800 px-6 py-2 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 dark:text-gray-600'}`} />
                ))}
                <span className="ml-3 font-bold text-blue-900 dark:text-blue-100 text-lg">{BUSINESS_INFO.rating}/5.0</span>
              </div>
           </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-100 mb-6">Client Testimonials</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building trust through consistency and quality. Read what our customers have to say about Kleenit Ghana Limited.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none relative transition-colors">
                <div className="absolute -top-4 -right-4 p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-300 rounded-full">
                  <Quote className="w-6 h-6 rotate-180" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 dark:text-gray-600'}`} />
                  ))}
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold text-xl uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-blue-900 dark:text-blue-100 font-extrabold flex items-center gap-1">
                      {t.name}
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    </h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Call to action for reviews */}
            <div className="bg-blue-900 dark:bg-slate-800 p-10 rounded-3xl text-white flex flex-col justify-center text-center transition-colors">
              <h3 className="text-2xl font-bold mb-4">Been a client?</h3>
              <p className="text-blue-100 mb-8">Your feedback helps us grow. Please share your experience on our social media or Google profile.</p>
              <div className="flex flex-col gap-3">
                <a href={BUSINESS_INFO.social.facebook} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold transition-all text-sm">Review on Facebook</a>
                <a href={BUSINESS_INFO.social.instagram} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold transition-all text-sm">Review on Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Summary */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 inline-block p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
            <span className="text-5xl font-extrabold text-blue-900 dark:text-blue-100">4.5</span>
            <div className="flex justify-center gap-1 mt-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-4">A Name for Reliable Cleaning</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our reputation is built on consistency. We approach every single cleaning job with the same meticulous attention to detail that our clients have come to expect.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

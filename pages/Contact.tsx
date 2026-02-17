
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', service: '', location: '', message: '' });
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 dark:bg-slate-900 py-24 text-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 dark:text-blue-100 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional cleaning is just a message away. Request a custom quote or call us directly.
          </p>
        </div>
      </section>

      <section className="py-24 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-8">Reach Kleenit <br />Ghana Limited</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-2xl h-fit text-blue-900 dark:text-blue-300"><MapPin /></div>
                       <div>
                          <p className="font-black text-blue-900 dark:text-blue-100 mb-1">Our Location</p>
                          <p className="text-slate-600 dark:text-slate-400">{BUSINESS_INFO.address}</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-2xl h-fit text-green-700 dark:text-green-400"><Phone /></div>
                       <div>
                          <p className="font-black text-blue-900 dark:text-blue-100 mb-1">Phone & WhatsApp</p>
                          <p className="text-slate-600 dark:text-slate-400">{BUSINESS_INFO.phone}</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-2xl h-fit text-blue-900 dark:text-blue-300"><Clock /></div>
                       <div>
                          <p className="font-black text-blue-900 dark:text-blue-100 mb-1">Business Hours</p>
                          <p className="text-slate-600 dark:text-slate-400">Opens at 8:00 AM daily</p>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="p-10 bg-blue-900 dark:bg-slate-800 rounded-[2.5rem] text-white">
                  <ShieldCheck className="w-12 h-12 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                  <p className="text-blue-200 leading-relaxed mb-8">
                    Every quote includes our quality guarantee. If you're not satisfied, we make it right. That's the Kleenit promise.
                  </p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-block bg-white text-blue-900 px-6 py-3 rounded-xl font-bold">
                    Talk to an Agent
                  </a>
               </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 transition-colors">
               <h3 className="text-3xl font-black text-blue-900 dark:text-blue-100 mb-10">Request a Quote</h3>
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      required
                      placeholder="Your Name"
                      className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 transition-all font-medium"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      required
                      placeholder="Phone Number"
                      className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 transition-all font-medium"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <input 
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 transition-all font-medium"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <select 
                    className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 transition-all font-medium appearance-none"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Service Type</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about the project..."
                    className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 transition-all font-medium resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                  <button 
                    disabled={submitted}
                    className="w-full bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {submitted ? 'Message Sent!' : 'Send Quote Request'}
                    <Send className="w-5 h-5" />
                  </button>
               </form>
               {submitted && (
                <div className="mt-6 text-center text-green-600 dark:text-green-400 font-bold p-4 bg-green-50 dark:bg-green-900/30 rounded-2xl animate-pulse">
                  Thank you! We've received your request and will contact you shortly.
                </div>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 grayscale contrast-125 dark:invert dark:contrast-100 transition-all duration-300">
         <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6!2d-0.224!3d5.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c8e!2sFlower%20St%2C%20Accra!5e0!3m2!1sen!2sgh!4v1654876543210" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Office Map"
         />
      </section>
    </div>
  );
};

export default Contact;

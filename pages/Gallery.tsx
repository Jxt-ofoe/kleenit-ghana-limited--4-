import React, { useState, useRef, useEffect } from 'react';
import { MousePointer2, Sparkles, ArrowLeftRight, X, ZoomIn } from 'lucide-react';

interface BeforeAfterProps {
  before: string;
  after: string;
  label: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ before, after, label }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="space-y-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white dark:border-slate-700"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
      >
        {/* After Image (Background) */}
        <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After cleaning" />
        
        {/* Before Image (Foreground) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img src={before} className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} alt="Before cleaning" />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-6 left-6 bg-red-600/90 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-sm">
            Before
          </div>
        </div>

        {/* Labels & Overlay */}
        <div className="absolute top-6 right-6 bg-green-600/90 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-sm">
          After
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-xl z-20 cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-900 text-blue-900">
            <ArrowLeftRight className="w-6 h-6" />
          </div>
        </div>
      </div>
      <p className="text-center text-blue-900 dark:text-blue-100 font-bold text-lg">{label}</p>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'before-after'>('before-after');
  const [selectedImage, setSelectedImage] = useState<{ url: string, title: string } | null>(null);

  const transformations = [
    {
      before: '/kleenit/WhatsApp Image 2026-02-17 at 3.54.02 PM.jpeg', // Gritty floor
      after: '/kleenit/const_after.jpeg', // Clean floor
      label: 'Post-Construction Floor Polishing'
    },
    {
      before: '/kleenit/roombefore.jpeg', // Messy kitchen
      after: '/kleenit/roomafter.jpeg', // Clean kitchen
      label: 'Deep Room cleaning'
    }
  ];

  const images = [
    { url: '/kleenit/livingroom.jpg', title: 'Residential Living Room' },
    { url: '/kleenit/kitchen.jpg', title: 'Sparkling Kitchen' },
    { url: '/kleenit/office.jpg', title: 'Modern Office Space' },
    { url: '/kleenit/toilet.jpg', title: 'Commercial Restroom' },
    { url: '/kleenit/warehouse.jpg', title: 'Industrial Floor Cleaning' },
    { url: '/kleenit/equip.jpg', title: 'Professional Equipment' },
    { url: '/kleenit/attention.jpg', title: 'Attention to Detail' },
    { url: '/kleenit/2fb3d53420eb06a19b5c1e2f361b8048.jpg', title: 'Post-Construction Finish' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 dark:bg-slate-900 py-24 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <img src="/kleenit/carpet.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 dark:text-blue-100 mb-6 tracking-tight">Visual Results</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            See the Kleenit transformation. We don't just clean; we restore spaces to their former glory.
          </p>
          
          <div className="mt-12 inline-flex p-1.5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
            <button 
              onClick={() => setActiveTab('before-after')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'before-after' ? 'bg-blue-900 text-white shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-300'}`}
            >
              Transformations
            </button>
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'all' ? 'bg-blue-900 text-white shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-300'}`}
            >
              Photo Gallery
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'before-after' ? (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {transformations.map((t, idx) => (
                <div key={idx} className="animate-in fade-in slide-in-from-bottom duration-700">
                  <BeforeAfterSlider {...t} />
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 px-6 py-3 rounded-full font-bold">
                <MousePointer2 className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />
                Drag the handle to see the magic
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 dark:bg-slate-950 animate-in fade-in duration-500 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className="group relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-square bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-700 cursor-zoom-in"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="flex items-center justify-between">
                       <Sparkles className="w-8 h-8 text-green-400 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                       <ZoomIn className="w-6 h-6 text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                    </div>
                    <h4 className="text-white font-black text-xl leading-tight">{img.title}</h4>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mt-2">Click to Zoom</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-blue-900/90 dark:bg-slate-900/95 backdrop-blur-md"></div>
          <button 
            className="absolute top-6 right-6 z-[110] bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-100 p-3 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative z-[105] max-w-5xl w-full animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url.replace('&w=800', '&w=1600')} 
              alt={selectedImage.title} 
              className="w-full rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-700 object-contain max-h-[85vh]"
            />
            <div className="mt-6 text-center text-white">
               <h4 className="text-2xl md:text-3xl font-black mb-2">{selectedImage.title}</h4>
               <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">Professional Cleaning Excellence</p>
            </div>
          </div>
        </div>
      )}

      {/* Quote Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 dark:bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <QuoteIcon className="w-12 h-12 text-green-400 mx-auto mb-8 opacity-50" />
                <h3 className="text-3xl md:text-4xl font-black mb-8 italic leading-tight">
                  “The difference between a house and a home is the care put into its cleanliness. At Kleenit, we provide that soul-soothing shine.”
                </h3>
                <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
                <p className="text-green-400 font-black tracking-widest uppercase text-sm">Kleenit Ghana Limited • Quality Guaranteed</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V8C12.017 6.89543 12.9124 6 14.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V8C3.017 6.89543 3.91243 6 5.017 6H10.017C11.6739 6 13.017 7.34315 13.017 9V15C13.017 17.7614 10.7784 20 8.017 20H5.017V21Z" />
  </svg>
);

export default Gallery;
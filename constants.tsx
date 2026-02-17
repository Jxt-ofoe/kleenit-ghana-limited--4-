
import React from 'react';
import { Home, Building2, Sparkles, HardHat, Bug, Armchair } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Kleenit Ghana Limited",
  phone: "+233 55 123 4567", 
  email: "info@kleenitghana.com",
  address: "123 Flower St, Accra, Ghana",
  rating: "4.8",
  hours: "Mon - Sat: 8:00 AM - 6:00 PM",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/233551234567"
  }
};

export const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Comprehensive home cleaning services customized to your lifestyle.',
    fullDescription: 'Our residential team treats your home with the utmost care. From dusting to deep bathroom sanitization, we ensure every corner is spotless.',
    icon: <Home className="w-8 h-8 text-blue-900" />,
    features: ['Living Areas & Bedrooms', 'Kitchen Deep Clean', 'Bathrooms & Toilets', 'Floor Polishing'],
    image: '/public/kleenit/residentail_serive.jpg'
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'Professional office cleaning to maintain a productive environment.',
    fullDescription: 'We provide reliable janitorial services for offices, banks, and retail spaces. Create a lasting impression on your clients with a pristine workspace.',
    icon: <Building2 className="w-8 h-8 text-blue-900" />,
    features: ['Desk & Workstation Sanitization', 'Common Area Maintenance', 'Restroom Management', 'Trash Removal'],
    image: '/public/kleenit/commercial clean.jpg'
  },
  {
    id: 'post-construction',
    title: 'Post-Construction',
    description: 'Removing debris and dust after renovation or new builds.',
    fullDescription: 'Construction leaves a mess. We specialize in removing fine dust, paint splatters, and debris to make your new property move-in ready.',
    icon: <HardHat className="w-8 h-8 text-blue-900" />,
    features: ['Debris Removal', 'Fine Dust Extraction', 'Window scraping/cleaning', 'Floor Scrubbing'],
    image: '/public/kleenit/post construction service.jpg'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Intensive cleaning for move-ins, move-outs, or seasonal refreshes.',
    fullDescription: 'A top-to-bottom clean that targets areas often missed during regular cleaning. Perfect for end-of-tenancy or spring cleaning.',
    icon: <Sparkles className="w-8 h-8 text-blue-900" />,
    features: ['Behind Appliances', 'Inside Cabinets', 'Grout Cleaning', 'Light Fixtures'],
    image: '/public/kleenit/deep.jpg'
  },
  {
    id: 'fumigation',
    title: 'Fumigation & Pest Control',
    description: 'Safe and effective elimination of pests and insects.',
    fullDescription: 'Protect your property from pests. Our licensed fumigation experts use safe chemicals to eliminate mosquitoes, rodents, and other pests.',
    icon: <Bug className="w-8 h-8 text-blue-900" />,
    features: ['Mosquito Control', 'Rodent Elimination', 'Termite Treatment', 'Preventative Spraying'],
    image: '/public/kleenit/pest control.jpg'
  },
  {
    id: 'upholstery',
    title: 'Carpet & Upholstery',
    description: 'Revitalize your furniture and carpets with deep steam cleaning.',
    fullDescription: 'We remove stains, odors, and allergens from your sofas, carpets, and mattresses using industrial-grade steam cleaning equipment.',
    icon: <Armchair className="w-8 h-8 text-blue-900" />,
    features: ['Steam Cleaning', 'Stain Removal', 'Odor Neutralization', 'Fabric Protection'],
    image: '/public/kleenit/carpet.jpg'
  }
];

export const TESTIMONIALS = [
  { name: "Sarah O.", role: "Homeowner, East Legon", text: "The team was punctual and incredibly thorough. My house hasn't looked this good in years!", rating: 5 },
  { name: "Kwame A.", role: "Office Manager", text: "Kleenit handles our office cleaning in Airport City. Professional, trustworthy, and invisible in the best way.", rating: 5 },
  { name: "Ama D.", role: "Real Estate Agent", text: "I use them for all my move-out cleanings. They ensure I get my deposit back every time.", rating: 4 }
];

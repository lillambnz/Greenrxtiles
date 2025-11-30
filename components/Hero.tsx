import React from 'react';
import { ArrowRight, Leaf, CigaretteOff, Activity, ChevronDown } from 'lucide-react';
import { ServiceType } from '../types';

const Hero: React.FC = () => {
  const handleServiceClick = (service: string) => {
    const element = document.getElementById(service.toLowerCase().replace(/\s/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`User selected: ${service}`);
    }
  };

  const BOOKING_URL = "https://www.halaxy.com/book/appointment/gp-general-practitioner/dr-ameer-khan/1446371/1123911";

  return (
    <div className="relative w-full flex flex-col md:flex-row bg-slate-900 md:h-screen md:overflow-hidden min-h-screen">
      {/* Service 1: Alternate Health */}
      <div 
        onClick={() => handleServiceClick(ServiceType.ALTERNATE_HEALTH)}
        className="group relative flex-1 flex flex-col justify-center items-center p-8 pt-24 md:pt-0 md:p-4 lg:p-8 text-center transition-all duration-500 ease-in-out hover:flex-[1.5] bg-emerald-950 text-white cursor-pointer border-b md:border-b-0 md:border-r border-white/10 min-h-[33vh]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80')] bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110" />
        {/* Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-950/60 to-black/80 pointer-events-none" />
        
        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105 max-w-md mx-auto flex flex-col items-center">
          <div className="mb-4 md:mb-6 p-4 bg-emerald-900/40 rounded-full inline-block backdrop-blur-sm group-hover:bg-emerald-800/60 transition-colors border border-white/10 shadow-lg">
            <Leaf size={40} className="text-emerald-300 md:w-12 md:h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight drop-shadow-lg">{ServiceType.ALTERNATE_HEALTH}</h2>
          <p className="text-emerald-100/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed drop-shadow-md max-w-xs md:max-w-sm">
            Safe, legal, and professional therapeutic consultations. Expert doctors, personalized treatment plans, and ongoing support.
          </p>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center font-semibold text-emerald-300 group-hover:text-white transition-colors bg-white/10 px-6 py-2 md:px-8 md:py-3 rounded-full backdrop-blur-md hover:bg-white/20 border border-white/5 text-sm md:text-base"
          >
            Start Consultation <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Service 2: Quit Smoking */}
      <div 
        onClick={() => handleServiceClick(ServiceType.QUIT_SMOKING)}
        className="group relative flex-1 flex flex-col justify-center items-center p-8 pt-24 md:pt-0 md:p-4 lg:p-8 text-center transition-all duration-500 ease-in-out hover:flex-[1.5] bg-teal-900 text-white cursor-pointer border-b md:border-b-0 md:border-r border-white/10 min-h-[33vh]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80')] bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110" />
        {/* Vertical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-teal-900/60 to-black/80 pointer-events-none" />

        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105 max-w-md mx-auto flex flex-col items-center">
           <div className="mb-4 md:mb-6 p-4 bg-teal-800/40 rounded-full inline-block backdrop-blur-sm group-hover:bg-teal-700/60 transition-colors border border-white/10 shadow-lg">
            <CigaretteOff size={40} className="text-teal-300 md:w-12 md:h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight drop-shadow-lg">{ServiceType.QUIT_SMOKING}</h2>
          <p className="text-teal-100/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed drop-shadow-md max-w-xs md:max-w-sm">
            Evidence-based cessation programs to help you breathe easier.
          </p>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center font-semibold text-teal-300 group-hover:text-white transition-colors bg-white/10 px-6 py-2 md:px-8 md:py-3 rounded-full backdrop-blur-md hover:bg-white/20 border border-white/5 text-sm md:text-base"
          >
            Start Journey <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Service 3: Weight Loss */}
      <div 
        onClick={() => handleServiceClick(ServiceType.WEIGHT_LOSS)}
        className="group relative flex-1 flex flex-col justify-center items-center p-8 pt-24 md:pt-0 md:p-4 lg:p-8 text-center transition-all duration-500 ease-in-out hover:flex-[1.5] bg-emerald-800 text-white cursor-pointer min-h-[33vh]"
      >
         {/* Background Image */}
         <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80')] bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110" />
         {/* Vertical Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-emerald-800/60 to-black/80 pointer-events-none" />

         <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105 max-w-md mx-auto flex flex-col items-center">
           <div className="mb-4 md:mb-6 p-4 bg-emerald-700/40 rounded-full inline-block backdrop-blur-sm group-hover:bg-emerald-600/60 transition-colors border border-white/10 shadow-lg">
            <Activity size={40} className="text-emerald-200 md:w-12 md:h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight drop-shadow-lg">{ServiceType.WEIGHT_LOSS}</h2>
          <p className="text-emerald-100/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed drop-shadow-md max-w-xs md:max-w-sm">
            Medical weight management and metabolic health support.
          </p>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center font-semibold text-emerald-200 group-hover:text-white transition-colors bg-white/10 px-6 py-2 md:px-8 md:py-3 rounded-full backdrop-blur-md hover:bg-white/20 border border-white/5 text-sm md:text-base"
          >
            Learn More <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50 hidden md:block pointer-events-none">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
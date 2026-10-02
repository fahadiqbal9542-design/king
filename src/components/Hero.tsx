import React from 'react';
import heroCampusImg from '../assets/images/hero_campus_modern_1790336150439.jpg';

interface HeroProps {
  onDiscoverMore: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverMore, onContactUs }) => {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Campus Image with measured scrim for WCAG AA contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampusImg}
          alt="Modern Web Developer Academy Campus with glass architectural buildings and students"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Measured scrim overlay matching screenshot aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a30]/50 via-slate-950/35 to-[#0b1a30]/65" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28 flex flex-col items-center">
        
        {/* Kicker / Subtitle */}
        <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider font-display drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-bottom-2 duration-500">
          WELCOME TO
        </p>

        {/* Main Display Title */}
        <h1 className="mt-1 sm:mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight font-display drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-balance">
          WEB DEVELOPER
        </h1>

        {/* Tagline */}
        <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Modern Education For A Bright Future
        </p>

        {/* CTA Buttons matching screenshot exactly */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Discover More button: dark solid rounded pill */}
          <button
            onClick={onDiscoverMore}
            className="px-8 sm:px-10 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-[#0e243f] hover:bg-[#153459] active:scale-95 transition-all shadow-xl hover:shadow-2xl border border-blue-900/60 cursor-pointer"
          >
            Discover More
          </button>

          {/* Contact Us button: clean white border outline pill */}
          <button
            onClick={onContactUs}
            className="px-8 sm:px-10 py-3.5 rounded-full text-sm sm:text-base font-bold text-white border-2 border-white hover:bg-white hover:text-[#0b1a30] active:scale-95 transition-all backdrop-blur-xs shadow-lg cursor-pointer"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

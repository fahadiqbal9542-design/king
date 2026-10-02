import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling down 280px
      if (scrollTop > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  // Circumference for circular progress indicator
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0b1a30] text-white shadow-xl hover:shadow-cyan-500/25 hover:bg-[#122e54] active:scale-95 transition-all duration-300 border border-slate-700/80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        {/* SVG Circular Progress Ring */}
        <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-[#00d2ff] transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Upward arrow icon with subtle bounce on hover */}
        <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Floating Tooltip */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-slate-900/95 text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800">
        Back to top ({Math.round(scrollProgress)}%)
      </span>
    </div>
  );
};

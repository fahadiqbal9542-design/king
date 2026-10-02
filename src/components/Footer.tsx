import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApply }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setNewsletterSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="w-full bg-[#071324] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-lg p-1 border border-slate-700/80">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 28L30 76L46 36L62 76L80 28" stroke="#00d2ff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M54 78L78 24" stroke="#f97316" strokeWidth="11" strokeLinecap="round" />
                  <path d="M42 54H86" stroke="#fb923c" strokeWidth="9" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-white uppercase font-display leading-tight">
                  WEB DEVELOPER
                </span>
                <span className="text-xs tracking-widest text-slate-300 font-medium uppercase font-display">
                  ACADEMY
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Modern Education For A Bright Future. Transforming students into high-impact software engineers, data science practitioners, and digital product designers through immersive, project-based instruction.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Accredited Member & Certified CIRR Reporting Institution</span>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('skills')} className="text-cyan-400 hover:text-cyan-300 font-semibold transition cursor-pointer">
                  Skills & Technology Stack
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-cyan-400 transition cursor-pointer">
                  Software Engineering Immersive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-cyan-400 transition cursor-pointer">
                  Data Science & AI Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-cyan-400 transition cursor-pointer">
                  Digital Design & UI/UX Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-cyan-400 transition cursor-pointer">
                  Full Stack Web Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-cyan-400 transition cursor-pointer">
                  Part-Time Flex Schedule
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Aid */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Admissions & Campus
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenApply} className="text-cyan-400 hover:text-cyan-300 font-semibold transition cursor-pointer">
                  Apply for Admission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-cyan-400 transition cursor-pointer">
                  Admission Requirements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('campus-life')} className="hover:text-cyan-400 transition cursor-pointer">
                  Campus Facilities & Labs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-cyan-400 transition cursor-pointer">
                  Upcoming Campus Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition cursor-pointer">
                  Schedule Campus Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Academy Gazette
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe to curriculum updates, open workshop invites, and tech industry career reports.
            </p>
            {newsletterSubscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 rounded-xl text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-slate-900/90 text-white text-xs px-3.5 py-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-bold text-[#0b1a30] bg-[#00d2ff] hover:bg-[#38bdf8] rounded-lg transition shadow flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Web Developer Academy. All rights reserved. Equal opportunity educational institution.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Enrollment</span>
            <span className="hover:text-slate-300 cursor-pointer">Consumer Disclosures</span>
            <span className="hover:text-slate-300 cursor-pointer">CIRR Audit Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

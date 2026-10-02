import React, { useState } from 'react';
import techLabImg from '../assets/images/campus_tech_lab_1790336162608.jpg';
import studentLifeImg from '../assets/images/campus_student_life_1790336174811.jpg';
import libraryHubImg from '../assets/images/campus_library_hub_1790336186434.jpg';
import { Monitor, Users, BookOpen, Coffee, Award, Sparkles } from 'lucide-react';

export const CampusLifeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'labs' | 'collaboration' | 'library'>('labs');

  const facilityDetails = {
    labs: {
      title: 'High-Performance Coding & AI Workstations',
      image: techLabImg,
      badge: 'Advanced Hardware',
      description: 'Equipped with dual 4K monitors, dedicated GPU clusters for deep learning training, ergonomic Herman Miller seating, and ultra-high-speed fiber networks designed for round-the-clock student development.',
      highlights: [
        'Dedicated NVIDIA RTX workstation nodes',
        'Physical test devices across iOS & Android for web responsive testing',
        '24/7 keycard access for immersive cohort students',
        'Private pair-programming acoustic pods'
      ]
    },
    collaboration: {
      title: 'Student Commons & Hackathon Arena',
      image: studentLifeImg,
      badge: 'Community & Culture',
      description: 'The heartbeat of our campus culture where cross-discipline teams meet for sprint planning, demo days, coffee chats, and weekend hackathons. High-ceiling natural lighting and expansive glass architecture.',
      highlights: [
        'Weekly campus lightning talks and demo hours',
        'Artisan espresso & snack stations',
        'Active clubs: Women in Tech, Open Source Guild, AI Founders',
        'Mentorship lounge with visiting tech executives'
      ]
    },
    library: {
      title: 'Digital Library & Research Hub',
      image: libraryHubImg,
      badge: 'Focused Study',
      description: 'A tranquil, architecturally designed sanctuary for focused deep work, algorithmic research, architectural whiteboarding, and access to thousands of computer science journals and digital subscriptions.',
      highlights: [
        'Acoustically treated quiet study chambers',
        'Full digital subscriptions to ACM, IEEE, and O’Reilly Learning',
        'Floor-to-ceiling glass architecture overlooking the green courtyard',
        'One-on-one TA support booths'
      ]
    }
  };

  const current = facilityDetails[activeTab];

  return (
    <section id="campus-life" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Inspiring Physical & Digital Spaces
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
            Life at Web Developer Academy
          </h2>
          <p className="mt-3 text-base text-slate-600">
            An environment engineered specifically for deep focus, creative software engineering, and enduring camaraderie among future technology leaders.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('labs')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'labs'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4 text-cyan-600" />
              <span>Coding & AI Labs</span>
            </button>
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'collaboration'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Student Commons</span>
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'library'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Digital Research Library</span>
            </button>
          </div>
        </div>

        {/* Facility Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image View */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-slate-900">
            <img
              src={current.image}
              alt={current.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#0b1a30]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700/60">
              {current.badge}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#0e243f] font-display">
                {current.title}
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                  Facility Specifications
                </span>
                <ul className="space-y-2.5">
                  {current.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Scheduled campus tours available daily</span>
              <a
                href="#contact"
                className="text-xs font-bold text-cyan-700 hover:text-cyan-800 hover:underline"
              >
                Book In-Person Tour &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

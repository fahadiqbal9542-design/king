import React from 'react';
import { KEY_STATS, FACULTY_MEMBERS } from '../data/academyData';
import { ShieldCheck, Award, Users, Building2, Briefcase, GraduationCap, Presentation } from 'lucide-react';
import studentDemoImg from '../assets/images/student_demo_showcase_1790338126962.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Mission & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Institutional Heritage & Mission
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
              Pioneering Modern Education For A Rapidly Evolving World
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Founded to bridge the widening gap between traditional academic theory and the fast-paced realities of the modern technology industry, Web Developer Academy provides rigorous, immersive education in computer software, machine learning, and human-computer design.
            </p>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Our campus blends state-of-the-art laboratory facilities with industry practitioner faculty. Every student graduates not just with a portfolio of live production code, but with deep systemic problem-solving instincts and immediate workplace readiness.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>State Board Certified & CIRR Audited</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <Building2 className="w-4 h-4 text-cyan-600" />
                <span>Modern 42,000 sq ft Campus & Cloud Labs</span>
              </div>
            </div>
          </div>

          {/* Institutional Showcase & Stats Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Student Capstone Demo Photo Banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
              <img
                src={studentDemoImg}
                alt="Web Developer Academy student presenting capstone demo to mentors"
                referrerPolicy="no-referrer"
                className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a30]/85 via-transparent to-transparent flex items-end p-4">
                <div className="text-white text-xs">
                  <span className="font-bold flex items-center gap-1.5 text-cyan-300">
                    <Presentation className="w-3.5 h-3.5" />
                    Bi-Weekly Demo Days & Industry Juries
                  </span>
                  <p className="text-[11px] text-slate-200 mt-0.5">Students ship live software to engineering leaders</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0b1a30] to-[#122e54] text-white rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-lg font-bold tracking-tight text-white font-display mb-4">
                Audited Student Outcomes
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {KEY_STATS.map((stat, idx) => (
                  <div key={idx} className="border-b border-slate-700/60 pb-3">
                    <div className="text-2xl sm:text-3xl font-black text-[#00d2ff] font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-slate-400 mt-3 leading-normal">
                * Verified by third-party accounting and career outcomes auditor for the 2024-2025 academic graduating cohorts.
              </p>
            </div>
          </div>
        </div>

        {/* Distinguished Faculty Section */}
        <div className="pt-10 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              World-Class Mentorship
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0e243f] tracking-tight font-display">
              Learn Directly from Industry Leaders
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Our faculty members are active engineering directors, principal researchers, and design leaders who bring real corporate engineering standards into the lecture hall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MEMBERS.map((faculty, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0b1a30] text-[#00d2ff] flex items-center justify-center font-bold text-lg font-display mb-4">
                    {faculty.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{faculty.name}</h4>
                  <p className="text-xs font-semibold text-cyan-700 mt-0.5">{faculty.role}</p>
                  <p className="text-xs text-slate-600 mt-2 font-medium">{faculty.specialty}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                  <span className="block font-semibold text-slate-700">{faculty.priorCompany}</span>
                  <span>{faculty.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

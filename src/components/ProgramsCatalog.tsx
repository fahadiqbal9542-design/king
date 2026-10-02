import React, { useState } from 'react';
import { ACADEMY_PROGRAMS } from '../data/academyData';
import { Program } from '../types';
import { Clock, Calendar, DollarSign, Award, BookOpen, ChevronRight, Check } from 'lucide-react';

interface ProgramsCatalogProps {
  onApplyForProgram: (programId: string) => void;
  selectedProgramSlug?: string | null;
}

export const ProgramsCatalog: React.FC<ProgramsCatalogProps> = ({
  onApplyForProgram,
  selectedProgramSlug
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'engineering' | 'data' | 'design'>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filteredPrograms = activeCategory === 'all'
    ? ACADEMY_PROGRAMS
    : ACADEMY_PROGRAMS.filter(p => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Curriculum & Tracks
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
              Comprehensive Career Programs
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Intensive, hands-on immersive bootcamps and degree-equivalent programs built in direct consultation with tech industry leads.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-slate-200/80 rounded-xl max-w-fit">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveCategory('engineering')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'engineering'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Software Eng.
            </button>
            <button
              onClick={() => setActiveCategory('data')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'data'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Data & AI
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'design'
                  ? 'bg-white text-[#0e243f] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Digital Design
            </button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => {
            const isHighlighted = selectedProgramSlug === prog.slug;
            return (
              <div
                key={prog.id}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                  isHighlighted 
                    ? 'border-cyan-500 shadow-xl ring-2 ring-cyan-400/20' 
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-cyan-700 uppercase tracking-wider">{prog.level}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Next cohort: {prog.nextCohort}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0e243f] group-hover:text-cyan-700 transition">
                    {prog.name}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed min-h-[60px]">
                    {prog.shortDesc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        Duration
                      </span>
                      <span className="font-semibold text-slate-800">{prog.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        Tuition
                      </span>
                      <span className="font-semibold text-slate-800">{prog.tuition}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Award className="w-4 h-4 text-amber-600" />
                        Avg. Starting Salary
                      </span>
                      <span className="font-semibold text-emerald-700">{prog.avgSalary}</span>
                    </div>
                  </div>

                  {/* Key Skills Tags */}
                  <div className="mt-5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.skills.slice(0, 5).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                      {prog.skills.length > 5 && (
                        <span className="text-xs text-slate-400 self-center">
                          +{prog.skills.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Curriculum</span>
                  </button>
                  <button
                    onClick={() => onApplyForProgram(prog.id)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-lg transition shadow-sm cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Curriculum Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">Syllabus Breakdown</span>
                <h3 className="text-2xl font-bold text-[#0e243f]">{activeModalProgram.name}</h3>
              </div>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-2 rounded-lg hover:bg-slate-100"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalProgram.description}
              </p>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Module-by-Module Progression
                </h4>
                <div className="space-y-4">
                  {activeModalProgram.curriculum.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-[#0e243f]">{item.module}</span>
                        <span className="text-xs font-medium text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                          {item.weeks}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                        {item.topics.map((topic, tidx) => (
                          <li key={tidx} className="text-xs text-slate-600 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-slate-500 block">Graduation Outcomes</span>
                  <span className="text-sm font-bold text-slate-800">
                    Average Starting Salary: <span className="text-emerald-700 font-extrabold">{activeModalProgram.avgSalary}</span>
                  </span>
                </div>
                <button
                  onClick={() => {
                    const progId = activeModalProgram.id;
                    setActiveModalProgram(null);
                    onApplyForProgram(progId);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-lg shadow transition"
                >
                  Apply for this Track
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

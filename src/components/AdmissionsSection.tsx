import React from 'react';
import { Calendar, CheckCircle2, ArrowRight, FileText, UserCheck, Sparkles } from 'lucide-react';

interface AdmissionsSectionProps {
  onOpenApply: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenApply }) => {
  const steps = [
    {
      num: '01',
      title: 'Submit Online Application',
      desc: 'Complete our simple 5-minute application form specifying your target program, learning format, and background interest.',
      icon: <FileText className="w-5 h-5 text-cyan-600" />
    },
    {
      num: '02',
      title: 'Logic & Problem-Solving Check',
      desc: 'Complete a brief self-paced problem-solving evaluation designed to assess logical reasoning and passion, not syntax memorization.',
      icon: <Sparkles className="w-5 h-5 text-cyan-600" />
    },
    {
      num: '03',
      title: 'Admissions & Goals Conversation',
      desc: 'Meet 1-on-1 with an admissions advisor and senior instructor to review your career objectives and confirm the right curriculum fit.',
      icon: <UserCheck className="w-5 h-5 text-cyan-600" />
    },
    {
      num: '04',
      title: 'Enrollment & Prep Work',
      desc: 'Receive your acceptance letter, select financing options or scholarships, and unlock your foundational pre-work curriculum.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Transparent & Supportive Process
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
            Your Path to Enrollment
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We value dedication, curiosity, and analytical grit over prior degrees. Our selective yet accessible admissions framework is designed to help you succeed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between hover:border-cyan-400 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-cyan-600 transition-colors font-display">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Step {idx + 1} of 4</span>
                <span className="text-cyan-600 font-semibold">Active Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Next Cohort Banner */}
        <div className="bg-[#0b1a30] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>Fall 2026 Admissions Now Open</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Application Deadline for October Cohorts: October 5, 2026
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              Classes fill rapidly to maintain our 1:8 student-faculty mentor ratio. Priority merit scholarships awarded on rolling basis.
            </p>
          </div>

          <button
            onClick={onOpenApply}
            className="w-full md:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase bg-white text-[#0b1a30] hover:bg-slate-100 active:scale-95 transition-all shadow-lg whitespace-nowrap cursor-pointer shrink-0"
          >
            Start Your Application
          </button>
        </div>

      </div>
    </section>
  );
};

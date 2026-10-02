import React from 'react';
import { TESTIMONIALS } from '../data/academyData';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

export const AlumniOutcomes: React.FC = () => {
  const hiringPartners = [
    'Google', 'Microsoft', 'Amazon Web Services', 'Stripe', 'Spotify', 'Databricks', 'Linear', 'Shopify'
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Graduate Impact & Proof
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
            Where Our Graduates Build the Future
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read firsthand career transformations from our alumni working across global technology scale-ups and industry leaders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with avatar & info */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#0e243f] text-[#00d2ff] font-bold text-sm flex items-center justify-center font-display">
                    {item.avatar}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">{item.name}</h3>
                    <p className="text-xs font-medium text-cyan-700">{item.role} @ {item.company}</p>
                    <span className="text-[11px] text-slate-400">{item.program} · {item.gradYear}</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Salary outcome badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-slate-500 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  Outcome
                </span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {item.salaryIncrease}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Logos Banner */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-6">
            Trusted By Engineering Teams Nationwide
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
            {hiringPartners.map((partner, index) => (
              <span
                key={index}
                className="text-base sm:text-lg font-bold font-display text-slate-700 hover:text-slate-900 transition-colors tracking-tight"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

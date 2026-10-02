import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/academyData';
import { ChevronDown, ChevronUp, DollarSign, Award, CreditCard, HelpCircle } from 'lucide-react';

export const TuitionFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<'All' | 'Admissions' | 'Tuition' | 'Curriculum' | 'Careers'>('All');

  const filteredFaqs = activeFaqCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(f => f.category === activeFaqCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Financing Plans Banner */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Affordable & Transparent Investment
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
              Tuition & Flexible Financing Options
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We believe financial barriers should never obstruct talent. Choose from multiple payment pathways suited to your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5 text-cyan-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Upfront Tuition Discount</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Pay your tuition in full prior to cohort start and receive an immediate 10% cash discount off the total program fee.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-emerald-700">Save up to $1,520 upfront</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border-2 border-cyan-500 shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-cyan-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wide">
                Most Popular
              </span>
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">0% Interest Installments</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Split your tuition across 12 or 24 predictable monthly installments with zero interest and no prepayment penalties.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800">Starting from $590 / month</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Merit & Diversity Grants</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Generous scholarships available for underrepresented candidates in technology and high-aptitude exam performers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-amber-700">Grants up to $3,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Clear Answers
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0e243f] tracking-tight font-display">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Filter categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {(['All', 'Admissions', 'Tuition', 'Curriculum', 'Careers'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFaqCategory === cat
                    ? 'bg-[#0e243f] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-cyan-600" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

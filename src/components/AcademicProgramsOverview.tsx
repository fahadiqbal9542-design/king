import React from 'react';
import { Terminal, Cpu, Layout, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/academyData';

interface AcademicProgramsOverviewProps {
  onSelectProgram: (slug: string) => void;
  onViewAllPrograms: () => void;
}

export const AcademicProgramsOverview: React.FC<AcademicProgramsOverviewProps> = ({
  onSelectProgram,
  onViewAllPrograms
}) => {
  const academicPrograms = [
    {
      id: 'software-engineering',
      name: 'Software Eng.',
      description: 'Comprehensive full-stack development, modern web architectures, and algorithms.',
      icon: <Terminal className="w-5 h-5 text-white" />
    },
    {
      id: 'data-science',
      name: 'Data Science',
      description: 'Statistical modeling, machine learning, predictive intelligence, and AI systems.',
      icon: <Cpu className="w-5 h-5 text-white" />
    },
    {
      id: 'digital-design',
      name: 'Digital Design',
      description: 'Human-centered user experience, responsive interfaces, and scalable design systems.',
      icon: <Layout className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid matching the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Our Academic Programs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e243f] tracking-tight font-display">
                  Our Academic Programs
                </h2>
                <button
                  onClick={onViewAllPrograms}
                  className="text-xs sm:text-sm font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group cursor-pointer"
                >
                  <span>Explore all</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* 3 Academic Programs with circular icon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                {academicPrograms.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectProgram(item.id)}
                    className="flex flex-col items-start p-3 sm:p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    {/* Navy Circular Icon matching screenshot */}
                    <div className="w-12 h-12 rounded-full bg-[#0e243f] flex items-center justify-center mb-3.5 shadow-md group-hover:scale-105 group-hover:bg-[#00a6fb] transition-all">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <span className="mt-2 text-[11px] font-semibold text-cyan-600 group-hover:underline inline-flex items-center gap-0.5">
                      View details &rarr;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l lg:pl-10 border-slate-200 pt-8 lg:pt-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e243f] tracking-tight font-display mb-8">
              Why Choose Us
            </h2>

            {/* 3 Why Choose Us items matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
                <div key={index} className="flex flex-col items-start p-3 sm:p-2">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

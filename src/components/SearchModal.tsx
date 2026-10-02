import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, User, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_PROGRAMS, FACULTY_MEMBERS, CAMPUS_EVENTS, FAQ_ITEMS } from '../data/academyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (slug: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedPrograms = trimmed
    ? ACADEMY_PROGRAMS.filter(p =>
        p.name.toLowerCase().includes(trimmed) ||
        p.shortDesc.toLowerCase().includes(trimmed) ||
        p.skills.some(s => s.toLowerCase().includes(trimmed))
      )
    : ACADEMY_PROGRAMS;

  const matchedFaculty = trimmed
    ? FACULTY_MEMBERS.filter(f =>
        f.name.toLowerCase().includes(trimmed) ||
        f.specialty.toLowerCase().includes(trimmed) ||
        f.role.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedEvents = trimmed
    ? CAMPUS_EVENTS.filter(e =>
        e.title.toLowerCase().includes(trimmed) ||
        e.type.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedFaqs = trimmed
    ? FAQ_ITEMS.filter(f =>
        f.question.toLowerCase().includes(trimmed) ||
        f.answer.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-slate-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, curriculum topics, faculty, events, or FAQs..."
            className="w-full text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Programs */}
          {matchedPrograms.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Academic Programs & Specializations
              </span>
              <div className="space-y-2">
                {matchedPrograms.map(prog => (
                  <div
                    key={prog.id}
                    onClick={() => {
                      onSelectProgram(prog.slug);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0e243f] text-[#00d2ff] flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition">
                          {prog.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{prog.shortDesc}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Faculty */}
          {matchedFaculty.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Faculty Members
              </span>
              <div className="space-y-2">
                {matchedFaculty.map((faculty, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onNavigate('about');
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 font-bold text-xs">
                        {faculty.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{faculty.name}</h4>
                        <p className="text-[11px] text-slate-500">{faculty.role} · {faculty.specialty}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {matchedEvents.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Events & Workshops
              </span>
              <div className="space-y-2">
                {matchedEvents.map(evt => (
                  <div
                    key={evt.id}
                    onClick={() => {
                      onNavigate('news');
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group transition"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-cyan-600 shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{evt.title}</h4>
                        <p className="text-[11px] text-slate-500">{evt.date} · {evt.location}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-cyan-700">RSVP</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {matchedFaqs.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Help & Answers
              </span>
              <div className="space-y-2">
                {matchedFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <h5 className="text-xs font-bold text-slate-900 mb-1">{faq.question}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {query && matchedPrograms.length === 0 && matchedFaculty.length === 0 && matchedEvents.length === 0 && matchedFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs">
              No matching results found for "{query}". Try searching "Software", "Tuition", "Python", or "Admissions".
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-400">
          Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600">Esc</kbd> to close
        </div>

      </div>
    </div>
  );
};

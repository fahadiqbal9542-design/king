import React, { useState } from 'react';
import { NEWS_ITEMS, CAMPUS_EVENTS } from '../data/academyData';
import { NewsItem, CampusEvent } from '../types';
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2, Ticket } from 'lucide-react';

export const NewsAndEvents: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [rsvpdEvents, setRsvpdEvents] = useState<string[]>([]);
  const [rsvpModalEvent, setRsvpModalEvent] = useState<CampusEvent | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rsvpModalEvent) {
      setRsvpdEvents(prev => [...prev, rsvpModalEvent.id]);
      setRsvpSuccess(true);
      setTimeout(() => {
        setRsvpSuccess(false);
        setRsvpModalEvent(null);
        setRsvpName('');
        setRsvpEmail('');
      }, 2000);
    }
  };

  return (
    <section id="news" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Latest Academy News */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                  Campus Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e243f] tracking-tight font-display">
                  Latest News & Announcements
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {NEWS_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedNews(item)}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-cyan-400 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-cyan-700">{item.category}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="mt-3 text-xs font-semibold text-cyan-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read full announcement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Upcoming Campus Events */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Community Calendar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e243f] tracking-tight font-display mb-8">
              Upcoming Events
            </h2>

            <div className="space-y-4">
              {CAMPUS_EVENTS.map((event) => {
                const isRsvpd = rsvpdEvents.includes(event.id);
                return (
                  <div
                    key={event.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-[#0e243f] text-white">
                          {event.type}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {event.spotsAvailable} seats left
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900">
                        {event.title}
                      </h4>

                      <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      {isRsvpd ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          RSVP Confirmed
                        </span>
                      ) : (
                        <button
                          onClick={() => setRsvpModalEvent(event)}
                          className="w-full py-2 px-3 text-xs font-bold text-[#0e243f] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Ticket className="w-3.5 h-3.5 text-cyan-600" />
                          <span>RSVP Free Seat</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* News Article Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-semibold text-cyan-700 uppercase">{selectedNews.category}</span>
              <button
                onClick={() => setSelectedNews(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-xl font-bold text-[#0e243f] leading-snug">{selectedNews.title}</h3>
            
            <div className="flex items-center gap-2 text-xs text-slate-500 my-3">
              <span>By {selectedNews.author}</span>
              <span>·</span>
              <span>{selectedNews.date}</span>
            </div>

            <div className="text-sm text-slate-700 space-y-3 leading-relaxed mt-4">
              <p>{selectedNews.summary}</p>
              <p>
                Our administration continues to expand the frontier of accessible, technical education. Students and prospective candidates are invited to attend informational webinars and open workshops to learn more about the ongoing capital developments and academic expansion.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RSVP Modal */}
      {rsvpModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#0e243f]">Reserve Your Event Seat</h3>
              <button
                onClick={() => setRsvpModalEvent(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {rsvpSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-slate-900">Seat Reserved Successfully!</h4>
                <p className="text-xs text-slate-600">A calendar invite and event pass have been dispatched to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-slate-800 block">{rsvpModalEvent.title}</span>
                  <span className="text-slate-500">{rsvpModalEvent.date} · {rsvpModalEvent.time}</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setRsvpModalEvent(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-lg shadow-sm"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

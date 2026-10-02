import React, { useState } from 'react';
import ceoPortraitImg from '../assets/images/ceo_founder_portrait_1790338110782.jpg';
import { 
  Send, 
  CheckCircle2, 
  Award, 
  Calendar, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  Clock, 
  MapPin, 
  Linkedin, 
  ExternalLink 
} from 'lucide-react';

export const CeoLeadershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationType: '1-on-1 Founder Mentorship Session',
    background: 'Career Switcher / Self-Taught',
    linkedinUrl: '',
    message: '',
    preferredFormat: 'Virtual Google Meet (Live Video)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    date: string;
    name: string;
    type: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randId = `CEO-ADV-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedData({
        id: randId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        name: formData.fullName,
        type: formData.consultationType
      });
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      consultationType: '1-on-1 Founder Mentorship Session',
      background: 'Career Switcher / Self-Taught',
      linkedinUrl: '',
      message: '',
      preferredFormat: 'Virtual Google Meet (Live Video)'
    });
    setSubmittedData(null);
  };

  return (
    <section id="ceo-leadership" className="py-20 bg-slate-900 text-white scroll-mt-20 border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Leadership & Direct Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Connect Directly with Our Founder & CEO
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            At Web Developer Academy, leadership is never distant. Request a direct 1-on-1 career consultation, propose an enterprise partnership, or apply for the prestigious Founder's Merit Scholarship.
          </p>
        </div>

        {/* Main Split Grid: CEO Profile & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: CEO Profile Showcase with Portrait Image */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-800/80 rounded-3xl border border-slate-700/80 p-7 sm:p-8 shadow-2xl relative">
            <div>
              {/* Image & Verified Badge Card */}
              <div className="relative rounded-2xl overflow-hidden mb-6 border-2 border-slate-700 shadow-xl group">
                <img
                  src={ceoPortraitImg}
                  alt="Alexander Harrison - Founder and CEO of Web Developer Academy"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Live Status Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#0b1a30]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/40 flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Accepting Fall 2026 Inquiries</span>
                </div>

                <div className="absolute top-3 right-3 bg-cyan-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-700/60 text-[11px] font-bold text-cyan-300 flex items-center gap-1 shadow">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Founder</span>
                </div>
              </div>

              {/* CEO Identity & Credentials */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-white font-display">
                    Alexander Harrison
                  </h3>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                    ex-Google Staff Architect
                  </span>
                </div>
                
                <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Founder & Chief Executive Officer
                </p>

                {/* Personal quote */}
                <blockquote className="mt-4 text-xs sm:text-sm text-slate-300 italic border-l-2 border-cyan-500 pl-4 py-1 leading-relaxed">
                  "Every generational engineer began with deep curiosity. My personal pledge to every student entering Web Developer Academy is unrestricted access to elite mentorship, uncompromising production standards, and direct career acceleration."
                </blockquote>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-6 pt-6 border-t border-slate-700/70 grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                <span className="block font-black text-base sm:text-lg text-[#00d2ff] font-display">3,800+</span>
                <span className="text-[10px] text-slate-400 font-medium">Graduates Mentored</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                <span className="block font-black text-base sm:text-lg text-emerald-400 font-display">14+ Yrs</span>
                <span className="text-[10px] text-slate-400 font-medium">Silicon Valley Tech</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                <span className="block font-black text-base sm:text-lg text-amber-400 font-display">&lt;24 Hrs</span>
                <span className="text-[10px] text-slate-400 font-medium">Response Time</span>
              </div>
            </div>

            <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Direct Executive Office Desk</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>San Francisco, CA</span>
              </span>
            </div>
          </div>

          {/* Right Column: Direct Form with CEO Photo & Scheduling */}
          <div className="lg:col-span-7 bg-white text-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl flex flex-col justify-between border border-slate-200">
            {submittedData ? (
              /* Success View */
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Executive Request Confirmed</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0e243f] font-display">
                    Thank You, {submittedData.name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your request for a <span className="font-bold text-slate-900">{submittedData.type}</span> has been transmitted directly to Alexander Harrison's executive desk.
                  </p>
                </div>

                {/* Ticket Details */}
                <div className="max-w-md mx-auto bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-500">Executive Case ID:</span>
                    <span className="font-mono font-bold text-cyan-800">{submittedData.id}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-500">Submission Date:</span>
                    <span className="font-bold text-slate-800">{submittedData.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-500">Expected Follow-up:</span>
                    <span className="font-bold text-emerald-700">Within 24 business hours</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] transition shadow cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-4 mb-2 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0e243f] font-display">
                      Direct Executive Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Messages submitted here are reviewed directly by the CEO and Executive Admissions Board.
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Purpose of Consultation *
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                    >
                      <option value="1-on-1 Founder Mentorship Session">1-on-1 Founder Mentorship Session</option>
                      <option value="Founder's Merit Scholarship Application">Founder's Merit Scholarship Application ($3,500)</option>
                      <option value="Career Transition & Roadmap Advisory">Career Transition & Roadmap Advisory</option>
                      <option value="Executive Admissions Portfolio Review">Executive Admissions Portfolio Review</option>
                      <option value="Enterprise Hiring & Corporate Training">Enterprise Hiring & Corporate Training</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Background / Profession
                    </label>
                    <select
                      value={formData.background}
                      onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                    >
                      <option value="Career Switcher / Self-Taught">Career Switcher / Self-Taught</option>
                      <option value="University Graduate / Student">University Graduate / Student</option>
                      <option value="Working Tech Professional (Upskilling)">Working Tech Professional (Upskilling)</option>
                      <option value="Non-Tech Professional / Founder">Non-Tech Professional / Founder</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      LinkedIn / GitHub URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Meeting Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition ${
                      formData.preferredFormat === 'Virtual Google Meet (Live Video)' 
                        ? 'border-cyan-500 bg-cyan-50/50 text-[#0e243f] font-semibold' 
                        : 'border-slate-200 text-slate-600'
                    }`}>
                      <input
                        type="radio"
                        name="preferredFormat"
                        value="Virtual Google Meet (Live Video)"
                        checked={formData.preferredFormat === 'Virtual Google Meet (Live Video)'}
                        onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                        className="text-cyan-600"
                      />
                      <span>Virtual Google Meet (Worldwide)</span>
                    </label>

                    <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition ${
                      formData.preferredFormat === 'On-Campus Executive Suite (SF Campus)' 
                        ? 'border-cyan-500 bg-cyan-50/50 text-[#0e243f] font-semibold' 
                        : 'border-slate-200 text-slate-600'
                    }`}>
                      <input
                        type="radio"
                        name="preferredFormat"
                        value="On-Campus Executive Suite (SF Campus)"
                        checked={formData.preferredFormat === 'On-Campus Executive Suite (SF Campus)'}
                        onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                        className="text-cyan-600"
                      />
                      <span>On-Campus Executive Suite</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Question or Message for Alexander Harrison *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your current stage, what goals you want to achieve at Web Developer Academy, or specific topics you want to discuss with the CEO..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0e243f] hover:bg-[#153459] active:scale-[0.99] transition shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>{isSubmitting ? 'Transmitting to CEO Office...' : 'Submit Direct Message to CEO'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

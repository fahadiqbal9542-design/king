import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programInterest: 'Software Engineering',
    inquiryType: 'Admissions Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep confirmed state active for user feedback
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      programInterest: 'Software Engineering',
      inquiryType: 'Admissions Inquiry',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
            Admissions & Campus Liaison
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0e243f] tracking-tight font-display">
            Connect With Our Admissions Team
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions regarding upcoming cohorts, prerequisite preparation, or financing? Our academic advisors are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Campus Info & Visiting Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b1a30] text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold font-display mb-6">
                Web Developer Academy Campus
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Main Campus Center</span>
                    <span>100 Technology Plaza, Innovation District</span>
                    <span className="block text-slate-400">Silicon Gateway, CA 94105</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Admissions Hotline</span>
                    <span>+1 (800) 555-DEV-ACAD</span>
                    <span className="block text-slate-400">Direct: +1 (415) 890-4200</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Admissions Office</span>
                    <span>admissions@webdeveloperacademy.edu</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Advisory & Visiting Hours</span>
                    <span>Monday – Friday: 8:00 AM – 7:00 PM PST</span>
                    <span className="block text-slate-400">Saturday: 9:00 AM – 2:00 PM PST</span>
                  </div>
                </div>
              </div>

              {/* Transit & Parking Note */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 text-xs text-slate-300">
                <p>
                  Conveniently situated 2 blocks from Grand Central Transit. Designated campus visitor parking garage available on 4th Street.
                </p>
              </div>
            </div>

            {/* Quick Virtual Tour Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Virtual 1-on-1 Walkthrough</h4>
                <p className="text-xs text-slate-600 mt-0.5">Meet with an advisor over Google Meet</p>
              </div>
              <a
                href="#contact"
                onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'Virtual Campus Tour Request' }))}
                className="px-3.5 py-2 text-xs font-bold text-cyan-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs"
              >
                Schedule Call
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0e243f]">Message Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. An admissions counselor has received your inquiry for the <span className="font-bold text-cyan-700">{formData.programInterest}</span> track and will follow up within 1 business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-lg transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Program of Interest
                    </label>
                    <select
                      value={formData.programInterest}
                      onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white transition"
                    >
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Data Science & AI">Data Science & AI Engineering</option>
                      <option value="Digital Design & UI/UX">Digital Design & UI/UX</option>
                      <option value="General Exploration">Not Sure Yet / General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white transition"
                  >
                    <option value="Admissions Inquiry">Admissions & Prerequisite Inquiry</option>
                    <option value="Scholarship & Financing">Tuition, Grants & Payment Plans</option>
                    <option value="Virtual Campus Tour Request">Schedule 1-on-1 Virtual Campus Tour</option>
                    <option value="Corporate Partnership">Employer Partnership / Hiring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    How can we help you? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your educational background, goals, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#0e243f] hover:bg-[#153459] active:scale-[0.99] transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

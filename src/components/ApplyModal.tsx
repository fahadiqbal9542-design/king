import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, GraduationCap } from 'lucide-react';
import { ACADEMY_PROGRAMS } from '../data/academyData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgramId?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  preselectedProgramId
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationId, setApplicationId] = useState('');
  const [formData, setFormData] = useState({
    programId: preselectedProgramId || 'prog-swe',
    format: 'On-Campus Immersive',
    cohortDate: 'October 12, 2026',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    highestEducation: "Bachelor's Degree",
    experienceLevel: 'Beginner / Self-Taught',
    goalsStatement: '',
    financingPreference: 'Monthly Installments'
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.programId) return;
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.firstName || !formData.email) return;
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Generate application ID
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setApplicationId(`WDA-2026-${randNum}`);
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1 && currentStep < 4) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleResetAndClose = () => {
    setCurrentStep(1);
    onClose();
  };

  const selectedProgram = ACADEMY_PROGRAMS.find(p => p.id === formData.programId) || ACADEMY_PROGRAMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#0b1a30] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display leading-tight">
                Admission Application
              </h3>
              <p className="text-xs text-slate-300">
                {currentStep < 4 ? `Step ${currentStep} of 3: ${
                  currentStep === 1 ? 'Program Selection' : currentStep === 2 ? 'Personal Details' : 'Background & Goals'
                }` : 'Application Confirmed'}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {currentStep < 4 && (
          <div className="w-full bg-slate-100 h-1.5 flex">
            <div
              className="bg-[#00d2ff] h-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Select Your Academic Track
                </label>
                <div className="space-y-2.5">
                  {ACADEMY_PROGRAMS.map(prog => (
                    <div
                      key={prog.id}
                      onClick={() => setFormData({ ...formData, programId: prog.id })}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.programId === prog.id
                          ? 'border-cyan-500 bg-cyan-50/40 ring-1 ring-cyan-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#0e243f]">{prog.name}</span>
                        <span className="text-xs font-semibold text-emerald-700">{prog.tuition}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1">{prog.shortDesc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Attendance Mode
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  >
                    <option value="On-Campus Immersive">On-Campus Immersive (Silicon Gateway)</option>
                    <option value="Remote Live Interactive">Remote Synchronous Live</option>
                    <option value="Part-Time Evening Flex">Part-Time Evening & Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Desired Cohort Start
                  </label>
                  <select
                    value={formData.cohortDate}
                    onChange={(e) => setFormData({ ...formData, cohortDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  >
                    <option value="October 12, 2026">October 12, 2026 (Priority)</option>
                    <option value="November 16, 2026">November 16, 2026</option>
                    <option value="January 11, 2027">January 11, 2027 (Spring)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Financing Plan</label>
                <select
                  value={formData.financingPreference}
                  onChange={(e) => setFormData({ ...formData, financingPreference: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  <option value="Upfront Discount (10% Off)">Upfront Discount (10% Off)</option>
                  <option value="Monthly Installments (0% Interest)">Monthly Installments (0% Interest)</option>
                  <option value="Merit / Diversity Scholarship Applicant">Applying for Merit/Diversity Scholarship</option>
                  <option value="Deferred Tuition / Educational Loan">Deferred Tuition / Educational Loan</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Prior Technical Experience</label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  <option value="Complete Beginner">Complete Beginner (No prior coding)</option>
                  <option value="Beginner / Self-Taught">Beginner / Self-Taught (HTML/CSS, introductory tutorials)</option>
                  <option value="Intermediate">Intermediate (Built basic web apps, know some JS/Python)</option>
                  <option value="Working Tech Professional">Working Tech Professional (Looking to upskill/pivot)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Why do you want to join Web Developer Academy? *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a short summary of your career ambition, what inspires you about this discipline, and what you hope to build..."
                  value={formData.goalsStatement}
                  onChange={(e) => setFormData({ ...formData, goalsStatement: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-900 block mb-0.5">Rolling Admissions Notice</span>
                Submissions are reviewed within 48 hours. Eligible applicants are scheduled directly for the problem-solving and goals interview.
              </div>
            </div>
          )}

          {/* STEP 4: Success confirmation */}
          {currentStep === 4 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Application Received</span>
                <h3 className="text-2xl font-bold text-[#0e243f] mt-1 font-display">
                  Welcome, {formData.firstName}!
                </h3>
                <p className="text-xs text-slate-600 mt-2">
                  Your candidate application for <span className="font-bold text-slate-900">{selectedProgram.name}</span> has been logged under record:
                </p>
                <div className="mt-3 inline-block px-4 py-2 bg-slate-100 rounded-lg font-mono font-bold text-sm text-[#0e243f] border border-slate-300">
                  {applicationId}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-2">
                <span className="font-bold text-slate-900 block">Next Steps on Your Admissions Timeline:</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600" />
                  <span>Confirmation email sent to {formData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600" />
                  <span>Admissions counselor assigned for 1-on-1 interview scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600" />
                  <span>Prep portal access instructions dispatched within 24 hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-xl shadow-md transition"
                >
                  Return to Academy Portal
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {currentStep < 4 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] rounded-xl shadow-sm transition cursor-pointer"
            >
              <span>{currentStep === 3 ? 'Submit Application' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

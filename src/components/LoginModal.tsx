import React, { useState } from 'react';
import { X, User, Lock, CheckCircle2, BookOpen, GraduationCap, Shield } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; role: 'student' | 'faculty'; program?: string }) => void;
  currentUser?: { name: string; email: string; role: 'student' | 'faculty'; program?: string } | null;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  currentUser,
  onLogout
}) => {
  const [role, setRole] = useState<'student' | 'faculty'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const name = email.split('@')[0].replace('.', ' ');
    onLoginSuccess({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email,
      role,
      program: role === 'student' ? 'Software Engineering Cohort 2026' : undefined
    });
    onClose();
  };

  const handleQuickDemoStudent = () => {
    onLoginSuccess({
      name: 'Jane Doe',
      email: 'jane.doe@students.webdev.edu',
      role: 'student',
      program: 'Full-Stack Software Engineering (Fall 2026)'
    });
    onClose();
  };

  const handleQuickDemoFaculty = () => {
    onLoginSuccess({
      name: 'Dr. Sarah Al-Mansoor',
      email: 's.almansoor@webdeveloperacademy.edu',
      role: 'faculty',
      program: 'Dean of Software Engineering'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0b1a30] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#00d2ff]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display">Academy Portal</h3>
              <p className="text-xs text-slate-300">Access curriculum, grades & student resources</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentUser ? (
            /* Logged in state dashboard view */
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <div className="w-14 h-14 rounded-full bg-[#0b1a30] text-[#00d2ff] font-bold text-lg flex items-center justify-center mx-auto mb-3 font-display">
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-base font-bold text-slate-900">{currentUser.name}</h4>
                <p className="text-xs text-slate-500">{currentUser.email}</p>
                
                <div className="mt-3 inline-block px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-semibold text-cyan-800">
                  {currentUser.role === 'student' ? '🎓 Active Enrolled Student' : '👨‍🏫 Faculty Member'}
                </div>
              </div>

              {currentUser.program && (
                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-0.5">Assigned Track:</span>
                  <span>{currentUser.program}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] shadow-sm transition"
                >
                  Continue to Learning Hub
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            /* Login Form */
            <div>
              {/* Role Toggle */}
              <div className="flex p-1 bg-slate-100 rounded-xl mb-5">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                    role === 'student' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Student Portal
                </button>
                <button
                  type="button"
                  onClick={() => setRole('faculty')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                    role === 'faculty' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Faculty & Staff
                </button>
              </div>

              {/* Quick Demo Login Shortcut */}
              <div className="mb-5 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Instant Test Sign-In
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleQuickDemoStudent}
                    className="flex-1 py-1.5 px-2 text-[11px] font-bold text-cyan-800 bg-cyan-100/70 hover:bg-cyan-200/70 rounded-lg transition"
                  >
                    Demo Student
                  </button>
                  <button
                    type="button"
                    onClick={handleQuickDemoFaculty}
                    className="flex-1 py-1.5 px-2 text-[11px] font-bold text-slate-800 bg-slate-200 hover:bg-slate-300 rounded-lg transition"
                  >
                    Demo Faculty
                  </button>
                </div>
              </div>

              <form onSubmit={handleManualLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Academic ID / Email
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder={role === 'student' ? 'student.id@webdev.edu' : 'faculty@webdeveloperacademy.edu'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">Password</label>
                    <span className="text-[11px] text-cyan-700 hover:underline cursor-pointer">Forgot password?</span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#0e243f] hover:bg-[#153459] transition shadow-sm"
                >
                  Log In to {role === 'student' ? 'Student Portal' : 'Faculty Console'}
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

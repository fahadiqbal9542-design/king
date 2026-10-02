import React, { useState } from 'react';
import { Search, User, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenApply: () => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  userLoggedIn?: { name: string; email: string } | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  onOpenSearch,
  onOpenLogin,
  activeSection,
  onNavigate,
  userLoggedIn,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'skills', label: 'Skills' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'campus-life', label: 'Campus Life' },
    { id: 'news', label: 'News' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1a30] text-white shadow-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Zone matching screenshot */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            {/* Custom stylized WA logo icon */}
            <div className="relative flex items-center justify-center w-11 h-11 bg-slate-900/60 rounded-lg p-1 border border-slate-700/60 shadow-inner group-hover:border-cyan-500/50 transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylized W in cyan/teal */}
                <path d="M12 28L30 76L46 36L62 76L80 28" stroke="#00d2ff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                {/* Diagonal vibrant orange A accent */}
                <path d="M54 78L78 24" stroke="#f97316" strokeWidth="11" strokeLinecap="round" />
                <path d="M42 54H86" stroke="#fb923c" strokeWidth="9" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white uppercase font-display leading-tight">
                WEB DEVELOPER
              </span>
              <span className="text-xs tracking-widest text-slate-300 font-medium uppercase font-display -mt-0.5">
                ACADEMY
              </span>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors py-2 relative text-sm ${
                    isActive
                      ? 'text-[#00d2ff] font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00d2ff] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="hidden md:flex items-center space-x-5">
            {/* APPLY NOW Button */}
            <button
              onClick={onOpenApply}
              className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase bg-white text-[#0b1a30] hover:bg-slate-100 active:scale-95 transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              APPLY NOW
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search academy content"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors cursor-pointer"
              title="Search programs, events, faculty"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Login / Profile */}
            {userLoggedIn ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenLogin}
                  className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 transition cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="max-w-[100px] truncate">{userLoggedIn.name}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="text-xs text-slate-400 hover:text-rose-400 underline transition cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white py-1.5 px-2 rounded-md hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                <User className="w-4 h-4 text-slate-300" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0b1a30]/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-md text-base font-medium transition ${
                  activeSection === link.id
                    ? 'bg-slate-800/80 text-[#00d2ff] font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 rounded-full text-center text-sm font-bold tracking-wide uppercase bg-white text-[#0b1a30] hover:bg-slate-100 shadow transition"
            >
              APPLY NOW
            </button>

            {userLoggedIn ? (
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 text-xs">
                <span className="text-slate-200 font-medium">Logged in as {userLoggedIn.name}</span>
                <button onClick={onLogout} className="text-rose-400 hover:underline">Log out</button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/60 hover:bg-slate-800 transition"
              >
                <User className="w-4 h-4" />
                <span>Student / Faculty Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AcademicProgramsOverview } from './components/AcademicProgramsOverview';
import { ProgramsCatalog } from './components/ProgramsCatalog';
import { AboutSection } from './components/AboutSection';
import { CampusLifeSection } from './components/CampusLifeSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { AlumniOutcomes } from './components/AlumniOutcomes';
import { NewsAndEvents } from './components/NewsAndEvents';
import { TuitionFaqSection } from './components/TuitionFaqSection';
import { ContactSection } from './components/ContactSection';
import { SkillsSection } from './components/SkillsSection';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedProgramSlug, setSelectedProgramSlug] = useState<string | null>(null);
  const [applyProgramId, setApplyProgramId] = useState<string | undefined>(undefined);
  const [loggedInUser, setLoggedInUser] = useState<{
    name: string;
    email: string;
    role: 'student' | 'faculty';
    program?: string;
  } | null>(null);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgramOverview = (slug: string) => {
    setSelectedProgramSlug(slug);
    scrollToSection('programs');
  };

  const handleApplyForProgram = (programId: string) => {
    setApplyProgramId(programId);
    setIsApplyOpen(true);
  };

  const handleOpenGeneralApply = () => {
    setApplyProgramId(undefined);
    setIsApplyOpen(true);
  };

  // Scroll spy for active navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'programs', 'skills', 'about', 'admissions', 'campus-life', 'news', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        if (id === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* 1. Header / Navbar matching user's screenshot */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenApply={handleOpenGeneralApply}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        userLoggedIn={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />

      <main className="flex-1">
        {/* 2. Hero Section matching user's screenshot */}
        <div id="home">
          <Hero
            onDiscoverMore={() => scrollToSection('programs')}
            onContactUs={() => scrollToSection('contact')}
          />
        </div>

        {/* 3. Immediate Sub-Hero Overview Section matching user's screenshot */}
        <AcademicProgramsOverview
          onSelectProgram={handleSelectProgramOverview}
          onViewAllPrograms={() => scrollToSection('programs')}
        />

        {/* 4. Comprehensive Programs Catalog */}
        <ProgramsCatalog
          onApplyForProgram={handleApplyForProgram}
          selectedProgramSlug={selectedProgramSlug}
        />

        {/* 5. Comprehensive Technical Skills & Tech Stack Section */}
        <SkillsSection onApply={handleOpenGeneralApply} />

        {/* 6. About the Academy & Faculty */}
        <AboutSection />

        {/* 7. Campus Life & Facilities Tour */}
        <CampusLifeSection />

        {/* 8. Admissions & Application Flow */}
        <AdmissionsSection onOpenApply={handleOpenGeneralApply} />

        {/* 9. Alumni Proof & Career Outcomes */}
        <AlumniOutcomes />

        {/* 10. News & Campus Events Calendar */}
        <NewsAndEvents />

        {/* 11. Tuition Financing & FAQ */}
        <TuitionFaqSection />

        {/* 12. Contact & Campus Liaison */}
        <ContactSection />
      </main>

      {/* 13. Institutional Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenApply={handleOpenGeneralApply}
      />

      {/* Floating Automatic Scroll-To-Top Button with Progress Ring */}
      <ScrollToTop />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        preselectedProgramId={applyProgramId}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProgram={handleSelectProgramOverview}
        onNavigate={scrollToSection}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(user) => setLoggedInUser(user)}
        currentUser={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />
    </div>
  );
}

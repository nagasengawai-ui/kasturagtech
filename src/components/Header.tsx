import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home' as PageId, label: 'Home' },
    { id: 'services' as PageId, label: 'Services' },
    { id: 'industries' as PageId, label: 'Industries' },
    { id: 'portfolio' as PageId, label: 'Portfolio' },
    { id: 'company' as PageId, label: 'Company' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-xl transition-all">
      {/* Top Banner with integrated contact info */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-6 text-xs flex justify-between items-center sm:px-12">
        <div className="flex items-center gap-2">
          <PhoneCall size={12} className="text-blue-400" />
          <span className="font-medium">Direct Line:</span>
          <a href="tel:+919699214019" className="text-white hover:text-blue-400 transition-colors">
            +91 96992 14019
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>Enterprise Grade SLA Guaranteed</span>
          <span className="text-slate-500">|</span>
          <span>Status: <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1"></span>Operational</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 flex h-20 items-center justify-between">
        {/* Logo and Specific Space for Logo */}
        <div 
          onClick={() => handleLinkClick('home')} 
          className="flex items-center cursor-pointer group"
          id="logo-container"
        >
          <Logo height={46} className="group-hover:scale-[1.02] transition-all duration-300" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('contact')}
            className="flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            id="consultation-btn-desktop"
          >
            Get Free Consultation
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 md:hidden active:scale-95 transition-all"
          id="mobile-menu-trigger"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl px-6 py-8 animate-fade-in z-40">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base font-semibold py-2.5 border-b border-slate-50 ${
                    isActive ? 'text-blue-600 pl-2 border-l-2 border-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            
            <div className="pt-4 flex flex-col gap-4">
              <div className="rounded-lg bg-slate-50 p-4 border border-slate-100">
                <span className="text-xs text-slate-500 uppercase font-semibold">Contact Integration</span>
                <p className="text-sm font-semibold text-slate-800 mt-1">📞 +91 96992 14019</p>
                <p className="text-xs text-slate-500">kasturagtech@gmail.com</p>
              </div>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full text-center rounded-lg bg-slate-950 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-all shadow-md"
                id="consultation-btn-mobile"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

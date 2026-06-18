import React from 'react';
import { PageId } from '../types';
import { Mail, Phone, MapPin, Activity, ShieldCheck, Globe } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleLinkClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 px-6 sm:px-12 w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div 
              onClick={() => handleLinkClick('home')} 
              className="flex items-center cursor-pointer mb-6"
            >
              <Logo height={42} variant="footer" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm mb-6">
              Precision engineering for the modern enterprise. We architect and implement highly available systems that scale perfectly under high-volume limits.
            </p>
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-500" />
                <a href="tel:+919699214019" className="text-slate-300 hover:text-white transition-colors">
                  +91 96992 14019
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-500" />
                <a href="mailto:kasturagtech@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  kasturagtech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-500" />
                <span>IT Park, Nashik, Maharashtra 422013, India</span>
              </div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cloud Architecting
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  DevOps Pipeline Setup
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Custom Platform Building
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Kasturag Tech
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left font-sans">
                  Technology Stack
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact Technical Experts
                </button>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5">Resources</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  System Architecture Documentation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  GDPR compliance statement
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  SLA response commitment
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Term of systems service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>© 2026 Kasturag Tech. All rights reserved. Precision in Enterprise Engineering.</p>
          <div className="flex flex-wrap gap-6 items-center">
            <span className="flex items-center gap-1.5">
              <Activity size={12} className="text-emerald-500" />
              SLA Status: <span className="text-slate-300 font-semibold">99.99% Operational</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-blue-500" />
              Certifications: <span className="text-slate-300 font-semibold">ISO 27001 Security / SOC2 Type II</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe size={12} className="text-slate-400" />
              National Presence: <span className="text-slate-300 font-semibold">Nashik / Mumbai / Bangalore</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

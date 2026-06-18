import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Stats from './components/Stats';
import BentoServices from './components/BentoServices';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import GlobalPresence from './components/GlobalPresence';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { ArrowRight, Sparkles, ServerCrash, ShieldAlert } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Multi-Section scroll effect fallback
  useEffect(() => {
    if (currentPage === 'services') {
      const el = document.getElementById('services-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage === 'portfolio') {
      const el = document.getElementById('projects-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage === 'industries') {
      const el = document.getElementById('stack-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentPage === 'company') {
      const el = document.getElementById('timeline-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="relative min-h-screen bg-[#fcf8fa] flex flex-col justify-between overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Dynamic Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-1">
        {currentPage === 'contact' ? (
          <div className="animate-fade-in">
            {/* Contact specific layouts */}
            <ContactForm />
            <GlobalPresence />
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Primary Landing Page flow */}
            <Hero setCurrentPage={setCurrentPage} />
            
            <ClientLogos />
            
            <Stats />

            <div id="services-section">
              <BentoServices />
            </div>

            {/* Industrial solutions vertical focus section */}
            <section className="py-24 bg-white border-y border-slate-100" id="industries-section">
              <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                      Strategic Sectors
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
                      Tailored Solutions Across Industries
                    </h2>
                    <p className="text-slate-650 text-base sm:text-lg leading-relaxed mb-8">
                      We optimize computational workflows for compliance-heavy, high-security systems. Your technical infrastructure is secure in our care.
                    </p>

                    <div className="space-y-6">
                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                        <span className="h-4.5 w-4.5 rounded-full bg-blue-500 mt-1 shrink-0 animate-pulse" />
                        <div>
                          <h4 className="font-display text-base font-bold text-slate-900 mb-1">Fintech & Payments Hubs</h4>
                          <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">Secured token transmission pipelines conforming strictly to PCI-DSS Level 1 specifications.</p>
                        </div>
                      </div>

                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                        <span className="h-4.5 w-4.5 rounded-full bg-indigo-500 mt-1 shrink-0 animate-pulse" />
                        <div>
                          <h4 className="font-display text-base font-bold text-slate-900 mb-1">E-Commerce & Logistical Grids</h4>
                          <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">Automated cluster scaling handling 100K+ simultaneous transactional operations with custom caching gates.</p>
                        </div>
                      </div>

                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                        <span className="h-4.5 w-4.5 rounded-full bg-cyan-500 mt-1 shrink-0 animate-pulse" />
                        <div>
                          <h2 className="font-display text-base font-bold text-slate-900 mb-1">Medical Informatics Systems</h2>
                          <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">Data classification models designed specifically for secure health cloud compliance metrics.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-950">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1JSf_25Fu9fVW_xdVpzT-W3trduXqcdWYCO9pZ8iHgJqIRGNpew-qAF9xBpR4YdwMgBU4Ing4UMecr7WcvVQLLIstmgTM5Gr9f5vNSIDpuideES5YlpwCyul3vY9Bf13qiKXcjLTHWy6K_guylTmY_vYjTOgzAelyFw0NyOSPVFV44oB2bfjSLSPl6ez-wqE6d_jOSuqfXrzOED5oWzpNQg26dHyBNURqyh-6bFGk5KSzh64YbMx3_K4RAqeEYhnZ8_26U63yP77" 
                        alt="High definition tech laptop visualization" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                        <div className="flex gap-2 mb-1.5 items-center">
                          <ShieldAlert size={16} className="text-blue-400" />
                          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Absolute Security Baseline</span>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          All architectures created by Kasturag Tech are built upon zero-trust data access architectures and encrypted local communication layers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div id="projects-section">
              <CaseStudies />
            </div>

            <div id="stack-section">
              <TechStack />
            </div>

            <div id="timeline-section">
              <ProcessTimeline />
            </div>

            <Testimonials />

            {/* Premium CTA banner */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden px-6 sm:px-12">
              <div className="absolute inset-0 bg-size-20 w-full h-full bg-slate-950 opacity-40" />
              <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/10 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-white/5">
                  <Sparkles size={12} className="animate-spin" />
                  Elevate Your Business
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-2xl leading-tight">
                  Ready to Lead the Market?
                </h2>
                <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 px-4">
                  Contact us today for a comprehensive technical roadmap analysis and begin your business's journey toward total engineering reliability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
                  <button
                    onClick={() => {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    Schedule a Strategy Session
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 px-8 py-4 rounded-xl transition-all active:scale-95 cursor-pointer"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Floating technical helper chat tool */}
      <ChatWidget />

      {/* Corporate responsive Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

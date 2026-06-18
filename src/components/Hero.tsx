import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { ArrowRight, Terminal } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

interface HeroProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 py-20 px-6 sm:px-12">
      {/* GL Shader Background */}
      <ShaderBackground />

      {/* Hero content wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl text-center flex flex-col items-center">
        {/* Animated Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-medium text-xs sm:text-sm mb-8 hover:bg-blue-500/15 transition-all"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          New Release: Enterprise AI Integration 2.0
        </motion.div>

        {/* Hero title with gradient stroke */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white max-w-[1000px] leading-tight tracking-tight mb-6"
        >
          Transforming Businesses Through <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">Modern Technology</span>
        </motion.h1>

        {/* Hero description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-xl text-slate-400 max-w-[750px] leading-relaxed mb-10 px-4"
        >
          Build, scale, and automate with Kasturag Tech's premium enterprise solutions. From ultra-reliable cloud infrastructure to deep-learning LLM digital workflow transformations.
        </motion.p>

        {/* CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
        >
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group/btn bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] active:scale-95 cursor-pointer"
          >
            Get Free Consultation
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <a
            href="#projects-section"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-200 active:scale-95"
          >
            <Terminal size={18} className="text-blue-400" />
            View Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
}

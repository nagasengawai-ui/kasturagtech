import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah',
    quote: "Kasturag Tech completely redefined our data architecture. Their robust custom AI model integration shaved weeks off our processing time and improved accuracy. Absolute professionals.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Nexus Corp",
    avatarColor: "bg-blue-600 text-white"
  },
  {
    id: 'marcus',
    quote: "Professional, precise, and highly competent. Their automated DevOps pipeline construction was the missing link required to scale our secure multi-tenant SaaS grid. Highly recommended.",
    author: "Marcus Thorne",
    role: "VP Engineering",
    company: "Aeris Systems",
    avatarColor: "bg-indigo-600 text-white"
  },
  {
    id: 'elena',
    quote: "Finding a technical partner that understands both abstract business logic and deep database schemas is rare. Kasturag Tech is that partner. Their engineering is top-tier.",
    author: "Elena Rodriguez",
    role: "Product Director",
    company: "FinHub",
    avatarColor: "bg-violet-600 text-white"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fcf8fa]" id="testimonials-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
            Partner Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            What Tech Leaders Say
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Trusted by chief technology executives inside fast-growing digital corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(15,23,42,0.03)] transition-all duration-300 relative group"
            >
              <Quote className="absolute right-8 bottom-8 text-slate-100 h-16 w-16 group-hover:scale-105 transition-transform duration-300 pointer-events-none -z-0" />
              <div className="relative z-10">
                <p className="text-slate-650 text-sm leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10 border-t border-slate-50 pt-4">
                <div className={`h-10 w-10 rounded-full font-display font-semibold flex items-center justify-center text-xs shrink-0 ${t.avatarColor}`}>
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900 leading-none mb-1">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}, <span className="font-semibold text-slate-600">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

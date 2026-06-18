import React, { useState } from 'react';
import { ProcessStep } from '../types';
import { motion } from 'motion/react';
import { Check, ShieldAlert } from 'lucide-react';

const STEPS: ProcessStep[] = [
  { id: '1', num: '01', title: 'Discovery', description: 'In-depth client infrastructure auditing, stakeholder resource mapping, and custom technical specification alignment.' },
  { id: '2', num: '02', title: 'Architecture', description: 'Drafting strictly models, scalable API schema blueprints, failover flowcharts, and secure data relation pipelines.' },
  { id: '3', num: '03', title: 'Design', description: 'Prototyping high-fidelity mockups following the Corporate Modernism design system with robust usability parameters.' },
  { id: '4', num: '04', title: 'Development', description: 'Agile engineering sprints backed by clean TypeScript execution, Git commit tracking, and peer code reviews.' },
  { id: '5', num: '05', title: 'QA Testing', description: 'Implementing exhaustive unit, integration, high-concurrency end-to-end load tests, and security penetration audits.' },
  { id: '6', num: '06', title: 'Deployment', description: 'Utilizing strict zero-downtime blue-green container configurations safely inside sandboxed clusters.' },
  { id: '7', num: '07', title: 'Optimization', description: 'Performance and query speed tunings backed by strict system metrics telemetry and APM monitoring indicators.' },
  { id: '8', num: '08', title: 'Support', description: 'Continuous SLA-backed 24/7 incident monitoring, patch system rollouts, and periodic performance testing checks.' }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<string>('1');

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
            Execution Roadmap
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Engineering Excellence Process
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Our disciplined, 8-stage operational pipeline guarantees high-quality code and zero-downtime deployments for enterprise software.
          </p>
        </div>

        {/* 8-column layout split or simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {STEPS.slice(0, 4).map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border text-left flex flex-col justify-between min-h-[200px] ${
                activeStep === step.id
                  ? 'bg-slate-950 text-white border-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.1)] scale-[1.02]'
                  : 'bg-slate-50/50 hover:bg-slate-50 text-slate-900 border-slate-100 hover:border-slate-250'
              }`}
            >
              <div>
                <span className={`font-display text-4xl font-extrabold block mb-4 transition-colors ${
                  activeStep === step.id ? 'text-blue-400' : 'text-slate-300 group-hover:text-slate-450'
                }`}>
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-bold mb-1">{step.title}</h3>
                <p className={`text-xs leading-relaxed line-clamp-3 transition-colors ${
                  activeStep === step.id ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {step.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold mt-4">
                {activeStep === step.id ? (
                  <span className="text-blue-400 flex items-center gap-1">Active Stage <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /></span>
                ) : (
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors">Inspect details Project</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.slice(4, 8).map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border text-left flex flex-col justify-between min-h-[200px] ${
                activeStep === step.id
                  ? 'bg-slate-950 text-white border-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.1)] scale-[1.02]'
                  : 'bg-slate-50/50 hover:bg-slate-50 text-slate-900 border-slate-100'
              }`}
            >
              <div>
                <span className={`font-display text-4xl font-extrabold block mb-4 transition-colors ${
                  activeStep === step.id ? 'text-blue-400' : 'text-slate-300 group-hover:text-slate-450'
                }`}>
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-bold mb-1">{step.title}</h3>
                <p className={`text-xs leading-relaxed line-clamp-3 transition-colors ${
                  activeStep === step.id ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {step.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold mt-4">
                {activeStep === step.id ? (
                  <span className="text-blue-400 flex items-center gap-1">Active Stage <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /></span>
                ) : (
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors">Inspect details Project</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Card under block */}
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-display font-extrabold text-sm mt-0.5">
              SL
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">
                Selected Stage Specifications
              </span>
              <h4 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                Stage {activeStep}: {STEPS[parseInt(activeStep) - 1].title} Detailed SLA Checklist
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 max-w-3xl">
                {STEPS[parseInt(activeStep) - 1].description} We ensure strict automated checklist gates and rigorous engineering standards must be completed before shipping code beyond this boundary.
              </p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100">
              <Check size={14} /> 100% Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

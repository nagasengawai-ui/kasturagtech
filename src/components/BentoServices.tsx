import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  Globe, 
  Cloud, 
  Smartphone, 
  Settings2, 
  ArrowRight,
  Sparkles,
  Server,
  Workflow,
  CheckCircle2,
  X
} from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'ai',
    icon: 'BrainCircuit',
    title: 'AI-Driven Transformation',
    description: 'Implement proprietary LLMs, agentic neural networks, and automated reasoning pipelines into your core business systems.',
    details: [
      'Retrieval-Augmented Generation (RAG) at scale',
      'Proprietary model fine-tuning & quantization',
      'Intelligent routing / Autonomous workspace agents',
      'Semantic search and multi-modal classification'
    ]
  },
  {
    id: 'web',
    icon: 'Globe',
    title: 'Web Platforms',
    description: 'Enterprise scalable, high-performance web applications built on modern frameworks for speed and seamless UX.',
    details: [
      'Incremental Static Regeneration & Server Rendering',
      'Real-time low-latency synchronization',
      'Complex dashboard visualization (D3/Recharts)',
      'Bank-grade state synchronization & security'
    ]
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Cloud Infrastructure',
    description: 'Architecting ultra-secure AWS/GCP/Azure environments utilizing declarative container setups and serverless pipelines.',
    details: [
      'Terraform / Pulumi Infrastructure as Code (IaC)',
      'Highly available multi-region fallbacks',
      'Zero-trust network virtualization & secrets management',
      'Cost-guided resource optimization and autoscaling'
    ]
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile Ecosystems',
    description: 'High-fidelity native and cross-platform native mobile software designed strictly for distributed digital environments.',
    details: [
      'Swift/Kotlin native performance engines',
      'Offline-first databases (Room, SQLite, realm)',
      'Secure biometrics authentication pipelines',
      'Continuous background syncing & push configurations'
    ]
  },
  {
    id: 'devops',
    icon: 'Settings2',
    title: 'DevOps & Automation',
    description: 'Strict, robust CI/CD integration channels that slash failure rates and speed up shipping releases for engineering teams.',
    details: [
      'Automated canary deployment strategies',
      'Container orchestration via Kubernetes / Helm',
      'System-wide metrics telemetry and APM monitoring',
      'GitOps driven pull-request pipelines'
    ]
  }
];

export default function BentoServices() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="h-10 w-10 text-blue-600" />;
      case 'Globe': return <Globe className="h-10 w-10 text-violet-600" />;
      case 'Cloud': return <Cloud className="h-10 w-10 text-cyan-600" />;
      case 'Smartphone': return <Smartphone className="h-10 w-10 text-indigo-600" />;
      case 'Settings2': return <Settings2 className="h-10 w-10 text-emerald-600" />;
      default: return <BrainCircuit className="h-10 w-10 text-blue-600" />;
    }
  };

  return (
    <section className="py-24 px-6 sm:px-12 bg-[#fcf8fa]" id="services-section">
      <div className="mx-auto max-w-7xl">
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={12} className="text-blue-500 animate-spin" />
            Core Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Core Enterprise Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            We provide targeted, production-grade technical strategies configured to solve high-volume enterprise constraints with elegant, clean execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Card - Big Bento Box */}
          <div 
            onClick={() => setSelectedService(SERVICES[0])}
            className="md:col-span-2 group min-h-[320px] bg-white rounded-2xl p-8 hover:shadow-[0_10px_30px_rgba(30,64,175,0.05)] hover:border-blue-500/30 border border-slate-100/80 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-blue-50/30 rounded-full group-hover:scale-110 transition-transform duration-500 -z-0" />
            <div className="relative z-10 flex flex-col gap-6 md:gap-8 h-full justify-between">
              <div>
                <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {getIcon(SERVICES[0].icon)}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  {SERVICES[0].title}
                  <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-2 py-0.5 rounded-full inline-block">Popular</span>
                </h3>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-xl">
                  {SERVICES[0].description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all mt-4">
                Explore tech stack and integration specifications 
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Web Card */}
          <div 
            onClick={() => setSelectedService(SERVICES[1])}
            className="group bg-white rounded-2xl p-8 hover:shadow-[0_10px_30px_rgba(124,58,237,0.05)] hover:border-violet-500/30 border border-slate-100/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="h-14 w-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6">
                {getIcon(SERVICES[1].icon)}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {SERVICES[1].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {SERVICES[1].description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-violet-600 group-hover:gap-3 transition-all mt-6">
              View Specs <ArrowRight size={16} />
            </div>
          </div>

          {/* Cloud Card */}
          <div 
            onClick={() => setSelectedService(SERVICES[2])}
            className="group bg-white rounded-2xl p-8 hover:shadow-[0_10px_30px_rgba(6,182,212,0.05)] hover:border-cyan-500/30 border border-slate-100/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="h-14 w-14 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">
                {getIcon(SERVICES[2].icon)}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {SERVICES[2].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {SERVICES[2].description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-600 group-hover:gap-3 transition-all mt-6">
              View Specs <ArrowRight size={16} />
            </div>
          </div>

          {/* Mobile Card */}
          <div 
            onClick={() => setSelectedService(SERVICES[3])}
            className="group bg-white rounded-2xl p-8 hover:shadow-[0_10px_30px_rgba(99,102,241,0.05)] hover:border-indigo-500/30 border border-slate-100/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="h-14 w-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                {getIcon(SERVICES[3].icon)}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {SERVICES[3].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {SERVICES[3].description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all mt-6">
              View Specs <ArrowRight size={16} />
            </div>
          </div>

          {/* DevOps Card */}
          <div 
            onClick={() => setSelectedService(SERVICES[4])}
            className="group bg-white rounded-2xl p-8 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] hover:border-emerald-500/30 border border-slate-100/80 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                {getIcon(SERVICES[4].icon)}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {SERVICES[4].title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {SERVICES[4].description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-3 transition-all mt-6">
              View Specs <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Dialog Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)} 
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 z-10"
              id="details-modal"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 text-slate-450 hover:text-slate-800 p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  {getIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{selectedService.title}</h3>
                  <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Technical Specs</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Key Deliverables</span>
                <div className="space-y-3">
                  {selectedService.details.map((detail, index) => (
                    <div key={index} className="flex gap-2.5 items-start text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-all"
                >
                  Close Spec List
                </button>
                <a
                  href="#contact-form"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-all text-center block"
                >
                  Consult an Architect
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

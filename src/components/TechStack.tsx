import React, { useState } from 'react';
import { 
  FileCode, 
  Layers, 
  CloudRain, 
  Database, 
  Cpu, 
  Box,
  CheckCircle2
} from 'lucide-react';

const STACK_ITEMS = [
  { 
    name: 'React.js', 
    icon: FileCode, 
    color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    desc: 'Modular frontends structured with rigid, performant type constraints and declarative user interfaces.', 
    details: 'Leverages Vite for static module bundlings and rapid, secure digital layouts.'
  },
  { 
    name: 'Kubernetes', 
    icon: Layers, 
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    desc: 'Self-healing cluster orchestration designed to maintain reliable runtime boundaries.', 
    details: 'Handles continuous pod scale-out triggers and zero-downtime rolling service releases.'
  },
  { 
    name: 'Amazon Web Services', 
    icon: CloudRain, 
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    desc: 'Secure cloud environments backed by highly available, declarative IaC deployments.', 
    details: 'Automated infrastructure deployments mapping Elastic Container Services and serverless Lambdas.'
  },
  { 
    name: 'PostgreSQL', 
    icon: Database, 
    color: 'text-slate-600 bg-slate-600/10 border-slate-600/20',
    desc: 'Highly optimized SQL database architectures with ACID-backed transactional safety.', 
    details: 'Includes tailored horizontal data read replications and deep indexing constraints.'
  },
  { 
    name: 'Node.js', 
    icon: Cpu, 
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    desc: 'Low-latency backend handlers and fast event loop microservices.', 
    details: 'Structured using modern asynchronous streams and strict security standards.'
  },
  { 
    name: 'Docker', 
    icon: Box, 
    color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    desc: 'Isolated, declarative runtime containers ensuring absolute server parity.', 
    details: 'Aggressive image size caching pipelines guaranteeing instant system startup triggers.'
  },
];

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-200 rounded-full text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Standards-Based
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Our Solid Engineering Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We build strictly with proven, highly-scalable enterprise technologies that eliminate system debt and support reliable performance under load.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 ${item.color} ${isHovered ? 'scale-110' : ''}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-4 border-t border-slate-50 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-60 text-slate-400'}`}>
                  <p className="text-xs italic leading-relaxed text-slate-500">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

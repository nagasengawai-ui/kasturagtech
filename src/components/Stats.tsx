import React from 'react';

const STATS = [
  { value: '100+', label: 'Successful Projects', sub: 'Custom scalable systems delivered' },
  { value: '50+', label: 'Enterprise Clients', sub: 'CTOs & global partners' },
  { value: '99.9%', label: 'Uptime Guaranteed', sub: 'No single point of failure' },
  { value: '24/7', label: 'Premium Support', sub: 'SLA-backed technical response' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="text-center p-6 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors duration-300 border border-slate-150/40"
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

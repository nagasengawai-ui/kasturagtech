import React from 'react';
import { MapPin, ShieldAlert, Users } from 'lucide-react';

const SITES = [
  {
    city: 'Nashik',
    role: 'HQ & Principal Development Hub',
    email: 'kasturagtech@gmail.com',
    coords: 'IT Park, Nashik, Maharashtra 422013'
  },
  {
    city: 'Mumbai',
    role: 'Corporate & Financial Infrastructure',
    email: 'kasturagtech@gmail.com',
    coords: 'Bandra Kurla Complex, Mumbai, MH 400051'
  },
  {
    city: 'Bangalore',
    role: 'APAC South Tech Corridor Hub',
    email: 'kasturagtech@gmail.com',
    coords: 'Outer Ring Road, Bengaluru, Karnataka 560103'
  }
];

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-200 rounded-full text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            National Infrastructure
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Our Enterprise Presence
          </h2>
          <p className="text-base sm:text-lg text-slate-650 max-w-xl mx-auto">
            Distributed high-availability infrastructure hubs strategically aligned to support national and multinational client operations with ultra-low latency guarantees.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SITES.map((site, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-slate-150/60 p-6 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <MapPin size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{site.city}</h3>
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block mb-4">{site.role}</span>
                <p className="text-sm text-slate-500 leading-relaxed">{site.coords}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50">
                <span className="text-xs text-slate-400 font-bold block mb-1 uppercase tracking-wide">Direct Desk Inquiry</span>
                <a href={`mailto:${site.email}`} className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Map Graphic with Absolute Positioning Pulsing Markers */}
        <div className="relative h-[420px] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-950">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt71oqPG-mGgnkJghbSVuGAWN0gAKWk1jeXTYZATaImulhaE3VBoweEkk6Jr7j6oM7ziziMdJS4UKYzbA-iEkdeKVhjL3FJ1tMnBx4CKNJAB_sD0k_ntbpb6SfLBzFhNDQKNwmlEdAs_aSLFRHBN0UkoAkuVGaGeqerFY_b7ofzgbPQLYAdmPdK1hSCKKxcxXhU-jdAccH3evOsTgwO5jvUekuIel7mpo5LFuYaVL3YZAPSAt5STIZHTK8lMyZO1DPBVOVxQMnBoZt" 
            alt="National network connection map graphics" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />

          {/* Nashik Pulsing Marker */}
          <div className="absolute top-[32%] left-[18%] md:left-[22%] group cursor-pointer" title="Nashik HQ">
            <span className="flex h-4.5 w-4.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </span>
            <div className="hidden group-hover:block absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-white text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded whitespace-nowrap z-10 transition-all">
              Nashik HQ
            </div>
          </div>

          {/* Mumbai Pulsing Marker */}
          <div className="absolute top-[28%] left-[46%] md:left-[47%] group cursor-pointer" title="Mumbai Hub">
            <span className="flex h-4.5 w-4.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </span>
            <div className="hidden group-hover:block absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-white text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded whitespace-nowrap z-10 transition-all">
              Mumbai Hub
            </div>
          </div>

          {/* Bangalore Pulsing Marker */}
          <div className="absolute top-[62%] left-[78%] group cursor-pointer" title="Bangalore Tech Corridor">
            <span className="flex h-4.5 w-4.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            </span>
            <div className="hidden group-hover:block absolute top-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-800 text-white text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded whitespace-nowrap z-10 transition-all">
              Bangalore Hub
            </div>
          </div>

          {/* Technical Info box inside Map */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-slate-900/80 backdrop-blur-md border border-slate-800 p-5 rounded-xl max-w-sm z-10 shadow-lg">
            <div className="flex gap-3 mb-2">
              <Users size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Distributed Support Network</h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Our live national networks engineer team monitors cluster performance checkpoints continuously across domestic grids, ensuring SOC2 certified data parity and 99.99% uptime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

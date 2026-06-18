import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'banking',
    title: 'Global Banking API Hub',
    category: 'FINTECH',
    metric1: '40% Speed Increase',
    metric2: 'Zero Downtime Architecture',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzpFkuCwSMBfBb0eQs0V4tbvEENJC5qckudcS1oF8FrSVa4aVk8WErceGtsTapj6re_mzKoct48zY85F90dsM8_7qYUT7mdtzaOzI1jpbi4xmuUVRNUBcQa5PgPxmx1eTsKQqf_2c1qpEe-iUnhQiqkiLhx8ZhkF86ralN3jGvDZ1o4wIOI9gHqgtYBCk156NGCYWm2nf5kfpSnYfJ_t_5oRpcBBIIrOTlaY1s0qksXmHnKa4-ALULgIgJJQdiC6RGx69duQZ6Myh7',
    imageAlt: 'Futuristic commanding financial technology control room displaying high performance metrics dashboard',
    description: 'Designed a highly secure, transaction-heavy middleware engine executing microsecond trade approvals utilizing localized tokenized caching.'
  },
  {
    id: 'ecommerce',
    title: 'Scalable E-commerce Grid',
    category: 'CLOUD INFRASTRUCTURE',
    metric1: '10M+ Daily Active Users',
    metric2: '50% Lower Compute Overheads',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsa1l7bFvMK_h2rM2Tovz6Tv4rXgFo2JKD3GvNSC_zCSpTcB8eMluaPzRHmMgRwtZppA7FSnWbXFETxSlsyhW64lKGJYs9ZWe5U-IoMgBy53P9s9yJPP2MKrLowrnt8fGZAJml5CxtPotzoWUTo7oi7NGYcJNXVxoqZTY-jTxM-YqgpBmcxkpmI3e-6Ymh-ZKn5FY0rWc7tqNPcess932Er9gCkLjnJOkTEFqlzpazPa7VG5fpvAvBFqKCKwqiMt6FZXME4p_IhdGh',
    imageAlt: 'Modern server racks room stretching into enterprise global perspective',
    description: 'Developed an automated fail-safe web infrastructure spanning multi-region Kubernetes nodes with self-healing Docker engines.'
  },
  {
    id: 'logistics',
    title: 'Predictive Logistics Engine',
    category: 'AI / ML INTEGRATION',
    metric1: '95% Route Accuracy',
    metric2: 'Real-time Telemetry Sync',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM1JSf_25Fu9fVW_xdVpzT-W3trduXqcdWYCO9pZ8iHgJqIRGNpew-qAF9xBpR4YdwMgBU4Ing4UMecr7WcvVQLLIstmgTM5Gr9f5vNSIDpuideES5YlpwCyul3vY9Bf13qiKXcjLTHWy6K_guylTmY_vYjTOgzAelyFw0NyOSPVFV44oB2bfjSLSPl6ez-wqE6d_jOSuqfXrzOED5oWzpNQg26dHyBNURqyh-6bFGk5KSzh64YbMx3_K4RAqeEYhnZ8_26U63yP77',
    imageAlt: 'Workstation laptop demonstrating complex high-definition logistics visual analytic charts',
    description: 'Built a multi-modal agentic platform generating real-time predictive delivery routes using machine learning telemetry datasets.'
  }
];

export default function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 400;
    const currentScroll = container.scrollLeft;
    container.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-24 bg-white" id="projects-section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              Performance Cases
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              Featured Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl">
              Real-world implementations yielding quantifiable metrics for our global enterprise partners.
            </p>
          </div>
          <div className="flex gap-2.5 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 hover:text-slate-900 active:scale-90 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 hover:text-slate-900 active:scale-90 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrolling horizontal list */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-10 no-scrollbar snap-x snap-mandatory"
        >
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id}
              className="min-w-[325px] sm:min-w-[450px] md:min-w-[480px] bg-slate-50/40 rounded-2xl border border-slate-100 p-4 snap-start group hover:bg-white hover:shadow-[0_15px_40px_rgba(15,23,42,0.04)] hover:border-slate-200/60 transition-all duration-300"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden rounded-xl mb-6 relative">
                <img 
                  src={study.imageUrl} 
                  alt={study.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded">
                    {study.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-blue-600 border-t border-slate-100 pt-4">
                <span className="bg-blue-50 px-2.5 py-1 rounded">{study.metric1}</span>
                <span className="bg-blue-50 px-2.5 py-1 rounded">{study.metric2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

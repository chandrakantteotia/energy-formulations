import React from 'react';
import { Sparkles, Layers, Cpu, CheckCircle } from 'lucide-react';

export default function CustomMfgHero() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
      {/* Label */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Custom Manufacturing Hub</span>
      </div>

      {/* Huge Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-[1.1] mb-6">
        Your Product. Your Requirements.{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
          Our Manufacturing Expertise.
        </span>
      </h2>

      {/* Supporting Copy */}
      <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
        From dosage form and product specifications to packaging and production requirements, our approach is designed around the needs of your business.
      </p>

      {/* Fast Capability Pills */}
      <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-medium text-slate-300">
        <span className="px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-navy-700/70 flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-brand-green-400" />
          <span>Tailored Excipient Systems</span>
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-navy-700/70 flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-brand-green-400" />
          <span>Flexible Pilot & Commercial Batches</span>
        </span>
        <span className="px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-navy-700/70 flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 text-brand-green-400" />
          <span>Complete Stability & Analytical Dossiers</span>
        </span>
      </div>
    </div>
  );
}

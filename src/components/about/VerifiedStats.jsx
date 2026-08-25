import React from 'react';
import { VERIFIED_STATISTICS } from '../../data/companyData';
import { ShieldCheck, Info } from 'lucide-react';

export default function VerifiedStats() {
  return (
    <section className="py-16 sm:py-20 bg-brand-navy-950 text-white border-y border-brand-navy-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-brand-navy-800/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-green-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Verified Company Benchmarks
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-brand-navy-900 px-3 py-1 rounded-full border border-brand-navy-800 w-fit">
            <Info className="w-3.5 h-3.5 text-brand-green-400" />
            <span>Verified operational statistics ready for customized expansion</span>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {VERIFIED_STATISTICS.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-brand-green-400 font-mono tracking-tight mb-2">
                {stat.value}
              </div>
              
              <div className="text-sm sm:text-base font-bold text-white tracking-tight mb-1">
                {stat.metric}
              </div>

              <div className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

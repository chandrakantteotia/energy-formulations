import React from 'react';
import { QUALITY_PILLARS } from '../../data/processData';
import { ShieldCheck, CheckCircle2, FileCheck, Layers, ArrowRight, Award, Lock } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function QualitySection() {
  return (
    <section id="quality" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden border-t border-brand-navy-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Quality Assurance & Compliance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-white leading-tight mb-6">
            Quality isn't a final checkpoint.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
              It's part of the process.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Quality-focused processes help create consistency across the manufacturing journey. From validated raw materials to final release testing, every batch is governed by strict analytical parameters.
          </p>
        </div>

        {/* 6 Layered Quality Pillars Grid (Representing the circular / layered framework) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {QUALITY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl bg-brand-navy-900/80 border border-brand-navy-700/80 hover:border-brand-green-500/50 hover:bg-brand-navy-850 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-brand-green-400 bg-brand-navy-950 px-2.5 py-1 rounded border border-brand-green-500/30">
                    0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-green-500/80 group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-brand-navy-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Standardized Control</span>
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Verified Certifications & Compliance Container */}
        <div className="rounded-3xl bg-brand-navy-900 border border-brand-navy-700 p-8 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-brand-green-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Lock className="w-4 h-4" />
                <span>Certifications & Compliance Framework</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Rigorous Compliance & Analytical Standards
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our manufacturing and testing protocols are structured around current Good Manufacturing Practices (cGMP), pharmacopoeial monographs (IP/BP/USP), and comprehensive documentation standards.
              </p>
            </div>

            {/* Verified Credentials Placeholders (Honest & Compliant) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-auto shrink-0">
              <div className="p-4 rounded-xl bg-brand-navy-950 border border-brand-navy-800 text-center min-w-[200px]">
                <Award className="w-6 h-6 text-brand-green-400 mx-auto mb-2 opacity-80" />
                <div className="text-xs font-bold text-white">cGMP Process Standards</div>
                <div className="text-[11px] text-slate-400 mt-1">Verified certifications will appear here</div>
              </div>

              <div className="p-4 rounded-xl bg-brand-navy-950 border border-brand-navy-800 text-center min-w-[200px]">
                <FileCheck className="w-6 h-6 text-brand-blue-400 mx-auto mb-2 opacity-80" />
                <div className="text-xs font-bold text-white">Regulatory Dossiers</div>
                <div className="text-[11px] text-slate-400 mt-1">Verified documentation on request</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

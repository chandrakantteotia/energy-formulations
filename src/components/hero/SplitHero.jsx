import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function SplitHero({ onOpenQuoteModal }) {
  return (
    <section id="hero" className="relative min-h-screen bg-brand-navy-950 text-white flex items-center pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 overflow-hidden">
      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#17A673_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-brand-blue-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-navy-850 border border-brand-green-500/30 text-brand-green-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-green-500 animate-pulse shrink-0" />
              <span className="truncate">Pharmaceutical Formulation & Manufacturing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-6">
              Precision in Formulation.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-brand-light to-brand-green-400">
                Confidence in Every Partnership.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8">
              From product development to dependable manufacturing, Energy Formulations helps healthcare businesses move from requirement to production with clarity and confidence.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green hover:shadow-lg transition-all duration-300 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-brand-navy-950 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('solutions')}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-slate-200 bg-brand-navy-900/80 hover:bg-brand-navy-800 border border-slate-700 hover:border-slate-500 transition-all duration-200"
              >
                <span>Explore Capabilities</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 border-t border-brand-navy-800/80 max-w-xl">
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Standard</div>
                <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">cGMP Aligned</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Manufacturing</div>
                <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">Multi-Dosage</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Support</div>
                <div className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5">Turnkey R&D</div>
              </div>
            </div>

          </div>

          {/* Right Column: Split Cinematic Visual & Floating Glass Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-navy-700/80 bg-brand-navy-900 group">
              
              {/* High-Resolution Hero Visual */}
              <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80"
                  alt="Pharmaceutical formulation and manufacturing cleanroom facility"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/60 via-transparent to-brand-navy-950/30" />
              </div>

              {/* Floating Glass Micro-Card 1 (Top Right) */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 glass-dark rounded-xl p-2.5 sm:p-4 shadow-glass max-w-[200px] sm:max-w-[240px] border border-white/15 animate-fade-in">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-green-400" />
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Manufacturing Focus
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-white leading-tight">
                  Formulation • Quality • Reliability
                </p>
              </div>

              {/* Floating Glass Micro-Card 2 (Bottom Left) */}
              <div className="absolute bottom-4 left-3 right-3 sm:right-auto sm:left-5 glass-dark rounded-xl p-3 sm:p-4 shadow-glass sm:max-w-[280px] border border-white/15">
                <div className="flex items-center sm:items-start gap-2.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-brand-green-500/20 text-brand-green-400 border border-brand-green-500/30 shrink-0">
                    <Sliders className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white tracking-tight">
                      Custom Formulation
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">
                      Built around your requirements
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Subtle floating accent ring */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border border-brand-green-500/20 rounded-2xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

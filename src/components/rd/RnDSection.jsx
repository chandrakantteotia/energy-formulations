import React from 'react';
import { RD_JOURNEY_STEPS, RD_CAPABILITY_AREAS } from '../../data/processData';
import { FlaskConical, ArrowRight, CheckCircle2, Atom, Layers, Sparkles } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function RnDSection() {
  return (
    <section id="rnd" className="py-16 sm:py-20 lg:py-28 bg-white text-brand-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="editorial-tag-navy mb-3 sm:mb-4">
            <FlaskConical className="w-3.5 h-3.5 text-brand-blue-700" />
            <span>Research & Development</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight mb-4 sm:mb-6">
            Turning product requirements into manufacturable solutions.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
            Our formulation scientists bridge the gap between initial molecule chemistry and high-yield commercial production, optimizing bioavailability, stability, and scale efficiency.
          </p>
        </div>

        {/* Hero Visual + Floating Development Journey Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-12 sm:mb-16 bg-brand-navy-950">
          
          {/* Main Laboratory Image */}
          <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] w-full">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80"
              alt="State of the art pharmaceutical R&D formulation and analytical testing laboratory"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/80 via-transparent to-transparent" />
          </div>

          {/* Development Journey Overlay */}
          <div className="static sm:absolute sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-8 lg:right-8 glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-white/15">
              <div className="flex items-center gap-2">
                <Atom className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-green-400" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-green-300">
                  Formulation Development Journey
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-300 hidden sm:inline-block">
                Concept to Commercialization
              </span>
            </div>

            {/* Horizontal 5-Step Pipeline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              {RD_JOURNEY_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-brand-navy-900/90 rounded-xl p-2.5 sm:p-3.5 border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-green-400 mb-1">
                    {step.step}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-white leading-snug">
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Core R&D Capability Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {RD_CAPABILITY_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-brand-light border border-slate-200/80 hover:border-brand-blue-700/40 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-blue-700 flex items-center justify-center mb-4 group-hover:bg-brand-blue-700 group-hover:text-white transition-colors shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-brand-navy-900 mb-2">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-brand-blue-700">
                <span>Verified R&D Capability</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-600" />
              </div>
            </div>
          ))}

          {/* R&D Inquiry Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-navy-900 text-white border border-brand-navy-800 flex flex-col justify-between">
            <div>
              <div className="editorial-tag-dark mb-4">
                <Sparkles className="w-3 h-3 text-brand-green-400" />
                <span>Technical Consultation</span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Have a novel formulation challenge?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with our formulation and analytical development specialists to assess technical feasibility.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 transition-colors flex items-center justify-center gap-2 shadow-glow-green"
            >
              <span>Talk to Our Development Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

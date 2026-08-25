import React, { useState } from 'react';
import { INSIDE_THE_PROCESS_STAGES } from '../../data/processData';
import { CheckCircle2, ChevronRight, Play, Sparkles, Activity } from 'lucide-react';

export default function InsideTheProcess() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = INSIDE_THE_PROCESS_STAGES[activeStageIndex];

  return (
    <section id="inside-process" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden border-t border-brand-navy-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Activity className="w-4 h-4" />
            <span>Manufacturing Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-white leading-tight mb-6">
            Inside the Process:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
              The Formulation Journey
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Follow the traceable path of raw actives and excipients as they move through quarantined intake, high-shear processing, in-line analytical inspection, and certified batch dispatch.
          </p>
        </div>

        {/* Interactive Journey Controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stage Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {INSIDE_THE_PROCESS_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-brand-navy-900 border-brand-green-500 shadow-xl ring-1 ring-brand-green-500/50'
                      : 'bg-brand-navy-900/40 border-brand-navy-800/80 hover:bg-brand-navy-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-9 h-9 rounded-xl font-mono text-xs font-bold flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-brand-green-500 text-brand-navy-950 font-extrabold shadow-glow-green'
                          : 'bg-brand-navy-950 text-slate-400 border border-brand-navy-700 group-hover:text-white'
                      }`}
                    >
                      {stage.number}
                    </span>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {stage.category}
                      </div>
                      <div className={`text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {stage.title}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-brand-green-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Stage Interactive Showcase */}
          <div className="lg:col-span-7 bg-brand-navy-900 rounded-3xl border border-brand-navy-750 p-6 sm:p-8 shadow-2xl overflow-hidden animate-fade-in key={currentStage.id}">
            
            {/* Visual Display with High-Res Image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-brand-navy-700">
              <img
                src={currentStage.image}
                alt={currentStage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-brand-green-400 bg-brand-navy-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-green-500/30">
                  STAGE {currentStage.number} • {currentStage.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {currentStage.title}
                </h3>
              </div>
            </div>

            {/* Stage Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {currentStage.description}
            </p>

            {/* In-Process Quality Checkpoints */}
            <div className="space-y-3 pt-6 border-t border-brand-navy-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-green-400" />
                <span>Analytical & In-Process Checkpoints</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentStage.checks.map((check, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-brand-navy-950/60 p-2.5 rounded-xl border border-brand-navy-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-400 shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

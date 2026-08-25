import React, { useState } from 'react';
import { CUSTOM_MFG_STEPS } from '../../data/processData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="pt-4">
      {/* Section Sub-Header */}
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-green-400 mb-2">
          Methodical Execution
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          The Custom Manufacturing Process
        </h3>
        <p className="text-sm sm:text-base text-slate-300 mt-2">
          From initial chemistry scoping to final commercial release, our 6-stage lifecycle guarantees traceability, analytical rigor, and on-time delivery.
        </p>
      </div>

      {/* Progress Track (Desktop) */}
      <div className="hidden lg:block relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-navy-800 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-brand-blue-600 via-brand-green-500 to-brand-green-400 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeStep / (CUSTOM_MFG_STEPS.length - 1)) * 100}%` }}
        />

        <div className="relative z-10 grid grid-cols-6 gap-2">
          {CUSTOM_MFG_STEPS.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center text-center group focus:outline-none"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isCurrent
                      ? 'bg-brand-green-500 text-brand-navy-950 ring-4 ring-brand-green-500/30 scale-110 shadow-glow-green font-extrabold'
                      : isCompleted
                      ? 'bg-brand-blue-700 text-white border border-brand-green-500/50'
                      : 'bg-brand-navy-900 text-slate-400 border border-brand-navy-700 group-hover:border-slate-500'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5 text-brand-green-400" /> : step.step}
                </div>

                <span
                  className={`text-[11px] font-bold uppercase tracking-wider mt-3 transition-colors ${
                    isCurrent ? 'text-brand-green-400' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {step.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Step Card Details (Desktop & Tablet) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {CUSTOM_MFG_STEPS.map((step, idx) => {
          const isSelected = activeStep === idx;

          return (
            <div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-brand-navy-850 to-brand-navy-900 border-brand-green-500/60 shadow-xl ring-1 ring-brand-green-500/40'
                  : 'bg-brand-navy-900/60 border-brand-navy-800 hover:border-brand-navy-700 hover:bg-brand-navy-850/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-brand-green-400 bg-brand-navy-950 px-2 py-0.5 rounded border border-brand-green-500/30">
                    STAGE {step.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {step.name}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-navy-800/80">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Key Deliverable
                </div>
                <div className="text-xs font-medium text-brand-green-300 mt-0.5">
                  {step.deliverable}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

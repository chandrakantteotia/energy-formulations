import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { ArrowRight, ChevronDown, Check, Sparkles } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function SolutionsPanels({ onSelectSolutionForQuote }) {
  const [activePanel, setActivePanel] = useState(0); // 0-4 for desktop expansion
  const [openMobileAccordion, setOpenMobileAccordion] = useState(0);

  const handleSelectSolution = (solution) => {
    if (onSelectSolutionForQuote) {
      onSelectSolutionForQuote(solution.title);
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white text-brand-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="editorial-tag-navy mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-700" />
              <span>Tailored Solutions</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight">
              Solutions built around your product.
            </h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            From specialized formulation development to high-speed commercial packaging, our capabilities adapt to your therapeutic and commercial scale.
          </p>
        </div>

        {/* DESKTOP INTERACTIVE EXPANDING PANELS (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-3 h-[520px] w-full">
          {SOLUTIONS_DATA.map((solution, index) => {
            const isExpanded = activePanel === index;

            return (
              <div
                key={solution.id}
                onMouseEnter={() => setActivePanel(index)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end p-8 border ${
                  isExpanded
                    ? 'flex-[3.2] border-brand-green-500/50 shadow-2xl'
                    : 'flex-[1] border-slate-200 bg-brand-navy-950 hover:border-slate-400'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isExpanded ? 'scale-105' : 'scale-100 opacity-40 filter grayscale'
                    }`}
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? 'bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/70 to-brand-navy-950/20'
                        : 'bg-brand-navy-950/80'
                    }`}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 text-white">
                  
                  {/* Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold font-mono text-brand-green-400 bg-brand-navy-900/80 px-2.5 py-1 rounded-md border border-brand-green-500/30">
                      {solution.number}
                    </span>
                    {isExpanded && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                        {solution.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold transition-all text-white ${
                      isExpanded ? 'text-2xl lg:text-3xl mb-3' : 'text-lg line-clamp-2'
                    }`}
                  >
                    {solution.title}
                  </h3>

                  {/* Short Description (Always visible or adjusted) */}
                  {!isExpanded && (
                    <p className="text-xs text-slate-300 line-clamp-2 mt-2">
                      {solution.shortDescription}
                    </p>
                  )}

                  {/* Expanded Detailed View */}
                  {isExpanded && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                        {solution.fullDescription}
                      </p>

                      {/* Capabilities Grid */}
                      <div className="grid grid-cols-2 gap-2 py-3 border-y border-white/15 my-3">
                        {solution.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-brand-green-400 shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      {/* Explore CTA */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectSolution(solution);
                          }}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green-400 hover:text-white bg-brand-green-500/20 hover:bg-brand-green-500/30 border border-brand-green-500/40 px-4 py-2.5 rounded-lg transition-all"
                        >
                          <span>Explore Solution & Inquire</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE ACCORDION (Visible on Mobile & Tablet) */}
        <div className="lg:hidden space-y-4">
          {SOLUTIONS_DATA.map((solution, index) => {
            const isOpen = openMobileAccordion === index;

            return (
              <div
                key={solution.id}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenMobileAccordion(isOpen ? -1 : index)}
                  className="w-full p-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold font-mono text-brand-green-600 bg-brand-green-50 px-2 py-0.5 rounded border border-brand-green-200">
                      {solution.number}
                    </span>
                    <span className="font-bold text-brand-navy-900 text-base">
                      {solution.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-green-600' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="p-5 border-t border-slate-200 space-y-4 bg-white animate-fade-in">
                    <div className="relative h-44 rounded-lg overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-brand-navy-900/80 px-2.5 py-1 rounded">
                        {solution.badge}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {solution.fullDescription}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities
                      </div>
                      {solution.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-brand-green-600 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleSelectSolution(solution)}
                      className="w-full py-3 px-4 rounded-lg bg-brand-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Inquire About This Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-green-400" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

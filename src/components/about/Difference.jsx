import React from 'react';
import { DIFFERENCE_POINTS } from '../../data/companyData';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function Difference() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-light text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="editorial-tag-navy mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-900" />
            <span>Why Energy Formulations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight mb-6">
            Manufacturing is more than production.
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            Your manufacturing partner should understand more than a production schedule. It should understand your product, your requirements, your quality expectations and your business goals.
          </p>
        </div>

        {/* 3 Large Editorial Statements (Distinct from generic cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-slate-300/80">
          {DIFFERENCE_POINTS.map((point) => (
            <div key={point.number} className="flex flex-col justify-between group">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-brand-blue-700/30 group-hover:text-brand-green-600 transition-colors font-mono mb-4 block">
                  {point.number}
                </span>

                <h3 className="text-2xl font-bold text-brand-navy-900 mb-3 tracking-tight group-hover:text-brand-blue-700 transition-colors">
                  {point.title}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Formulation Principle
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-200/60 group-hover:bg-brand-green-500/20 group-hover:text-brand-green-600 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-green-600" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-green-600 mb-1">
              Engineered for Precision
            </div>
            <div className="text-base font-semibold text-brand-navy-900">
              Designed around quality, consistency, and the evolving requirements of healthcare businesses.
            </div>
          </div>

          <button
            onClick={() => scrollToSection('custom-manufacturing')}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-blue-700 hover:text-brand-green-600 whitespace-nowrap group"
          >
            <span>Learn About Custom Manufacturing</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

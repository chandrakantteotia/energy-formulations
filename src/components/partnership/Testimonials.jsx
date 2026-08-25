import React from 'react';
import { TESTIMONIAL_PLACEHOLDERS } from '../../data/companyData';
import { Quote, ShieldCheck, Lock } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white text-brand-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with verified badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="editorial-tag-navy mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green-600" />
              <span>Partnership Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-900 tracking-tight">
              Verified Client Testimonials
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full w-fit">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Verified testimonials will appear here</span>
          </div>
        </div>

        {/* 3 Formatted Testimonial Card Shells */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_PLACEHOLDERS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-brand-light border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="text-xs font-bold text-brand-navy-900">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.designation} • <span className="font-medium text-brand-blue-700">{item.company}</span>
                </div>
                <div className="text-[10px] uppercase font-semibold text-slate-400 mt-1">
                  Scope: {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

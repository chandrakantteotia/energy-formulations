import React from 'react';
import { DECISION_MAKER_BENEFITS, CLIENT_TYPES } from '../../data/companyData';
import { MessageSquare, Sliders, FileText, HeartHandshake, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function BusinessPartner() {
  const icons = [MessageSquare, Sliders, FileText, HeartHandshake];

  return (
    <section className="py-20 lg:py-28 bg-brand-light text-brand-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-tag-navy mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-700" />
            <span>Executive Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight mb-6">
            A manufacturing partner should make your business easier.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We operate as a direct extension of your supply chain and technical leadership, bringing predictability, transparency, and formulation competence to every batch.
          </p>
        </div>

        {/* 4 Decision Maker Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {DECISION_MAKER_BENEFITS.map((benefit, idx) => {
            const Icon = icons[idx] || CheckCircle2;

            return (
              <div
                key={benefit.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-brand-green-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 flex items-center justify-center mb-5 group-hover:bg-brand-green-500 group-hover:text-brand-navy-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy-900 mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 flex items-center gap-1">
                  <span>Executive Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries / Client Types Ticker & Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-green-600 mb-1">
                Client Ecosystem
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-900">
                Tailored Engagements Across Healthcare Sectors
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Supporting enterprises, regional distributors, and emerging brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENT_TYPES.map((type, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Building className="w-4 h-4 text-brand-navy-800 shrink-0" />
                    <h4 className="text-sm font-bold text-brand-navy-900">
                      {type.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Custom CTA Tile */}
            <div className="p-4 rounded-xl bg-brand-navy-900 text-white flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green-400">
                  Custom Engagement
                </span>
                <h4 className="text-sm font-bold text-white mt-1">
                  Your Specialized Business Model
                </h4>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-3 text-xs font-bold text-brand-green-400 hover:text-white flex items-center gap-1"
              >
                <span>Discuss Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Executive CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-navy-900 hover:bg-brand-navy-850 shadow-lg hover:shadow-xl transition-all group"
          >
            <span>Discuss Your Manufacturing Requirement</span>
            <ArrowRight className="w-4 h-4 text-brand-green-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

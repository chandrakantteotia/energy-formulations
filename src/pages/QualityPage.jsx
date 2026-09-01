import React from 'react';
import { Link } from 'react-router-dom';
import QualitySection from '../components/quality/QualitySection';
import InfraGallery from '../components/infrastructure/InfraGallery';
import RnDSection from '../components/rd/RnDSection';
import { ShieldCheck, Building2, FlaskConical, ArrowRight } from 'lucide-react';

export default function QualityPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#17A673_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Quality & Infrastructure</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-tight mb-6">
              Disciplined Infrastructure.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
                Uncompromising Quality.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              Designed around unidirectional material flows, Class D cleanroom cascades, state-of-the-art analytical testing, and comprehensive batch documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Framework & Verified Compliance */}
      <QualitySection />

      {/* Facility Infrastructure Gallery & Lightbox */}
      <InfraGallery />

      {/* R&D Laboratory Suite & Formulation Development */}
      <RnDSection />

      {/* Facility Inspection & Regulatory Consultation Banner */}
      <section className="py-14 bg-brand-navy-900 text-white border-t border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Interested in a technical audit or site visit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We welcome QA and supply chain leaders for technical site assessments and quality audits.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-brand-green-500 hover:bg-brand-green-400 text-brand-navy-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-glow-green transition-all shrink-0"
          >
            Schedule Technical Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}

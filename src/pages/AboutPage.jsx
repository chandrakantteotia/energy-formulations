import React from 'react';
import { Link } from 'react-router-dom';
import Difference from '../components/about/Difference';
import VerifiedStats from '../components/about/VerifiedStats';
import BusinessPartner from '../components/partnership/BusinessPartner';
import Testimonials from '../components/partnership/Testimonials';
import { ArrowRight, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#17A673_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>About Energy Formulations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-tight mb-6">
              Precision in Formulation.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
                Integrity in Every Partnership.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
              Energy Formulations provides formulation and manufacturing solutions designed around quality, consistency and the evolving requirements of healthcare businesses.
            </p>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                <span>cGMP-Compliant Manufacturing Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                <span>Transparent Regulatory & Batch Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <Difference />

      {/* Verified Statistics */}
      <VerifiedStats />

      {/* Business Partner & Executive Values */}
      <BusinessPartner />

      {/* Testimonials Placeholders */}
      <Testimonials />

      {/* Bottom Action Strip */}
      <section className="py-14 bg-brand-navy-900 text-white border-t border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Ready to work with Energy Formulations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak with our formulation consultants to evaluate technical feasibility.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-green-500 hover:bg-brand-green-400 text-brand-navy-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-glow-green transition-all"
            >
              Start Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

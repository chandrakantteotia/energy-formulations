import React from 'react';
import { Link } from 'react-router-dom';
import SplitHero from '../components/hero/SplitHero';
import TrustStrip from '../components/hero/TrustStrip';
import { VERIFIED_STATISTICS, DIFFERENCE_POINTS } from '../data/companyData';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { PRODUCT_CATEGORIES } from '../data/productsData';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Layers, Sliders, ChevronRight } from 'lucide-react';

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <div>
      {/* 1. Cinematic Split Hero */}
      <SplitHero onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Executive Overview & The Difference Snippet */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="editorial-tag-navy mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-900" />
                <span>Executive Overview</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight">
                Manufacturing is more than production.
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
              Your manufacturing partner should understand your product, quality expectations, and long-term business goals with strict repeatability.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {DIFFERENCE_POINTS.map((point) => (
              <div key={point.number} className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-brand-green-500/50 hover:shadow-card-hover transition-all duration-300">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-blue-700/30 group-hover:text-brand-green-600 transition-colors font-mono mb-3 block">
                    {point.number}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link to About Page */}
          <div className="flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-900 hover:text-brand-green-600 bg-white border border-slate-200 hover:border-brand-green-500/50 px-6 py-3.5 rounded-xl shadow-sm transition-all"
            >
              <span>Explore Our Company & Leadership</span>
              <ArrowRight className="w-4 h-4 text-brand-green-500" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Verified Benchmarks & Metrics (Dark Compact Section) */}
      <section className="py-14 sm:py-16 bg-brand-navy-950 text-white border-y border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-brand-navy-800/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300">
              <ShieldCheck className="w-4 h-4 text-brand-green-400" />
              <span>Verified Operational Benchmarks</span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline-block">Ready for commercial scale</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VERIFIED_STATISTICS.map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-brand-green-400 font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {stat.metric}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Solutions Teaser Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="editorial-tag-navy mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-700" />
                <span>Manufacturing Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight">
                Solutions built around your product.
              </h2>
            </div>
            <Link
              to="/solutions"
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue-700 hover:text-brand-green-600 inline-flex items-center gap-1.5"
            >
              <span>View All 5 Solutions</span>
              <ArrowRight className="w-4 h-4 text-brand-green-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_DATA.slice(0, 3).map((sol) => (
              <div key={sol.id} className="rounded-2xl border border-slate-200 overflow-hidden bg-brand-light flex flex-col justify-between group hover:border-brand-green-500/40 hover:shadow-card-hover transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-brand-navy-900/80 px-2 py-0.5 rounded">
                    {sol.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy-900 mb-2">{sol.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{sol.shortDescription}</p>
                  </div>
                  <Link
                    to="/solutions"
                    className="text-xs font-bold text-brand-blue-700 hover:text-brand-green-600 inline-flex items-center gap-1 mt-2"
                  >
                    <span>Explore solution details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Custom Manufacturing Spotlight Callout */}
      <section className="py-16 sm:py-20 bg-brand-navy-950 text-white relative overflow-hidden border-y border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 rounded-3xl p-8 sm:p-12 border border-brand-navy-700/80 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Manufacturing Capability</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tightest text-white leading-tight mb-4">
                Your Product. Your Requirements. Our Manufacturing Expertise.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Use our interactive 3-step configurator to define your product category, dosage form, and requirement type for immediate technical scoping.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="px-3 py-1 rounded-full bg-brand-navy-950 border border-brand-navy-750">Tablets & Capsules</span>
                <span className="px-3 py-1 rounded-full bg-brand-navy-950 border border-brand-navy-750">Oral Liquids & Dry Syrups</span>
                <span className="px-3 py-1 rounded-full bg-brand-navy-950 border border-brand-navy-750">Topicals & Softgels</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
              <Link
                to="/custom-manufacturing"
                className="px-8 py-4 rounded-xl text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green transition-all"
              >
                Launch Requirement Configurator →
              </Link>
              <button
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : null}
                className="px-6 py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-slate-300 bg-brand-navy-950 hover:bg-brand-navy-800 border border-brand-navy-700 transition-colors"
              >
                Direct Quote Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Dosage Forms Preview */}
      <section className="py-16 sm:py-20 bg-brand-light text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="editorial-tag-navy mb-2">
                <Layers className="w-3.5 h-3.5 text-brand-navy-900" />
                <span>Formulation Delivery Forms</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-900">
                8 Specialized Dosage Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue-700 hover:text-brand-green-600 inline-flex items-center gap-1"
            >
              <span>Explore Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to="/products"
                className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-green-500 hover:shadow-card-hover transition-all group"
              >
                <div className="h-28 rounded-lg overflow-hidden mb-3 bg-slate-100">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {cat.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Quick Contact CTA Strip */}
      <section className="py-16 bg-brand-navy-900 text-white border-t border-brand-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Ready to discuss your manufacturing requirement?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Connect directly with our technical formulation team for rapid feasibility review and turnaround within 24 business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green transition-all"
            >
              Go to Contact & Quote Form →
            </Link>
            <Link
              to="/quality"
              className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 bg-brand-navy-950 hover:bg-brand-navy-800 border border-brand-navy-700 transition-all"
            >
              Inspect Quality & Infrastructure
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

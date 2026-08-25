import React from 'react';
import { PRODUCT_CATEGORIES } from '../../data/productsData';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <div className="mb-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="editorial-tag-navy mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-900" />
            <span>Dosage Form Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight">
            Formulations across multiple dosage forms.
          </h2>
        </div>
        <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
          Engineered for bio-equivalence, active ingredient stability, and consistent release across all major delivery systems.
        </p>
      </div>

      {/* 8 Dosage Form Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCT_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => {
              if (onSelectCategory) onSelectCategory(cat.title);
              scrollToSection('product-explorer');
            }}
            className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-green-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image with subtle zoom on hover */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-white bg-brand-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors">
                    {cat.title}
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-brand-green-500 group-hover:text-brand-navy-950 flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-navy-950" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {cat.description}
                </p>

                {/* Sub-types tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.types.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                  {cat.types.length > 2 && (
                    <span className="text-[10px] font-medium text-brand-blue-700 bg-brand-blue-50 px-1.5 py-0.5 rounded">
                      +{cat.types.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-5 py-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>View catalog items</span>
              <span className="text-brand-green-600 font-semibold group-hover:translate-x-1 transition-transform">Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

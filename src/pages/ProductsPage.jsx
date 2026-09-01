import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CategoryGrid from '../components/products/CategoryGrid';
import ProductExplorer from '../components/products/ProductExplorer';
import { Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductsPage() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState(null);
  const navigate = useNavigate();

  const handleCategorySelect = (categoryTitle) => {
    setActiveCategoryFilter(categoryTitle);
  };

  const handleClearCategoryFilter = () => {
    setActiveCategoryFilter(null);
  };

  const handleEnquireProduct = (productInfo) => {
    navigate('/contact', {
      state: {
        productName: productInfo.productName,
        productCategory: productInfo.productCategory,
        dosageForm: productInfo.dosageForm,
        strength: productInfo.strength,
        message: `Inquiry regarding ${productInfo.productName} (${productInfo.strength || ''}) in ${productInfo.dosageForm} form. Please provide minimum order quantities, packaging options, and turnaround time.`
      }
    });
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#17A673_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Products & Dosage Delivery</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-tight mb-6">
              Formulation Spectrum Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
                Multiple Dosage Systems.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              Explore our reference formulations and manufacturing capabilities covering solid oral dosages, liquid syrups, dry reconstitutable powders, topical formulations, and specialized softgels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Categories & Searchable Explorer */}
      <section className="py-16 sm:py-20 bg-brand-light text-brand-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryGrid onSelectCategory={handleCategorySelect} />
          
          <ProductExplorer
            onEnquireProduct={handleEnquireProduct}
            selectedCategoryFilter={activeCategoryFilter}
            onClearCategoryFilter={handleClearCategoryFilter}
          />
        </div>
      </section>

      {/* Custom Molecule Request Banner */}
      <section className="py-14 bg-white text-brand-text border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-900 mb-1">
              Looking for a molecule or combination not listed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We specialize in custom formulation. We can formulate and manufacture to your precise monograph and therapeutic specifications.
            </p>
          </div>

          <Link
            to="/custom-manufacturing"
            className="px-6 py-3.5 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-850 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Custom Manufacturing Inquiry →
          </Link>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { SAMPLE_PRODUCTS } from '../../data/productsData';
import { Search, Filter, ArrowRight, ShieldAlert, Sparkles, X } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function ProductExplorer({ onEnquireProduct, selectedCategoryFilter, onClearCategoryFilter }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryFilter || 'All');
  const [selectedDosage, setSelectedDosage] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // Categories list
  const categories = ['All', 'Tablets', 'Capsules', 'Oral Liquids', 'Dry Syrups', 'Topical Formulations', 'Softgels', 'Nutraceuticals'];
  const dosageForms = ['All', 'Tablet', 'Capsule', 'Syrup', 'Dry Syrup', 'Gel', 'Softgel', 'Effervescent Tablet'];
  const productTypes = ['All', 'Pharmaceutical', 'Nutraceutical', 'Cosmetic / Derma'];

  // Update selectedCategory if passed from parent
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      // Map category title to short filter name if needed
      const match = categories.find(c => selectedCategoryFilter.toLowerCase().includes(c.toLowerCase()));
      if (match) setSelectedCategory(match);
      else setSelectedCategory('All');
    }
  }, [selectedCategoryFilter]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.strength.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || product.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesDosage = selectedDosage === 'All' || product.dosageForm.toLowerCase() === selectedDosage.toLowerCase();
      const matchesType = selectedType === 'All' || product.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesCategory && matchesDosage && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedDosage, selectedType]);

  const handleEnquire = (product) => {
    if (onEnquireProduct) {
      onEnquireProduct({
        productName: product.name,
        productCategory: product.category,
        dosageForm: product.dosageForm,
        strength: product.strength
      });
    } else {
      scrollToSection('contact');
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDosage('All');
    setSelectedType('All');
    if (onClearCategoryFilter) onClearCategoryFilter();
  };

  return (
    <div id="product-explorer" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
      
      {/* Explorer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100">
        <div>
          <div className="editorial-tag-navy mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-600" />
            <span>Formulation Catalog Explorer</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-900 tracking-tight">
            Searchable Product Directory
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Filter our standard & custom manufacturing reference formulations.
          </p>
        </div>

        {/* Informational verified indicator */}
        <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl flex items-center gap-2 max-w-sm">
          <ShieldAlert className="w-4 h-4 text-brand-blue-700 shrink-0" />
          <span>Representative catalog structure. Readily editable and adaptable to proprietary client master lists.</span>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="space-y-4 mb-8">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by active molecule, strength, or indication..."
            className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500/50 focus:border-brand-green-500 transition-all bg-slate-50/50 hover:bg-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-500/30"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>
              ))}
            </select>
          </div>

          {/* Dosage Form Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Dosage Form
            </label>
            <select
              value={selectedDosage}
              onChange={(e) => setSelectedDosage(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-500/30"
            >
              {dosageForms.map((d) => (
                <option key={d} value={d}>{d === 'All' ? 'All Dosage Forms' : d}</option>
              ))}
            </select>
          </div>

          {/* Product Type Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Product Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-500/30"
            >
              {productTypes.map((t) => (
                <option key={t} value={t}>{t === 'All' ? 'All Product Types' : t}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Active Filters Summary & Reset */}
        {(selectedCategory !== 'All' || selectedDosage !== 'All' || selectedType !== 'All' || searchQuery) && (
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">
              Showing <strong className="text-slate-800">{filteredProducts.length}</strong> matching formulations
            </span>
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-brand-green-600 hover:text-brand-green-700 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Product Results Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/40 p-5 flex flex-col justify-between hover:border-brand-green-500/40 hover:bg-white hover:shadow-card-hover transition-all duration-200 group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {product.id}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-700 bg-brand-blue-50 px-2 py-0.5 rounded">
                    {product.type}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-base font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors mb-2">
                  {product.name}
                </h4>

                {/* Specifications List */}
                <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-white p-3 rounded-xl border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Strength:</span>
                    <span className="font-semibold text-slate-800">{product.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Release:</span>
                    <span className="font-semibold text-slate-800">{product.releaseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Packaging:</span>
                    <span className="font-semibold text-slate-800 text-right truncate max-w-[150px]">{product.packaging}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                  {product.description}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => handleEnquire(product)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy-900 bg-white group-hover:bg-brand-green-500 group-hover:text-brand-navy-950 border border-slate-200 group-hover:border-brand-green-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Enquire About Product</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-slate-600 font-semibold text-base mb-2">
            No specific formulation found matching your search.
          </p>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-6">
            We specialize in customized formulation. If your target molecule is not listed, we can develop and manufacture it according to your exact requirements.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-xl bg-brand-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-800 transition-colors"
          >
            Submit Custom Formulation Request →
          </button>
        </div>
      )}

    </div>
  );
}

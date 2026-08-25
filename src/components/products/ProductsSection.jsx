import React, { useState } from 'react';
import CategoryGrid from './CategoryGrid';
import ProductExplorer from './ProductExplorer';

export default function ProductsSection({ onEnquireProduct }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState(null);

  const handleCategorySelect = (categoryTitle) => {
    setActiveCategoryFilter(categoryTitle);
  };

  const handleClearCategoryFilter = () => {
    setActiveCategoryFilter(null);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-brand-light text-brand-text border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryGrid onSelectCategory={handleCategorySelect} />
        <ProductExplorer
          onEnquireProduct={onEnquireProduct}
          selectedCategoryFilter={activeCategoryFilter}
          onClearCategoryFilter={handleClearCategoryFilter}
        />
      </div>
    </section>
  );
}

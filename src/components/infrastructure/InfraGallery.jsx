import React, { useState } from 'react';
import { INFRASTRUCTURE_MODULES } from '../../data/infrastructureData';
import { Maximize2, Building2, Layers, CheckCircle2 } from 'lucide-react';
import LightboxModal from '../common/LightboxModal';

export default function InfraGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (item) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleNavigateLightbox = (direction) => {
    if (!selectedItem) return;
    const currentIndex = INFRASTRUCTURE_MODULES.findIndex(i => i.id === selectedItem.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = INFRASTRUCTURE_MODULES.length - 1;
    if (nextIndex >= INFRASTRUCTURE_MODULES.length) nextIndex = 0;
    setSelectedItem(INFRASTRUCTURE_MODULES[nextIndex]);
  };

  return (
    <section id="infrastructure" className="py-20 lg:py-28 bg-brand-light text-brand-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="editorial-tag-navy mb-4">
              <Building2 className="w-3.5 h-3.5 text-brand-navy-900" />
              <span>Modern Infrastructure</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-brand-navy-900 leading-tight">
              Built for disciplined manufacturing.
            </h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Engineered around unidirectional workflows, classified environmental air handling, and high-precision pharmaceutical machinery.
          </p>
        </div>

        {/* ASYMMETRICAL EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Item 1: Production (Large - 8 Cols) */}
          <div
            onClick={() => handleOpenLightbox(INFRASTRUCTURE_MODULES[0])}
            className="md:col-span-8 group relative rounded-3xl overflow-hidden shadow-md cursor-pointer bg-brand-navy-950 min-h-[380px] lg:min-h-[420px] border border-slate-200"
          >
            <img
              src={INFRASTRUCTURE_MODULES[0].image}
              alt={INFRASTRUCTURE_MODULES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent" />
            
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-navy-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green-400 mb-1 block">
                {INFRASTRUCTURE_MODULES[0].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {INFRASTRUCTURE_MODULES[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-xl">
                {INFRASTRUCTURE_MODULES[0].description}
              </p>
            </div>
          </div>

          {/* Item 2: Quality Control (Medium - 4 Cols) */}
          <div
            onClick={() => handleOpenLightbox(INFRASTRUCTURE_MODULES[1])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden shadow-md cursor-pointer bg-brand-navy-950 min-h-[380px] lg:min-h-[420px] border border-slate-200"
          >
            <img
              src={INFRASTRUCTURE_MODULES[1].image}
              alt={INFRASTRUCTURE_MODULES[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent" />
            
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-navy-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green-400 mb-1 block">
                {INFRASTRUCTURE_MODULES[1].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {INFRASTRUCTURE_MODULES[1].title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2">
                {INFRASTRUCTURE_MODULES[1].subtitle}
              </p>
            </div>
          </div>

          {/* Item 3: Packaging (Medium - 4 Cols) */}
          <div
            onClick={() => handleOpenLightbox(INFRASTRUCTURE_MODULES[2])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden shadow-md cursor-pointer bg-brand-navy-950 min-h-[320px] border border-slate-200"
          >
            <img
              src={INFRASTRUCTURE_MODULES[2].image}
              alt={INFRASTRUCTURE_MODULES[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent" />

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-navy-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green-400 mb-1 block">
                {INFRASTRUCTURE_MODULES[2].category}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                {INFRASTRUCTURE_MODULES[2].title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2">
                {INFRASTRUCTURE_MODULES[2].subtitle}
              </p>
            </div>
          </div>

          {/* Item 4: Storage (Small - 4 Cols) */}
          <div
            onClick={() => handleOpenLightbox(INFRASTRUCTURE_MODULES[3])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden shadow-md cursor-pointer bg-brand-navy-950 min-h-[320px] border border-slate-200"
          >
            <img
              src={INFRASTRUCTURE_MODULES[3].image}
              alt={INFRASTRUCTURE_MODULES[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent" />

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-navy-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green-400 mb-1 block">
                {INFRASTRUCTURE_MODULES[3].category}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                {INFRASTRUCTURE_MODULES[3].title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2">
                {INFRASTRUCTURE_MODULES[3].subtitle}
              </p>
            </div>
          </div>

          {/* Item 5: R&D (Large - 4 Cols) */}
          <div
            onClick={() => handleOpenLightbox(INFRASTRUCTURE_MODULES[4])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden shadow-md cursor-pointer bg-brand-navy-950 min-h-[320px] border border-slate-200"
          >
            <img
              src={INFRASTRUCTURE_MODULES[4].image}
              alt={INFRASTRUCTURE_MODULES[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent" />

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-navy-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-green-400 mb-1 block">
                {INFRASTRUCTURE_MODULES[4].category}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                {INFRASTRUCTURE_MODULES[4].title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2">
                {INFRASTRUCTURE_MODULES[4].subtitle}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        item={selectedItem}
        items={INFRASTRUCTURE_MODULES}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
}

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LightboxModal({ isOpen, item, items, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-8 bg-brand-navy-950/95 backdrop-blur-xl animate-fade-in">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox Container */}
      <div className="relative z-10 max-w-5xl w-full bg-brand-navy-900 rounded-2xl sm:rounded-3xl border border-brand-navy-700 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-brand-navy-800 bg-brand-navy-950">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-brand-green-400 bg-brand-navy-900 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-brand-green-500/30">
              FACILITY {currentIndex + 1} / {items.length}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold truncate max-w-[140px] sm:max-w-none">
              {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-slate-400 hover:text-white hover:bg-brand-navy-800 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image & Detail Body */}
        <div className="overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Main Visual */}
          <div className="lg:col-span-7 relative min-h-[220px] sm:min-h-[300px] lg:min-h-[440px] bg-black flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover max-h-[400px] lg:max-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-brand-navy-900 border-t lg:border-t-0 lg:border-l border-brand-navy-800">
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-green-400 mb-1">
                {item.subtitle}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
                {item.description}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-2 pt-3 sm:pt-4 border-t border-brand-navy-800">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  Infrastructure Specifications
                </div>
                {item.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls in Footer */}
            <div className="flex items-center justify-between pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-brand-navy-800">
              <button
                onClick={() => onNavigate(-1)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-brand-navy-950 hover:bg-brand-navy-800 border border-brand-navy-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={() => onNavigate(1)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-brand-navy-950 hover:bg-brand-navy-800 border border-brand-navy-800 transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

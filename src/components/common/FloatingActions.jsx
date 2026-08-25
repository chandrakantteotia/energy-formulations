import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/companyData';
import { scrollToSection } from '../../utils/helpers';

export default function FloatingActions({ onOpenQuoteModal }) {
  const [showDesktopFloat, setShowDesktopFloat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDesktopFloat(true);
      } else {
        setShowDesktopFloat(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    if (onOpenQuoteModal) onOpenQuoteModal();
    else scrollToSection('contact');
  };

  return (
    <>
      {/* DESKTOP FLOATING QUICK ACTION (Fixed Right) */}
      {showDesktopFloat && (
        <div className="hidden lg:flex fixed right-6 bottom-8 z-40 flex-col items-end gap-3 animate-fade-in">
          <button
            onClick={handleQuoteClick}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-brand-navy-900/95 hover:bg-brand-navy-850 text-white border border-brand-green-500/40 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-brand-green-500 shadow-glow-green"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Request Quote
            </span>
            <div className="w-6 h-6 rounded-full bg-brand-green-500 text-brand-navy-950 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      )}

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy-950/95 border-t border-brand-navy-800 backdrop-blur-lg px-4 py-2.5 shadow-2xl flex items-center justify-around gap-2">
        {/* Call */}
        <a
          href={`tel:${BRAND_CONFIG.contact.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 rounded-lg bg-brand-navy-900 border border-brand-navy-800 text-slate-300 active:bg-brand-navy-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-blue-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BRAND_CONFIG.contact.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 rounded-lg bg-brand-navy-900 border border-brand-navy-800 text-slate-300 active:bg-brand-navy-800 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-brand-green-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Request Quote */}
        <button
          onClick={handleQuoteClick}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-brand-green-500 text-brand-navy-950 font-bold active:bg-brand-green-400 shadow-glow-green"
        >
          <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
          <span className="text-[11px] uppercase tracking-wider font-extrabold">Quote</span>
        </button>
      </div>
    </>
  );
}

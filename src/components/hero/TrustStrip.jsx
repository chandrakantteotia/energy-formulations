import React from 'react';
import { TRUST_STRIP_ITEMS } from '../../data/companyData';

export default function TrustStrip() {
  return (
    <div className="bg-brand-navy-900 border-y border-brand-navy-800/80 py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-center sm:text-left">
          
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500" />
            <span>INTEGRATED PHARMA CAPABILITIES</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 mx-auto sm:mx-0">
            {TRUST_STRIP_ITEMS.map((item, index) => (
              <React.Fragment key={item.id}>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 hover:text-brand-green-400 transition-colors uppercase">
                  {item.label}
                </span>
                {index < TRUST_STRIP_ITEMS.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-brand-green-500/50 hidden sm:inline-block" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

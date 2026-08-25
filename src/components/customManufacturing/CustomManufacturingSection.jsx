import React from 'react';
import CustomMfgHero from './CustomMfgHero';
import MfgConfigurator from './MfgConfigurator';
import ProcessFlow from './ProcessFlow';

export default function CustomManufacturingSection({ onConfigureRequirement }) {
  return (
    <section id="custom-manufacturing" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden border-t border-brand-navy-800">
      {/* Ambient background styling */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <CustomMfgHero />
        <MfgConfigurator onConfigureRequirement={onConfigureRequirement} />
        <ProcessFlow />
      </div>
    </section>
  );
}

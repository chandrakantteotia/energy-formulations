import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CustomMfgHero from '../components/customManufacturing/CustomMfgHero';
import MfgConfigurator from '../components/customManufacturing/MfgConfigurator';
import ProcessFlow from '../components/customManufacturing/ProcessFlow';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CustomMfgPage() {
  const navigate = useNavigate();

  const handleConfigureRequirement = (configData) => {
    navigate('/contact', {
      state: {
        productCategory: configData.productCategory,
        dosageForm: configData.dosageForm,
        requirementType: configData.requirementType,
        message: `Custom manufacturing inquiry for ${configData.productCategory} in ${configData.dosageForm} dosage form (${configData.requirementType}). Please provide technical feasibility and batch options.`
      }
    });
  };

  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Custom Mfg Hero */}
          <CustomMfgHero />

          {/* Interactive Configurator */}
          <MfgConfigurator onConfigureRequirement={handleConfigureRequirement} />

          {/* 6-Step Process Flow */}
          <ProcessFlow />
        </div>
      </section>

      {/* R&D & Formulation Consultation Strip */}
      <section className="py-14 bg-brand-light text-brand-text border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-green-600 mb-1">
              R&D Support Available
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-900">
              Need formulation development before manufacturing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our formulation scientists assist in excipient compatibility, taste masking, and pilot stability.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/quality"
              className="px-5 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-white transition-colors"
            >
              View R&D Labs
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-navy-900 hover:bg-brand-navy-850 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Talk to R&D Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

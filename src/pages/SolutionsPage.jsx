import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SolutionsPanels from '../components/solutions/SolutionsPanels';
import InsideTheProcess from '../components/process/InsideTheProcess';
import { Layers, ArrowRight, Sparkles } from 'lucide-react';

export default function SolutionsPage() {
  const navigate = useNavigate();

  const handleSelectSolutionForQuote = (solutionTitle) => {
    navigate('/contact', {
      state: {
        requirementType: 'Custom Solution',
        message: `Inquiry regarding ${solutionTitle}. Please provide detailed capabilities, batch options, and lead times.`
      }
    });
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#17A673_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Pharmaceutical Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-tight mb-6">
              Solutions Engineered Around{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
                Your Formulation Goals.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              From full turnkey contract manufacturing and custom formulation science to private labeling and high-barrier packaging, we adapt our capacity to your commercial roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Interactive Solution Panels */}
      <SolutionsPanels onSelectSolutionForQuote={handleSelectSolutionForQuote} />

      {/* Inside The Process - 6-Stage Manufacturing Journey */}
      <InsideTheProcess />

      {/* Bottom CTA */}
      <section className="py-14 bg-brand-light text-brand-text border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-900 mb-3">
            Looking for tailored custom manufacturing?
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
            Configure your target product category, dosage form, and requirement in our interactive configurator.
          </p>
          <Link
            to="/custom-manufacturing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green transition-all"
          >
            <span>Go to Custom Manufacturing Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

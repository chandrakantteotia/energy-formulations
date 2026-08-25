import React, { useState } from 'react';
import { Check, ArrowRight, Sliders, CheckCircle2, RotateCcw } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';

export default function MfgConfigurator({ onConfigureRequirement }) {
  const [category, setCategory] = useState('Pharmaceutical');
  const [dosageForm, setDosageForm] = useState('Tablets');
  const [requirement, setRequirement] = useState('Contract Manufacturing');

  const categories = ['Pharmaceutical', 'Nutraceutical', 'Cosmetic / Derma', 'Other'];
  
  const dosageForms = [
    'Tablets',
    'Capsules',
    'Syrup',
    'Dry Syrup',
    'Cream',
    'Gel',
    'Ointment',
    'Softgel',
    'Other'
  ];

  const requirements = [
    'New Product',
    'Existing Product',
    'Private Label',
    'Contract Manufacturing',
    'Custom Formulation'
  ];

  const handleFinalize = () => {
    const configData = {
      productCategory: category,
      dosageForm: dosageForm,
      requirementType: requirement
    };

    if (onConfigureRequirement) {
      onConfigureRequirement(configData);
    } else {
      scrollToSection('contact');
    }
  };

  const handleReset = () => {
    setCategory('Pharmaceutical');
    setDosageForm('Tablets');
    setRequirement('Contract Manufacturing');
  };

  return (
    <div className="bg-brand-navy-900/90 rounded-3xl border border-brand-navy-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden mb-20">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-brand-navy-800">
        <div>
          <div className="flex items-center gap-2 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-1.5">
            <Sliders className="w-4 h-4" />
            <span>Interactive Requirement Configurator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tell us what you're looking to manufacture.
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-brand-navy-750 hover:bg-brand-navy-800 transition-colors w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Selections</span>
        </button>
      </div>

      <div className="space-y-10">
        
        {/* STEP 01: Product Category */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-brand-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Select Product Category
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const isSelected = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`p-4 rounded-xl text-left border text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-green-500/20 border-brand-green-500 text-white shadow-glow-green font-bold'
                      : 'bg-brand-navy-950/60 border-brand-navy-700/60 text-slate-300 hover:border-slate-500 hover:bg-brand-navy-850'
                  }`}
                >
                  <span>{cat}</span>
                  {isSelected && <Check className="w-4 h-4 text-brand-green-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 02: Dosage Form */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-brand-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Select Target Dosage Form
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {dosageForms.map((df) => {
              const isSelected = dosageForm === df;
              return (
                <button
                  key={df}
                  onClick={() => setDosageForm(df)}
                  className={`p-3.5 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-green-500/20 border-brand-green-500 text-white shadow-glow-green font-bold'
                      : 'bg-brand-navy-950/60 border-brand-navy-700/60 text-slate-300 hover:border-slate-500 hover:bg-brand-navy-850'
                  }`}
                >
                  <span>{df}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-brand-green-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 03: Requirement Type */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-brand-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">
              03
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Select Requirement & Engagement Type
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {requirements.map((req) => {
              const isSelected = requirement === req;
              return (
                <button
                  key={req}
                  onClick={() => setRequirement(req)}
                  className={`p-3.5 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-green-500/20 border-brand-green-500 text-white shadow-glow-green font-bold'
                      : 'bg-brand-navy-950/60 border-brand-navy-700/60 text-slate-300 hover:border-slate-500 hover:bg-brand-navy-850'
                  }`}
                >
                  <span>{req}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-brand-green-400" />}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Selected Summary & Action Strip */}
      <div className="mt-10 pt-8 border-t border-brand-navy-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 bg-brand-navy-950/70 p-6 rounded-2xl border border-brand-navy-800">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="text-slate-400 font-medium">Your Configuration:</span>
          <span className="px-3 py-1 rounded-md bg-brand-blue-700/40 text-brand-blue-100 border border-brand-blue-500/40 font-semibold">
            {category}
          </span>
          <span className="text-slate-500 font-mono">+</span>
          <span className="px-3 py-1 rounded-md bg-brand-blue-700/40 text-brand-blue-100 border border-brand-blue-500/40 font-semibold">
            {dosageForm}
          </span>
          <span className="text-slate-500 font-mono">+</span>
          <span className="px-3 py-1 rounded-md bg-brand-green-500/20 text-brand-green-400 border border-brand-green-500/40 font-semibold">
            {requirement}
          </span>
        </div>

        <button
          onClick={handleFinalize}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green hover:shadow-xl transition-all duration-300 shrink-0 group"
        >
          <span>Let's discuss your requirement</span>
          <ArrowRight className="w-4 h-4 text-brand-navy-950 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}

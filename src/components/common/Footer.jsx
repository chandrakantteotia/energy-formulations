import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_CONFIG } from '../../data/companyData';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-navy-950 text-white border-t border-brand-navy-800/80 pt-16 sm:pt-20 pb-28 lg:pb-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Big Callout Banner */}
        <div className="pb-12 sm:pb-16 border-b border-brand-navy-850 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-400 mb-2 block">
              PARTNERSHIP COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-white">
              Let's build better formulations together.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green transition-all duration-300 w-fit shrink-0 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-brand-navy-950 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Info & Identity (Col 1 - 2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue-700 to-brand-navy-800 border border-brand-green-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-green-500" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L4 14H11L10 22L20 10H13L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">ENERGY</span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-green-400 uppercase leading-tight mt-0.5">FORMULATIONS</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Energy Formulations provides formulation and manufacturing solutions designed around quality, consistency and the evolving requirements of healthcare businesses.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">Positioning:</span> Precision in Formulation. Confidence in Every Partnership.
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-brand-green-400 transition-colors">
                  About Energy Formulations
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-brand-green-400 transition-colors">
                  Manufacturing Capabilities
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-brand-green-400 transition-colors">
                  Quality Assurance & SOPs
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-brand-green-400 transition-colors">
                  Facility Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-green-400 transition-colors">
                  Technical FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/custom-manufacturing" className="text-brand-green-400 font-semibold hover:underline flex items-center gap-1">
                  <span>Custom Manufacturing</span>
                  <span className="text-[9px] bg-brand-green-500/20 px-1.5 py-0.5 rounded border border-brand-green-500/30">Hub</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-brand-green-400 transition-colors">
                  Contract Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-brand-green-400 transition-colors">
                  Product Development & R&D
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-brand-green-400 transition-colors">
                  Private Label Supply
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-green-400 transition-colors">
                  Dosage Form Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
              Contact & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-green-400 shrink-0" />
                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-green-400 shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-green-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.contact.address.city}, {BRAND_CONFIG.contact.address.country}</span>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="text-brand-green-400 hover:underline font-semibold flex items-center gap-1">
                  <span>Open Contact Form →</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bottom Strip */}
        <div className="pt-8 border-t border-brand-navy-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {BRAND_CONFIG.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Supply</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Regulatory Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

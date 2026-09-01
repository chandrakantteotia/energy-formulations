import React from 'react';
import { useLocation } from 'react-router-dom';
import ContactExperience from '../components/contact/ContactExperience';
import FAQSection from '../components/partnership/FAQSection';
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const location = useLocation();
  const prefillData = location.state || null;

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-16 sm:py-24 bg-brand-navy-950 text-white relative overflow-hidden border-b border-brand-navy-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#17A673_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue-700/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact & Inquiries</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-white leading-tight mb-6">
              Let's Discuss Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-brand-light to-brand-green-400">
                Next Formulation.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              Connect directly with our business development and pharmaceutical formulation team. We respond to all commercial and technical inquiries within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Contact Experience with Form & Validation */}
      <ContactExperience prefillData={prefillData} />

      {/* Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}

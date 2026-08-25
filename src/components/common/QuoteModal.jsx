import React, { useState, useEffect } from 'react';
import { X, Send, Check, Sparkles } from 'lucide-react';
import { validateEmail, validatePhone } from '../../utils/helpers';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    productCategory: 'Pharmaceutical',
    dosageForm: 'Tablets',
    requirementType: 'Contract Manufacturing',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        productCategory: initialData.productCategory || prev.productCategory,
        dosageForm: initialData.dosageForm || prev.dosageForm,
        requirementType: initialData.requirementType || prev.requirementType,
        message: initialData.productName 
          ? `Inquiry regarding ${initialData.productName}.`
          : prev.message
      }));
    }
  }, [initialData]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.businessEmail.trim() || !validateEmail(formData.businessEmail)) {
      newErrors.businessEmail = 'Valid business email is required';
    }
    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-950/90 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-brand-navy-900 rounded-3xl border border-brand-navy-700 max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-navy-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-green-400">
              Direct Quotation Request
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Request a Manufacturing Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-brand-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-brand-green-500/20 border border-brand-green-500 text-brand-green-400 flex items-center justify-center mx-auto shadow-glow-green">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-xl font-bold text-white">Quotation Request Received</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Our technical team will review your specifications and contact you within 24 business hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-brand-green-500 text-brand-navy-950 font-bold text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs text-white focus:outline-none focus:border-brand-green-500"
                />
                {errors.fullName && <p className="text-[10px] text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Apex Pharma Ltd"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs text-white focus:outline-none focus:border-brand-green-500"
                />
                {errors.companyName && <p className="text-[10px] text-red-400 mt-1">{errors.companyName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs text-white focus:outline-none focus:border-brand-green-500"
                />
                {errors.businessEmail && <p className="text-[10px] text-red-400 mt-1">{errors.businessEmail}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs text-white focus:outline-none focus:border-brand-green-500"
                />
                {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Category
                </label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-brand-navy-950 border border-brand-navy-750 text-xs text-white"
                >
                  <option value="Pharmaceutical">Pharmaceutical</option>
                  <option value="Nutraceutical">Nutraceutical</option>
                  <option value="Cosmetic / Derma">Cosmetic / Derma</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Dosage Form
                </label>
                <select
                  name="dosageForm"
                  value={formData.dosageForm}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-brand-navy-950 border border-brand-navy-750 text-xs text-white"
                >
                  <option value="Tablets">Tablets</option>
                  <option value="Capsules">Capsules</option>
                  <option value="Syrup">Syrup / Liquids</option>
                  <option value="Dry Syrup">Dry Syrup</option>
                  <option value="Topical Gel">Creams / Gels</option>
                  <option value="Softgel">Softgels</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Project Scope / Message
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention desired molecules, quantities, or packaging requirements..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs text-white focus:outline-none focus:border-brand-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-brand-green-500 hover:bg-brand-green-400 text-brand-navy-950 font-bold text-xs uppercase tracking-wider shadow-glow-green transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request →'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

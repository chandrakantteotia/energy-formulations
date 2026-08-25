import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../data/companyData';
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, Check } from 'lucide-react';
import { validateEmail, validatePhone } from '../../utils/helpers';

export default function ContactExperience({ prefillData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    productCategory: 'Pharmaceutical',
    dosageForm: 'Tablets',
    requirementType: 'Contract Manufacturing',
    estimatedQuantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled data from Configurator or Product Explorer
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        productCategory: prefillData.productCategory || prev.productCategory,
        dosageForm: prefillData.dosageForm || prev.dosageForm,
        requirementType: prefillData.requirementType || prev.requirementType,
        message: prefillData.productName 
          ? `Inquiry regarding ${prefillData.productName} (${prefillData.strength || ''}). Please share batch options and minimum order quantities.`
          : prev.message
      }));
    }
  }, [prefillData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name';
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

    // Simulate API turnaround
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phone: '',
      productCategory: 'Pharmaceutical',
      dosageForm: 'Tablets',
      requirementType: 'Contract Manufacturing',
      estimatedQuantity: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden border-t border-brand-navy-800">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-brand-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Details & Turnaround */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/15 border border-brand-green-500/30 text-brand-green-400 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a Partnership</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-white leading-[1.15] mb-4 sm:mb-6">
                Let's talk about your next product.
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-6 sm:mb-10">
                Whether you need contract manufacturing scale, custom formulation development, or high-barrier packaging, our team is ready to evaluate your technical scope.
              </p>

              {/* Direct Channels List */}
              <div className="space-y-4 sm:space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-navy-900 border border-brand-navy-750 text-brand-green-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">Direct Inquiries</div>
                    <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="text-sm sm:text-base font-bold text-white hover:text-brand-green-400 transition-colors">
                      {BRAND_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-navy-900 border border-brand-navy-750 text-brand-green-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">Business Development</div>
                    <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="text-sm sm:text-base font-bold text-white hover:text-brand-green-400 transition-colors break-all">
                      {BRAND_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-navy-900 border border-brand-navy-750 text-brand-green-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">Facility Location</div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                      {BRAND_CONFIG.contact.address.street},<br />
                      {BRAND_CONFIG.contact.address.city}, {BRAND_CONFIG.contact.address.state} - {BRAND_CONFIG.contact.address.postalCode}, {BRAND_CONFIG.contact.address.country}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Turnaround Badge */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-brand-navy-900/90 border border-brand-navy-750 flex items-center gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">Response Guarantee:</span> {BRAND_CONFIG.contact.turnaround}.
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium High-Conversion Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-brand-navy-900 rounded-2xl sm:rounded-3xl border border-brand-navy-700/80 p-4 sm:p-8 lg:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                /* Celebration / Success Animation State */
                <div className="py-8 sm:py-12 text-center space-y-5 sm:space-y-6 animate-fade-in">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-green-500/20 border-2 border-brand-green-500 text-brand-green-400 flex items-center justify-center mx-auto shadow-glow-green">
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[3]" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                      Thank you. Your enquiry has been received.
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-md mx-auto">
                      Our pharmaceutical development and business team will review your specifications and contact you within 24 business hours.
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-brand-navy-950 border border-brand-navy-800 text-left max-w-md mx-auto text-xs text-slate-300 space-y-1">
                    <div><strong>Product Category:</strong> {formData.productCategory}</div>
                    <div><strong>Dosage Form:</strong> {formData.dosageForm}</div>
                    <div><strong>Engagement:</strong> {formData.requirementType}</div>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-brand-navy-800 hover:bg-brand-navy-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="pb-2 sm:pb-3 border-b border-brand-navy-800">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                      Manufacturing & Formulation Inquiry
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                      Fill in your product specifications to receive a technical scoping response.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-brand-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500/40' : 'border-brand-navy-750 focus:border-brand-green-500 focus:ring-brand-green-500/30'
                        }`}
                      />
                      {errors.fullName && <p className="text-[10px] sm:text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Therapeutics Ltd."
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-brand-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.companyName ? 'border-red-500 focus:ring-red-500/40' : 'border-brand-navy-750 focus:border-brand-green-500 focus:ring-brand-green-500/30'
                        }`}
                      />
                      {errors.companyName && <p className="text-[10px] sm:text-[11px] text-red-400 mt-1">{errors.companyName}</p>}
                    </div>
                  </div>

                  {/* Business Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="e.g. r.sharma@apexpharma.com"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-brand-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.businessEmail ? 'border-red-500 focus:ring-red-500/40' : 'border-brand-navy-750 focus:border-brand-green-500 focus:ring-brand-green-500/30'
                        }`}
                      />
                      {errors.businessEmail && <p className="text-[10px] sm:text-[11px] text-red-400 mt-1">{errors.businessEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-brand-navy-950 border text-xs sm:text-sm text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone ? 'border-red-500 focus:ring-red-500/40' : 'border-brand-navy-750 focus:border-brand-green-500 focus:ring-brand-green-500/30'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] sm:text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Category, Dosage Form & Requirement Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Category
                      </label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-brand-navy-950 border border-brand-navy-750 text-xs font-semibold text-white focus:outline-none focus:border-brand-green-500"
                      >
                        <option value="Pharmaceutical">Pharmaceutical</option>
                        <option value="Nutraceutical">Nutraceutical</option>
                        <option value="Cosmetic / Derma">Cosmetic / Derma</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Dosage Form
                      </label>
                      <select
                        name="dosageForm"
                        value={formData.dosageForm}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-brand-navy-950 border border-brand-navy-750 text-xs font-semibold text-white focus:outline-none focus:border-brand-green-500"
                      >
                        <option value="Tablets">Tablets</option>
                        <option value="Capsules">Capsules</option>
                        <option value="Syrup">Oral Liquid / Syrup</option>
                        <option value="Dry Syrup">Dry Syrup</option>
                        <option value="Cream">Cream / Ointment</option>
                        <option value="Gel">Topical Gel</option>
                        <option value="Softgel">Softgel</option>
                        <option value="Other">Other Dosage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Requirement
                      </label>
                      <select
                        name="requirementType"
                        value={formData.requirementType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-brand-navy-950 border border-brand-navy-750 text-xs font-semibold text-white focus:outline-none focus:border-brand-green-500"
                      >
                        <option value="Contract Manufacturing">Contract Mfg</option>
                        <option value="Custom Formulation">Custom Formulation</option>
                        <option value="Private Label">Private Label</option>
                        <option value="New Product">New Product</option>
                        <option value="Existing Product">Existing Product</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Estimated Batch Size / Annual Quantity (Optional)
                    </label>
                    <input
                      type="text"
                      name="estimatedQuantity"
                      value={formData.estimatedQuantity}
                      onChange={handleChange}
                      placeholder="e.g. 500,000 tablets / 10,000 bottles"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Technical Notes or Project Scope
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details on molecules, packaging requirements, target launch timeline, or specific analytical tolerances..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-750 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/30 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 hover:bg-brand-green-400 shadow-glow-green transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-brand-navy-950 border-t-transparent rounded-full animate-spin" />
                        <span>Validating & Submitting...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Manufacturing Enquiry</span>
                        <ArrowRight className="w-4 h-4 text-brand-navy-950 group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 pt-1">
                    🔒 Strictly confidential. Non-Disclosure Agreement (NDA) supported upon request.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

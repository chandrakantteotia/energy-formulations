import React, { useState } from 'react';
import Header from './components/common/Header';
import SplitHero from './components/hero/SplitHero';
import TrustStrip from './components/hero/TrustStrip';
import Difference from './components/about/Difference';
import VerifiedStats from './components/about/VerifiedStats';
import SolutionsPanels from './components/solutions/SolutionsPanels';
import CustomManufacturingSection from './components/customManufacturing/CustomManufacturingSection';
import ProductsSection from './components/products/ProductsSection';
import RnDSection from './components/rd/RnDSection';
import QualitySection from './components/quality/QualitySection';
import InfraGallery from './components/infrastructure/InfraGallery';
import InsideTheProcess from './components/process/InsideTheProcess';
import BusinessPartner from './components/partnership/BusinessPartner';
import Testimonials from './components/partnership/Testimonials';
import FAQSection from './components/partnership/FAQSection';
import ContactExperience from './components/contact/ContactExperience';
import Footer from './components/common/Footer';
import FloatingActions from './components/common/FloatingActions';
import QuoteModal from './components/common/QuoteModal';
import { scrollToSection } from './utils/helpers';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [contactPrefillData, setContactPrefillData] = useState(null);

  // Handle configuration from Custom Manufacturing Configurator
  const handleConfigureRequirement = (configData) => {
    setContactPrefillData(configData);
    scrollToSection('contact');
  };

  // Handle inquiry from Solutions section
  const handleSelectSolutionForQuote = (solutionTitle) => {
    setContactPrefillData({
      requirementType: 'Custom Solution',
      message: `Inquiry regarding ${solutionTitle}. Please provide detailed capabilities and feasibility.`
    });
    scrollToSection('contact');
  };

  // Handle inquiry from Product Explorer
  const handleEnquireProduct = (productInfo) => {
    setContactPrefillData(productInfo);
    scrollToSection('contact');
  };

  // Handle opening Fast Quote Modal
  const handleOpenQuoteModal = (initialData = null) => {
    setModalInitialData(initialData);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-text font-sans antialiased selection:bg-brand-green-500/20 selection:text-brand-navy-900">
      
      {/* Sticky Header with Scroll Threshold */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections adhering to strict Visual Rhythm */}
      <main>
        {/* 1. DARK: Cinematic Split Hero */}
        <SplitHero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. DARK RIBBON: Capability Trust Strip */}
        <TrustStrip />

        {/* 3. LIGHT: "The Energy Formulations Difference" Editorial Pillars */}
        <Difference />

        {/* 4. DARK: Verified Company Statistics */}
        <VerifiedStats />

        {/* 5. WHITE: Solutions Built Around Your Product (Expandable Panels / Mobile Accordion) */}
        <SolutionsPanels onSelectSolutionForQuote={handleSelectSolutionForQuote} />

        {/* 6. DARK: Custom Manufacturing Hub + 3-Step Configurator + 6-Step Process */}
        <CustomManufacturingSection onConfigureRequirement={handleConfigureRequirement} />

        {/* 7. LIGHT: Product Categories (8 Dosage Forms) & Searchable Product Explorer */}
        <ProductsSection onEnquireProduct={handleEnquireProduct} />

        {/* 8. IMAGE-HEAVY: Laboratory R&D & Development Journey */}
        <RnDSection />

        {/* 9. DARK: Quality Framework & Verified Compliance */}
        <QualitySection />

        {/* 10. LIGHT / ASYMMETRICAL GRID: Facility Infrastructure & Lightbox */}
        <InfraGallery />

        {/* 11. DARK: "Inside the Process" 6-Stage Manufacturing Journey */}
        <InsideTheProcess />

        {/* 12. LIGHT: Business Partnership & Client Ecosystem */}
        <BusinessPartner />

        {/* 13. WHITE: Verified Testimonial Placeholders */}
        <Testimonials />

        {/* 14. LIGHT: Technical FAQ Section */}
        <FAQSection />

        {/* 15. DARK: High-Conversion Contact Experience & Form Validation */}
        <ContactExperience prefillData={contactPrefillData} />
      </main>

      {/* 16. DARK: Editorial Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Action Triggers (Desktop + Mobile Sticky Bar) */}
      <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Fast Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={modalInitialData}
      />

    </div>
  );
}

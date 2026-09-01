import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingActions from './components/common/FloatingActions';
import QuoteModal from './components/common/QuoteModal';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import CustomMfgPage from './pages/CustomMfgPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);

  // Handle opening Fast Quote Modal
  const handleOpenQuoteModal = (initialData = null) => {
    setModalInitialData(initialData);
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-light text-brand-text font-sans antialiased selection:bg-brand-green-500/20 selection:text-brand-navy-900 flex flex-col justify-between">
        
        {/* Sticky Header with Navigation Links */}
        <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/custom-manufacturing" element={<CustomMfgPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Floating Actions (Quick quote & mobile bar) */}
        <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Fast Quotation Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialData={modalInitialData}
        />

      </div>
    </Router>
  );
}

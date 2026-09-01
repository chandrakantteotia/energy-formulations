import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { 
      label: 'Custom Manufacturing', 
      path: '/custom-manufacturing',
      isSpecial: true 
    },
    { label: 'Quality & Infra', path: '/quality' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy-900/95 backdrop-blur-md shadow-lg border-b border-brand-navy-800/80 py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-brand-navy-950/95 via-brand-navy-900/70 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-green-500/50 rounded-lg p-0.5"
          >
            {/* Scientific Minimal Logo Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-brand-blue-700 to-brand-navy-800 border border-brand-green-500/40 flex items-center justify-center shadow-inner group-hover:border-brand-green-500 transition-all shrink-0">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brand-green-500 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L4 14H11L10 22L20 10H13L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-white leading-none">
                ENERGY
              </span>
              <span className="text-[9px] sm:text-xs font-semibold tracking-widest text-brand-green-400 uppercase leading-tight mt-0.5">
                FORMULATIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Visible on lg+) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              if (item.isSpecial) {
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-brand-green-500 text-brand-navy-950 shadow-glow-green font-bold'
                          : 'bg-brand-green-500/15 text-brand-green-400 hover:bg-brand-green-500/25 border border-brand-green-500/30'
                      }`
                    }
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 group ${
                      isActive ? 'text-brand-green-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-brand-green-500 transition-all duration-300 ${
                          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : null}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-blue-700 to-brand-navy-800 hover:from-brand-blue-600 hover:to-brand-blue-700 border border-brand-blue-500/30 hover:border-brand-green-500/60 shadow-md hover:shadow-glow-green transition-all duration-300 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-green-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle & Fast Quote (Mobile & Tablet) */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : null}
              className="px-2.5 py-1.5 rounded-md text-[11px] font-bold text-brand-navy-950 bg-brand-green-500 active:bg-brand-green-400 shadow-sm"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-brand-navy-850 border border-brand-navy-700 focus:outline-none focus:ring-2 focus:ring-brand-green-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-brand-navy-950/98 border-b border-brand-navy-800 shadow-2xl backdrop-blur-2xl transition-all duration-300 animate-fade-in max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="px-4 py-5 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left py-3 px-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-between transition-colors ${
                    item.isSpecial
                      ? 'bg-brand-green-500/20 text-brand-green-400 border border-brand-green-500/40 font-bold'
                      : isActive
                      ? 'bg-brand-navy-800 text-brand-green-400 font-bold'
                      : 'text-slate-300 hover:bg-brand-navy-850 hover:text-white'
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-brand-green-400" />
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-brand-navy-800 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-brand-navy-950 bg-brand-green-500 shadow-glow-green active:bg-brand-green-400"
              >
                Request a Quote →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

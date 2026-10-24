import React, { useState, useEffect } from 'react';
import { ViziaLogo } from './ViziaLogo';
import { ArrowRight, Menu, X, Share2 } from 'lucide-react';

interface HeaderProps {
  onOpenContactModal?: () => void;
  onOpenShareModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal, onOpenShareModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tecnología', href: '#technology' },
    { label: 'Movilidad', href: '#mobility' },
    { label: 'Diferencial', href: '#differentiator' },
    { label: 'Capacidades', href: '#capabilities' },
    { label: 'Software', href: '#software' },
    { label: 'Soluciones', href: '#solutions' },
    { label: 'Visión', href: '#vision' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#0E2A43]/10 py-4 shadow-[0_1px_12px_rgba(14,42,67,0.03)]'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Isotype */}
          <a
            href="#"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB]"
            aria-label="VIZIA - Inicio"
          >
            <ViziaLogo size="sm" showSlogan={false} />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-[0.04em] text-[#0E2A43]/85"
            aria-label="Navegación principal"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#18C5BB] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#18C5BB] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {onOpenShareModal && (
              <button
                type="button"
                onClick={onOpenShareModal}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0E2A43] hover:text-[#18C5BB] transition-colors p-1.5 border border-[#0E2A43]/10 hover:border-[#18C5BB]"
                aria-label="Compartir y descargar"
                title="Compartir y Descargar"
              >
                <Share2 className="w-3.5 h-3.5 text-[#18C5BB]" />
                <span className="hidden md:inline">Compartir</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContactModal) {
                  e.preventDefault();
                  onOpenContactModal();
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#0E2A43] hover:text-[#18C5BB] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB]"
            >
              <span>Hablar con VIZIA</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#18C5BB]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0E2A43] hover:text-[#18C5BB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#0E2A43] text-white flex flex-col justify-between p-8 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <ViziaLogo variant="light" size="sm" showSlogan />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 my-auto text-xl font-light tracking-wide">
          {navLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#18C5BB] transition-colors flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-[#18C5BB] opacity-60 group-hover:opacity-100">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 space-y-3">
          {onOpenShareModal && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShareModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
            >
              <Share2 className="w-3.5 h-3.5 text-[#18C5BB]" />
              <span>Compartir y Descargar Recursos</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContactModal) onOpenContactModal();
            }}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#18C5BB] text-[#0E2A43] font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors"
          >
            <span>Hablar con VIZIA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

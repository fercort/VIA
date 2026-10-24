import React from 'react';
import { ViziaLogo } from './ViziaLogo';
import { Share2, Download } from 'lucide-react';

interface FooterProps {
  onOpenShareModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShareModal }) => {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white text-[#0E2A43]">
      <div className="max-w-[1520px] mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Identity Lockup */}
          <div className="md:col-span-5 space-y-4">
            <ViziaLogo size="md" showSlogan />
            <p className="text-xs font-light text-[#66737A] max-w-sm pt-2 leading-relaxed">
              Plataforma de visión artificial e inteligencia artificial aplicada al análisis de infraestructura vial, movilidad y operaciones del mundo físico.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#66737A]">
              <span>UBICACIÓN GENERAL: </span>
              <span className="text-[#0E2A43] font-medium">COLOMBIA</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div className="space-y-3">
              <span className="text-[10px] text-[#66737A] uppercase tracking-wider block font-semibold">
                TECNOLOGÍA
              </span>
              <ul className="space-y-2 text-[#0E2A43]">
                <li><a href="#technology" className="hover:text-[#18C5BB] transition-colors">Vision Pipeline</a></li>
                <li><a href="#mobility" className="hover:text-[#18C5BB] transition-colors">Clasificación C2-C6</a></li>
                <li><a href="#differentiator" className="hover:text-[#18C5BB] transition-colors">Análisis de Ejes</a></li>
                <li><a href="#capabilities" className="hover:text-[#18C5BB] transition-colors">Ficha Técnica System</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] text-[#66737A] uppercase tracking-wider block font-semibold">
                SOLUCIONES
              </span>
              <ul className="space-y-2 text-[#0E2A43]">
                <li><a href="#solutions" className="hover:text-[#18C5BB] transition-colors">Aforos de Movilidad</a></li>
                <li><a href="#software" className="hover:text-[#18C5BB] transition-colors">Consola Software</a></li>
                <li><a href="#solutions" className="hover:text-[#18C5BB] transition-colors">Inspección de Vías</a></li>
                <li><a href="#solutions" className="hover:text-[#18C5BB] transition-colors">Patios Industriales</a></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#66737A] uppercase tracking-wider block font-semibold">
                CONTACTO
              </span>
              <ul className="space-y-2 text-[#0E2A43]">
                <li>
                  <a
                    href="mailto:contacto@vizia.co"
                    className="hover:text-[#18C5BB] transition-colors font-medium text-[#18C5BB]"
                  >
                    contacto@vizia.co
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#18C5BB] transition-colors"
                  >
                    LinkedIn Corporativo ↗
                  </a>
                </li>
                <li>
                  <a href="#vision" className="hover:text-[#18C5BB] transition-colors">
                    Visión de VIZIA
                  </a>
                </li>
                {onOpenShareModal && (
                  <li>
                    <button
                      type="button"
                      onClick={onOpenShareModal}
                      className="text-left hover:text-[#18C5BB] transition-colors flex items-center gap-1.5 text-[#0E2A43] font-semibold"
                    >
                      <Share2 className="w-3 h-3 text-[#18C5BB]" />
                      <span>Compartir y Descargar ↗</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#0E2A43]/10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-[#66737A] gap-4">
          <p>© {new Date().getFullYear()} VIZIA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>De un píxel a una decisión.</span>
            <span>·</span>
            <span>Computer Vision & AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

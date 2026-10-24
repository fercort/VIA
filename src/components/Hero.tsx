import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroCorridorImg from '../assets/images/vizia_hero_corridor_1790314907261.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-16 bg-[#F7F8F7] overflow-hidden border-b border-[#0E2A43]/10">
      {/* Giant Faint Background Wordmark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[17vw] font-bold font-sans tracking-[-0.04em] text-[#0E2A43]/[0.025] leading-none uppercase">
          VIZIA
        </span>
      </div>

      <div className="max-w-[1520px] mx-auto w-full z-10 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Main Headline & Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-none bg-[#18C5BB] inline-block"></span>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
                Computer Vision & Applied AI
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light text-[#0E2A43] leading-[1.02] tracking-[-0.03em] max-w-4xl" style={{ textWrap: 'balance' }}>
              Vemos lo que ocurre.<br />
              <span className="font-normal text-[#143B56]">Entendemos lo que importa.</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-[#66737A] max-w-2xl leading-relaxed">
              Convertimos imágenes y video en información estructurada mediante visión artificial.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <a
                href="#technology"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0E2A43] text-white text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#143B56] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB]"
              >
                <span>Explorar tecnología</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#18C5BB] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <span className="text-xs font-mono text-[#66737A] border-l border-[#0E2A43]/15 pl-4 py-1 leading-tight">
                Movilidad · Infraestructura · Operaciones
              </span>
            </div>
          </div>

          {/* Asymmetric Photographic Anchor with Minimal Technical Indicator */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-2.5 sm:p-3 border border-[#0E2A43]/10 shadow-[0_4px_24px_rgba(14,42,67,0.04)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E7EBED]">
                <img
                  src={heroCorridorImg}
                  alt="Corredor de infraestructura vial analizado por visión artificial VIZIA"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Computer Vision Bounding Indicator (Maximum 1 discreet indicator as requested) */}
                <div
                  className="absolute top-[38%] left-[28%] w-36 h-20 border border-[#18C5BB]/90 pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="absolute -top-5 left-0 bg-[#0E2A43] text-[#18C5BB] text-[9px] font-mono px-1.5 py-0.5 leading-none tracking-wider">
                    VEHICLE :: C4 HEAVY
                  </div>
                  {/* Discrete hairline coordinate accents */}
                  <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#18C5BB]"></span>
                  <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#18C5BB]"></span>
                </div>
              </div>

              {/* Technical Telemetry Metadata Row */}
              <div className="mt-2.5 px-1 flex justify-between items-center text-[10px] font-mono text-[#66737A]">
                <span>FRAME CAPTURE :: 1080P MULTI-AXIS</span>
                <span className="text-[#0E2A43] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#18C5BB] inline-block animate-pulse"></span>
                  TEMPORAL CONTINUITY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Anchor / Scroll To Explore */}
      <div className="max-w-[1520px] mx-auto w-full flex justify-between items-center border-t border-[#0E2A43]/10 pt-6 text-[11px] font-mono text-[#66737A] z-10">
        <span className="tracking-widest uppercase">COLOMBIA / COMPUTER VISION PLATFORM</span>
        <a
          href="#computer-vision"
          className="hover:text-[#0E2A43] transition-colors flex items-center gap-2 group"
        >
          <span className="tracking-wider uppercase">Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#18C5BB] transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

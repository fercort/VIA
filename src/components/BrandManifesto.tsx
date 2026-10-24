import React, { useState, useEffect } from 'react';

export const BrandManifesto: React.FC = () => {
  const [animationStep, setAnimationStep] = useState<number>(0);

  useEffect(() => {
    // Loop through progressive pixel assembly animation
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 5);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[85vh] lg:min-h-screen py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0E2A43] text-white flex flex-col justify-between relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1520px] mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Typographic Manifesto Statement */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-xs text-[#18C5BB] tracking-[0.18em] uppercase font-semibold">
              MANIFIESTO DE MARCA
            </span>

            <h2 className="text-5xl sm:text-7xl lg:text-[96px] font-light leading-[0.98] tracking-[-0.035em] text-white">
              De un píxel<br />
              <span className="font-normal text-white">a una decisión.</span>
            </h2>

            <div className="w-16 h-[1px] bg-white/20"></div>

            <div className="flex items-center gap-8 text-xs font-mono tracking-[0.2em] text-[#18C5BB]">
              <span>SEE</span>
              <span className="text-white/40">·</span>
              <span>UNDERSTAND</span>
              <span className="text-white/40">·</span>
              <span>DECIDE</span>
            </div>
          </div>

          {/* Large Animated Isotype Assembly Canvas */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative p-10 bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center w-full max-w-sm aspect-square shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              {/* Scaled Isotype with Progressive Pixel Reveal */}
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-500"
              >
                {/* Pixel 1: Smallest Top-left (Always visible or step >= 1) */}
                <rect
                  x="16"
                  y="16"
                  width="22"
                  height="22"
                  fill="#18C5BB"
                  className="transition-opacity duration-500"
                  style={{ opacity: animationStep >= 0 ? 1 : 0.2 }}
                />

                {/* Pixel 2: Intermediate stepped (Visible when step >= 1) */}
                <rect
                  x="44"
                  y="40"
                  width="30"
                  height="30"
                  fill="#18C5BB"
                  className="transition-opacity duration-500"
                  style={{ opacity: animationStep >= 1 ? 1 : 0.15 }}
                />

                {/* 2x2 Cluster: Pixel 3 (Top-left 2x2, Turquoise) (Visible when step >= 2) */}
                <rect
                  x="80"
                  y="75"
                  width="46"
                  height="46"
                  fill="#18C5BB"
                  className="transition-opacity duration-500"
                  style={{ opacity: animationStep >= 2 ? 1 : 0.15 }}
                />

                {/* 2x2 Cluster: Pixel 4 (Top-right 2x2, White) (Visible when step >= 3) */}
                <rect
                  x="132"
                  y="75"
                  width="46"
                  height="46"
                  fill="#FFFFFF"
                  className="transition-opacity duration-500"
                  style={{ opacity: animationStep >= 3 ? 1 : 0.15 }}
                />

                {/* 2x2 Cluster: Pixel 5 (Bottom-left 2x2, White) (Visible when step >= 3) */}
                <rect
                  x="80"
                  y="127"
                  width="46"
                  height="46"
                  fill="#FFFFFF"
                  className="transition-opacity duration-500"
                  style={{ opacity: animationStep >= 3 ? 1 : 0.15 }}
                />

                {/* 2x2 Cluster: Pixel 6 (Bottom-right 2x2, White) (Visible when step >= 4) */}
                <rect
                  x="132"
                  y="127"
                  width="46"
                  height="46"
                  fill="#FFFFFF"
                  className="transition-opacity duration-500"
                  style={{ opacity: animationStep >= 4 ? 1 : 0.15 }}
                />
              </svg>

              {/* Progress Tracker below SVG */}
              <div className="mt-8 flex items-center justify-between w-full border-t border-white/10 pt-4 font-mono text-[10px] text-white/50">
                <span>ESTRUCTURA DE MARCA</span>
                <span className="text-[#18C5BB]">
                  {animationStep === 0 && '01 / PÍXEL INICIAL'}
                  {animationStep === 1 && '02 / DETECCIÓN'}
                  {animationStep === 2 && '03 / COMPRENSIÓN'}
                  {animationStep === 3 && '04 / DATO'}
                  {animationStep >= 4 && '05 / DECISIÓN'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1520px] mx-auto w-full flex justify-between items-center text-[10px] font-mono text-white/40 border-t border-white/10 pt-6">
        <span>VIZIA CORP · COLOMBIA</span>
        <span>VISIÓN ARTIFICIAL & INTELIGENCIA APLICADA</span>
      </div>
    </section>
  );
};

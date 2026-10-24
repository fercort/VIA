import React from 'react';

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F7F8F7] border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-3">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#18C5BB] font-semibold">
              07 / VISIÓN
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] leading-[1.04] tracking-[-0.03em]" style={{ textWrap: 'balance' }}>
              Las cámaras ya están mirando.<br />
              <span className="font-normal text-[#143B56]">Nosotros hacemos que entiendan.</span>
            </h2>
          </div>

          <div className="w-16 h-[1px] bg-[#0E2A43]/20"></div>

          <div className="space-y-6 text-base sm:text-xl font-light text-[#66737A] leading-relaxed max-w-3xl">
            <p>
              Gran parte de la información que necesitan las organizaciones ya existe dentro de imágenes y video. VIZIA construye tecnología para transformar esa información visual en conocimiento utilizable.
            </p>
            <p>
              Comenzamos por movilidad e infraestructura. Nuestra visión es llevar Computer Vision a cualquier industria donde observar mejor permita decidir mejor.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#0E2A43]/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] text-[#66737A] block uppercase">Punto de partida</span>
              <span className="text-[#0E2A43] font-medium block">Movilidad & Tráfico Vial</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#66737A] block uppercase">Horizonte</span>
              <span className="text-[#0E2A43] font-medium block">Operaciones del Mundo Físico</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#66737A] block uppercase">Propósito</span>
              <span className="text-[#18C5BB] font-medium block">De un píxel a una decisión</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

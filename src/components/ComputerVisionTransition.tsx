import React from 'react';
import trafficFlowImg from '../assets/images/vizia_traffic_flow_1790314916556.jpg';

export const ComputerVisionTransition: React.FC = () => {
  return (
    <section id="computer-vision" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-white border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Large Architectural Photography */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden aspect-[16/10] bg-[#E7EBED] border border-[#0E2A43]/10">
              <img
                src={trafficFlowImg}
                alt="Flujo de vehículos y actores viales capturados por visión computacional"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 border border-[#0E2A43]/10 text-[10px] font-mono text-[#0E2A43]">
                MULTICLASS DYNAMICS · REAL-WORLD HIGHWAY
              </div>
            </div>
          </div>

          {/* Editorial Headline & Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#18C5BB] font-semibold">
                Visión Computacional Aplicada
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0E2A43] leading-[1.08] tracking-[-0.025em]" style={{ textWrap: 'balance' }}>
                Cuando una cámara deja de mirar y empieza a entender.
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-[#0E2A43]/20"></div>

            <p className="text-base sm:text-lg font-light text-[#66737A] leading-relaxed">
              VIZIA utiliza visión artificial para interpretar imágenes y secuencias de video, identificar objetos, seguir su movimiento y convertir lo observado en información útil.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-6 border-t border-[#0E2A43]/10 text-xs font-mono">
              <div>
                <span className="text-[#66737A] block text-[10px] uppercase">Enfoque</span>
                <span className="text-[#0E2A43] font-medium mt-1 block">Mundo Físico Real</span>
              </div>
              <div>
                <span className="text-[#66737A] block text-[10px] uppercase">Resultado</span>
                <span className="text-[#0E2A43] font-medium mt-1 block">Datos Estructurados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

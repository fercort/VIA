import React, { useState } from 'react';
import truckAxlesImg from '../assets/images/vizia_heavy_truck_axles_1790314926365.jpg';

export const DifferentiatorSection: React.FC = () => {
  const [activeCallout, setActiveCallout] = useState<string | null>('axles');

  const callouts = [
    {
      id: 'vehicle',
      title: 'Vehicle Envelope',
      label: 'Delimitación Morfológica',
      detail: 'Aislamiento del contorno geométrico para cálculo de volumen y silueta del semirremolque.',
      x: '24%',
      y: '32%',
    },
    {
      id: 'wheel',
      title: 'Wheel Evidence',
      label: 'Huella de Contacto & Rueda',
      detail: 'Detección óptica de conjuntos de llantas simples y dobles mediante análisis de gradientes de contraste.',
      x: '52%',
      y: '78%',
    },
    {
      id: 'axles',
      title: 'Axle Configuration',
      label: 'Configuración de Ejes C2-C6',
      detail: 'Medición de distancias inter-eje y determinación automática de disposición tándem o trídem.',
      x: '76%',
      y: '78%',
    },
    {
      id: 'temporal',
      title: 'Temporal Evidence',
      label: 'Coherencia Multi-Frame',
      detail: 'Integración estadística a lo largo de 15 a 45 fotogramas sucesivos para evitar falsos positivos.',
      x: '72%',
      y: '36%',
    },
    {
      id: 'classification',
      title: 'Classification',
      label: 'Asignación Tipológica C4',
      detail: 'Generación del vector final de clasificación con nivel de confianza superior al 93% en condiciones estándar.',
      x: '40%',
      y: '18%',
    },
  ];

  return (
    <section id="differentiator" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F7F8F7] border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#18C5BB] font-semibold">
            Diferenciador Tecnológico
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] leading-[1.04] tracking-[-0.03em]">
            No solo contamos vehículos.<br />
            <span className="font-normal text-[#143B56]">Entendemos qué circula.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-[#66737A] leading-relaxed pt-2">
            VIZIA incorpora análisis especializado de vehículos pesados para caracterizar el transporte según su configuración física y número de ejes, proporcionando certidumbre técnica a concesiones viales, autoridades de transporte y firmas consultoras.
          </p>
        </div>

        {/* Technical Blueprint Display */}
        <div className="bg-white p-6 sm:p-12 lg:p-16 border border-[#0E2A43]/10 shadow-[0_4px_24px_rgba(14,42,67,0.03)] space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-[#0E2A43]/10 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#18C5BB]"></span>
              <span className="font-mono text-xs text-[#0E2A43] font-semibold tracking-wider">
                ANÁLISIS DE CONFIGURACIÓN PESADA :: MODELO C2 · C3 · C4 · C5 · C6
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#66737A]">
              Pase el cursor o presione un punto para inspeccionar evidencia
            </span>
          </div>

          {/* Truck Image Canvas with Fine 1px Technical Overlays */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#F7F8F7] border border-[#0E2A43]/10 flex items-center justify-center">
            <img
              src={truckAxlesImg}
              alt="Inspección técnica de camión pesado con visión artificial VIZIA"
              className="w-full h-full object-contain p-4 sm:p-8"
              referrerPolicy="no-referrer"
            />

            {/* Fine 1px Technical Markers & Callout Lines */}
            {callouts.map((point) => {
              const isSelected = activeCallout === point.id;
              return (
                <div
                  key={point.id}
                  style={{ top: point.y, left: point.x }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    type="button"
                    onClick={() => setActiveCallout(point.id)}
                    className={`relative flex items-center justify-center w-6 h-6 rounded-none transition-all duration-200 focus-visible:outline-none ${
                      isSelected
                        ? 'bg-[#0E2A43] text-[#18C5BB] scale-110 shadow-lg'
                        : 'bg-white text-[#0E2A43] border border-[#0E2A43]/20 hover:border-[#18C5BB]'
                    }`}
                    aria-label={`Ver detalle de ${point.title}`}
                  >
                    <span className="w-1.5 h-1.5 bg-[#18C5BB]"></span>
                  </button>

                  {/* Discrete hairline indicator tag */}
                  <span
                    className={`absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-mono text-[9px] px-1.5 py-0.5 border pointer-events-none transition-all ${
                      isSelected
                        ? 'bg-[#0E2A43] text-white border-[#0E2A43]'
                        : 'bg-white/90 text-[#66737A] border-[#0E2A43]/10 opacity-70 group-hover:opacity-100'
                    }`}
                  >
                    {point.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Callouts Inspection Detail Bar */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 border-t border-[#0E2A43]/10">
            {callouts.map((c) => {
              const isSelected = activeCallout === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCallout(c.id)}
                  className={`text-left p-4 border transition-all text-xs focus-visible:outline-none ${
                    isSelected
                      ? 'bg-[#0E2A43] text-white border-[#0E2A43]'
                      : 'bg-[#F7F8F7] text-[#0E2A43] border-[#0E2A43]/10 hover:border-[#18C5BB]/50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[10px] text-[#18C5BB] font-semibold uppercase">
                      {c.title}
                    </span>
                    <span className={`w-1 h-1 ${isSelected ? 'bg-[#18C5BB]' : 'bg-[#0E2A43]/20'}`}></span>
                  </div>
                  <span className="font-medium block mb-1 text-[11px]">{c.label}</span>
                  <p className={`text-[10px] font-light leading-snug ${isSelected ? 'text-white/75' : 'text-[#66737A]'}`}>
                    {c.detail}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';

interface PipelineStep {
  id: string;
  name: string;
  number: string;
  shortDesc: string;
  fullDetail: string;
  metric: string;
}

export const TechnologyPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps: PipelineStep[] = [
    {
      id: 'pixel',
      number: '01',
      name: 'PIXEL',
      shortDesc: 'Captura de frame visual sin procesar.',
      fullDetail: 'Ingesta de secuencias de video en resoluciones hasta 1080p y 4K. Normalización óptica y filtrado adaptativo de condiciones lumínicas.',
      metric: 'Optics Ingestion',
    },
    {
      id: 'object',
      number: '02',
      name: 'OBJECT',
      shortDesc: 'Detección espacial de elementos.',
      fullDetail: 'Aislamiento de geometrías vehiculares y delimitación espacial mediante modelos neuronales de visión adaptados a perspectiva vial.',
      metric: 'Spatial Envelopes',
    },
    {
      id: 'track',
      number: '03',
      name: 'TRACK',
      shortDesc: 'Seguimiento temporal multi-objeto.',
      fullDetail: 'Asignación de vectores de desplazamiento y persistencia de identidad a lo largo del tiempo, eliminando duplicidad por oclusiones momentáneas.',
      metric: 'Trajectory Coherence',
    },
    {
      id: 'class',
      number: '04',
      name: 'CLASS',
      shortDesc: 'Clasificación tipológica avanzada.',
      fullDetail: 'Segmentación entre motos, autos, buses y tipologías de carga pesada C2 a C6 fundamentada en morfología y recuento visual de ejes.',
      metric: 'Morphological Profiling',
    },
    {
      id: 'event',
      number: '05',
      name: 'EVENT',
      shortDesc: 'Identificación de hitos viales.',
      fullDetail: 'Cruce verificado de líneas virtuales de aforo, sentido de circulación, velocidades aparentes y puntos de interés georreferenciados.',
      metric: 'Virtual Line Gates',
    },
    {
      id: 'data',
      number: '06',
      name: 'DATA',
      shortDesc: 'Estructuración analítica e integración.',
      fullDetail: 'Conversión a registros tabulares con evidencia fotográfica auditada para estudios de movilidad, auditorías de concesión y matrices O-D.',
      metric: 'Structured Records',
    },
  ];

  return (
    <section id="technology" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F7F8F7] border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E2A43]/10 pb-8 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              01 / TECHNOLOGY
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0E2A43] tracking-[-0.025em]">
              Vision Pipeline
            </h2>
          </div>
          <p className="text-sm md:text-base font-light text-[#66737A] max-w-lg leading-relaxed">
            Cada video contiene información que normalmente permanece sin estructurar. Nuestra tecnología convierte esa información visual en eventos, categorías y datos ejecutables.
          </p>
        </div>

        {/* Pipeline Process Flow */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-6 border transition-all duration-300 flex flex-col justify-between h-48 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB] ${
                    isActive
                      ? 'bg-[#0E2A43] text-white border-[#0E2A43] shadow-[0_4px_16px_rgba(14,42,67,0.12)]'
                      : 'bg-white text-[#0E2A43] border-[#0E2A43]/10 hover:border-[#18C5BB]/60'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span
                      className={`font-mono text-xs ${
                        isActive ? 'text-[#18C5BB]' : 'text-[#66737A] group-hover:text-[#18C5BB]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 transition-colors ${
                        isActive ? 'bg-[#18C5BB]' : 'bg-transparent border border-[#0E2A43]/20'
                      }`}
                    ></span>
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-mono font-medium tracking-tight ${
                        isActive ? 'text-white' : 'text-[#0E2A43]'
                      }`}
                    >
                      {step.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 font-light leading-snug line-clamp-2 ${
                        isActive ? 'text-white/75' : 'text-[#66737A]'
                      }`}
                    >
                      {step.shortDesc}
                    </p>
                  </div>

                  <div className="w-full">
                    <div
                      className={`h-[2px] w-full transition-all duration-300 ${
                        isActive ? 'bg-[#18C5BB]' : 'bg-[#0E2A43]/5 group-hover:bg-[#18C5BB]/30'
                      }`}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Step Inspection Terminal */}
          <div className="bg-white p-6 sm:p-8 border border-[#0E2A43]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#18C5BB] font-semibold">
                  ETAPA {steps[activeStepIndex].number} :: {steps[activeStepIndex].name}
                </span>
                <span className="text-[#0E2A43]/20">/</span>
                <span className="font-mono text-xs text-[#66737A]">
                  {steps[activeStepIndex].metric}
                </span>
              </div>
              <p className="text-sm sm:text-base font-light text-[#0E2A43] leading-relaxed">
                {steps[activeStepIndex].fullDetail}
              </p>
            </div>

            <div className="text-right shrink-0 border-t md:border-t-0 md:border-l border-[#0E2A43]/10 pt-4 md:pt-0 md:pl-8">
              <span className="text-[10px] font-mono uppercase text-[#66737A] block">
                Principio rector
              </span>
              <span className="font-mono text-xs text-[#0E2A43] font-medium mt-1 block">
                De un píxel a una decisión
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

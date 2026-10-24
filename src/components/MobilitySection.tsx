import React, { useState } from 'react';
import trafficFlowImg from '../assets/images/vizia_traffic_flow_1790314916556.jpg';

interface AxleCategory {
  code: string;
  axles: string;
  name: string;
  description: string;
  schematic: string;
}

export const MobilitySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('C4');

  const macroCategories = [
    { name: 'Motocicletas', note: 'Maniobras y filtrado entre carriles' },
    { name: 'Vehículos Livianos', note: 'Automóviles, camionetas, SUVs y camperos' },
    { name: 'Transporte Colectivo', note: 'Buses intermunicipales y articulados' },
    { name: 'Transporte Pesado', note: 'Clasificación analítica según ejes C2-C6' },
  ];

  const heavyCategories: AxleCategory[] = [
    {
      code: 'C2',
      axles: '2 Ejes',
      name: 'Camión Rígido Pequeño / Mediano',
      description: 'Vehículo de carga de dos ejes simples. Capacidad de carga media para distribución urbana e intermunicipal corta.',
      schematic: '○──────────○',
    },
    {
      code: 'C3',
      axles: '3 Ejes',
      name: 'Camión Rígido Pesado (Tándem)',
      description: 'Camión rígido con eje delantero simple y tándem trasero doble (volquetas, hormigoneras y camiones de estacas).',
      schematic: '○───────○○',
    },
    {
      code: 'C4',
      axles: '4 Ejes',
      name: 'Articulado / Rígido de Cuatro Ejes',
      description: 'Tractocamión con semirremolque de dos ejes o camión rígido de cuatro ejes (doble troque con eje direccional adicional).',
      schematic: '○───○───○○',
    },
    {
      code: 'C5',
      axles: '5 Ejes',
      name: 'Tractocamión Semirremolque 2S3 / 3S2',
      description: 'Configuración clásica de transporte interurbano de carga a granel y contenedores estándar en corredores de comercio.',
      schematic: '○───○○───○○',
    },
    {
      code: 'C6',
      axles: '6+ Ejes',
      name: 'Tractomula Pesada 3S3 y Especiales',
      description: 'Tractocamión de tres ejes con semirremolque de tres ejes (trídem) para carga extrapesada de larga distancia nacional.',
      schematic: '○───○○───○○○',
    },
  ];

  const currentCategory = heavyCategories.find((c) => c.code === selectedCategory) || heavyCategories[2];

  return (
    <section id="mobility" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-white border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              02 / MOBILITY
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] leading-[1.02] tracking-[-0.03em]">
              Entender<br />
              <span className="font-normal text-[#143B56]">lo que circula.</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg font-light text-[#66737A] leading-relaxed max-w-xl">
              VIZIA transforma grabaciones de tráfico en información detallada sobre el comportamiento y composición del flujo vehicular en corredores concesionados y mallas viales urbanas.
            </p>
          </div>
        </div>

        {/* Primary Traffic Scene */}
        <div className="relative aspect-[21/9] sm:aspect-[24/10] bg-[#E7EBED] border border-[#0E2A43]/10 overflow-hidden">
          <img
            src={trafficFlowImg}
            alt="Corredor vial analizado por el sistema de movilidad VIZIA"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 bg-[#0E2A43]/90 backdrop-blur-sm text-white px-5 py-3 text-xs font-mono border-l-2 border-[#18C5BB]">
            <span className="text-[#18C5BB] font-semibold block">AFOROS VEHICULARES AUTOMATIZADOS</span>
            <span className="text-white/80 text-[10px] mt-0.5 block">RESOLUCIÓN MULTICLASE SEGÚN NORMATIVA INVIAS / MINISTERIO DE TRANSPORTE</span>
          </div>
        </div>

        {/* Macro Classification Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {macroCategories.map((cat, i) => (
            <div key={cat.name} className="p-6 bg-[#F7F8F7] border border-[#0E2A43]/10 space-y-2">
              <span className="font-mono text-[10px] text-[#66737A] block">CATEGORÍA 0{i + 1}</span>
              <h3 className="text-base font-medium text-[#0E2A43]">{cat.name}</h3>
              <p className="text-xs text-[#66737A] font-light leading-relaxed">{cat.note}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive: Heavy Vehicle Classification C2-C6 */}
        <div className="space-y-8 pt-8 border-t border-[#0E2A43]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#18C5BB] font-semibold">
                Diferencial de Clasificación Pesada
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0E2A43] mt-1">
                Tipología de Carga por Configuración de Ejes
              </h3>
            </div>
            <span className="text-xs font-mono text-[#66737A]">
              Seleccione una categoría para inspeccionar configuración
            </span>
          </div>

          {/* Interactive Axle Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {heavyCategories.map((item) => {
              const isSelected = item.code === selectedCategory;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setSelectedCategory(item.code)}
                  className={`text-left p-5 border transition-all duration-200 flex flex-col justify-between h-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB] ${
                    isSelected
                      ? 'bg-[#0E2A43] text-white border-[#0E2A43] shadow-[0_4px_16px_rgba(14,42,67,0.1)]'
                      : 'bg-[#F7F8F7] text-[#0E2A43] border-[#0E2A43]/10 hover:border-[#18C5BB]/60'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-3xl font-mono font-bold">{item.code}</span>
                    <span
                      className={`text-[10px] font-mono px-1 py-0.5 ${
                        isSelected ? 'text-[#18C5BB]' : 'text-[#66737A]'
                      }`}
                    >
                      {item.axles}
                    </span>
                  </div>

                  <div>
                    <span
                      className={`text-xs block font-medium truncate ${
                        isSelected ? 'text-white' : 'text-[#0E2A43]'
                      }`}
                    >
                      {item.name}
                    </span>
                    <div
                      className={`mt-2 h-[2px] w-full transition-colors ${
                        isSelected ? 'bg-[#18C5BB]' : 'bg-transparent'
                      }`}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Axle Architecture Card */}
          <div className="bg-[#F7F8F7] p-8 border border-[#0E2A43]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-mono font-bold text-[#0E2A43]">
                  {currentCategory.code}
                </span>
                <span className="text-xs font-mono bg-[#0E2A43] text-[#18C5BB] px-2 py-0.5">
                  {currentCategory.axles}
                </span>
              </div>
              <h4 className="text-lg font-medium text-[#0E2A43]">{currentCategory.name}</h4>
              <p className="text-xs text-[#66737A] leading-relaxed font-light">
                {currentCategory.description}
              </p>
            </div>

            {/* Technical Axle Schematic Representation */}
            <div className="lg:col-span-8 bg-white p-6 border border-[#0E2A43]/10 space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#66737A] border-b border-[#0E2A43]/10 pb-2">
                <span>CONFIGURACIÓN CINEMÁTICA DE EJES Y RUEDAS</span>
                <span className="text-[#18C5BB]">DETECCIÓN MULTI-FRAME ACTIVA</span>
              </div>

              <div className="py-6 flex flex-col items-center justify-center space-y-3 font-mono">
                {/* Visual Chassis Outline */}
                <div className="w-full max-w-md h-7 border border-[#0E2A43]/20 bg-[#F7F8F7] flex items-center justify-center text-[10px] text-[#0E2A43] font-semibold tracking-widest">
                  CHASIS / ESTRUCTURA DE CARGA [{currentCategory.code}]
                </div>

                {/* Axle markers */}
                <div className="w-full max-w-md flex justify-between px-6 pt-2">
                  {currentCategory.code === 'C2' && (
                    <>
                      <div className="flex flex-col items-center">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="text-[9px] text-[#66737A] mt-1">Eje 1 (Simple)</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="text-[9px] text-[#66737A] mt-1">Eje 2 (Dual)</span>
                      </div>
                    </>
                  )}
                  {currentCategory.code === 'C3' && (
                    <>
                      <div className="flex flex-col items-center">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="text-[9px] text-[#66737A] mt-1">Eje 1</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                          <span className="text-[9px] text-[#66737A] mt-1">Eje 2</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                          <span className="text-[9px] text-[#66737A] mt-1">Eje 3</span>
                        </div>
                      </div>
                    </>
                  )}
                  {currentCategory.code === 'C4' && (
                    <>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                          <span className="text-[9px] text-[#66737A] mt-1">Eje 1</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                          <span className="text-[9px] text-[#66737A] mt-1">Eje 2</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                          <span className="text-[9px] text-[#66737A] mt-1">Eje 3</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                          <span className="text-[9px] text-[#66737A] mt-1">Eje 4</span>
                        </div>
                      </div>
                    </>
                  )}
                  {currentCategory.code === 'C5' && (
                    <>
                      <div className="flex flex-col items-center">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="text-[9px] text-[#66737A] mt-1">Eje 1</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                      </div>
                    </>
                  )}
                  {currentCategory.code === 'C6' && (
                    <>
                      <div className="flex flex-col items-center">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="text-[9px] text-[#66737A] mt-1">Eje 1</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                        <span className="w-4 h-4 rounded-full border-2 border-[#18C5BB] bg-[#0E2A43]"></span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-[#66737A] pt-2 border-t border-[#0E2A43]/10">
                <span>SEPARACIÓN ESPACIAL CALCULADA</span>
                <span className="text-[#0E2A43] font-medium">DISCRIMINACIÓN AUTOMÁTICA EN TRÁFICO CONTINUO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

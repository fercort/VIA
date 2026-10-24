import React, { useState } from 'react';
import heroCorridorImg from '../assets/images/vizia_hero_corridor_1790314907261.jpg';

export const SoftwareSection: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<'KM24' | 'KM48'>('KM24');

  const dataset = {
    KM24: {
      location: 'Autopista Pacífico 2 · Estación KM 24+800',
      camera: 'CAM-02 (Cenital Doble Calzada)',
      totalVehicles: '18,492',
      lightVehicles: '10,725 (58.0%)',
      buses: '1,479 (8.0%)',
      motorcycles: '2,219 (12.0%)',
      heavyVehicles: '4,069 (22.0%)',
      heavyBreakdown: [
        { code: 'C2', count: '1,708', share: '42%' },
        { code: 'C3', count: '895', share: '22%' },
        { code: 'C4', count: '732', share: '18%' },
        { code: 'C5', count: '488', share: '12%' },
        { code: 'C6', count: '246', share: '6%' },
      ],
      hourlyPeak: '07:00 - 08:00 (1,840 veh/h)',
    },
    KM48: {
      location: 'Corredor Bogotá–Girardot · Sector Silvania KM 48',
      camera: 'CAM-05 (Lateral Angulado)',
      totalVehicles: '24,110',
      lightVehicles: '15,671 (65.0%)',
      buses: '2,170 (9.0%)',
      motorcycles: '3,858 (16.0%)',
      heavyVehicles: '2,411 (10.0%)',
      heavyBreakdown: [
        { code: 'C2', count: '1,205', share: '50%' },
        { code: 'C3', count: '506', share: '21%' },
        { code: 'C4', count: '385', share: '16%' },
        { code: 'C5', count: '217', share: '9%' },
        { code: 'C6', count: '98', share: '4%' },
      ],
      hourlyPeak: '17:00 - 18:00 (2,120 veh/h)',
    },
  };

  const data = dataset[selectedStation];

  return (
    <section id="software" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-white border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E2A43]/10 pb-8 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              04 / SOFTWARE
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] tracking-[-0.03em]">
              Software Platform
            </h2>
          </div>
          <p className="text-sm md:text-base font-light text-[#66737A] max-w-md leading-relaxed">
            De horas de video a información lista para analizar. Visualización, auditoría y exportación de datos de tráfico sobre una interfaz sobria.
          </p>
        </div>

        {/* Panoramic Road View with Partially Overlayed VIZIA Engineering Console */}
        <div className="relative">
          {/* Panoramic Highway Backdrop */}
          <div className="relative aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden bg-[#E7EBED] border border-[#0E2A43]/10">
            <img
              src={heroCorridorImg}
              alt="Corredor vial analizado por el software de VIZIA"
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 font-mono text-[10px] text-[#0E2A43] bg-white/90 px-3 py-1 border border-[#0E2A43]/10">
              AUDITORÍA DE VIDEO EN BRUTO · 24 HORAS PROCESADAS
            </div>
          </div>

          {/* VIZIA Dark Navy Console (Partially overlapping) */}
          <div className="lg:-mt-24 relative z-10 bg-[#0E2A43] text-white p-6 sm:p-10 border border-[#0E2A43] shadow-[0_20px_48px_rgba(14,42,67,0.18)]">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[#18C5BB] font-semibold">ESTACIÓN ACTIVA:</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStation('KM24')}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      selectedStation === 'KM24'
                        ? 'bg-white text-[#0E2A43] border-white'
                        : 'text-white/70 border-white/20 hover:text-white'
                    }`}
                  >
                    PACÍFICO 2 · KM 24
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedStation('KM48')}
                    className={`px-3 py-1 text-xs border transition-colors ${
                      selectedStation === 'KM48'
                        ? 'bg-white text-[#0E2A43] border-white'
                        : 'text-white/70 border-white/20 hover:text-white'
                    }`}
                  >
                    BOGOTÁ–GIRARDOT · KM 48
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[11px] text-white/60">
                <span>ESTADO: AUDITADO</span>
                <span className="text-[#18C5BB]">COHERENCIA: 99.1%</span>
              </div>
            </div>

            {/* Station Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-white/10 text-xs font-mono">
              <div>
                <span className="text-white/50 text-[10px] block uppercase">Ubicación</span>
                <span className="text-white font-medium mt-1 block truncate">{data.location}</span>
              </div>
              <div>
                <span className="text-white/50 text-[10px] block uppercase">Cámara / Sensor</span>
                <span className="text-white font-medium mt-1 block truncate">{data.camera}</span>
              </div>
              <div>
                <span className="text-white/50 text-[10px] block uppercase">Pico Horario</span>
                <span className="text-[#18C5BB] font-medium mt-1 block">{data.hourlyPeak}</span>
              </div>
              <div>
                <span className="text-white/50 text-[10px] block uppercase">Volumen Total (24h)</span>
                <span className="text-2xl font-bold text-white block leading-none mt-1">
                  {data.totalVehicles}
                </span>
              </div>
            </div>

            {/* Traffic Composition Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
              {/* Left Column: Macro Composition */}
              <div className="lg:col-span-5 space-y-4 font-mono text-xs">
                <span className="text-white/60 text-[10px] tracking-wider uppercase block">
                  COMPOSICIÓN DEL FLUJO VEHICULAR
                </span>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-white/80">
                      <span>Vehículos Livianos</span>
                      <span>{data.lightVehicles}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10">
                      <div className="h-full bg-white" style={{ width: '58%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-white/80">
                      <span>Vehículos Pesados (C2-C6)</span>
                      <span className="text-[#18C5BB]">{data.heavyVehicles}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10">
                      <div className="h-full bg-[#18C5BB]" style={{ width: '22%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-white/80">
                      <span>Motocicletas</span>
                      <span>{data.motorcycles}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10">
                      <div className="h-full bg-white/60" style={{ width: '12%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-white/80">
                      <span>Transporte Colectivo / Buses</span>
                      <span>{data.buses}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10">
                      <div className="h-full bg-white/40" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Heavy Breakdown C2-C6 */}
              <div className="lg:col-span-7 space-y-4 font-mono text-xs">
                <span className="text-white/60 text-[10px] tracking-wider uppercase block">
                  DISTRIBUCIÓN DE TRANSPORTE PESADO (CONFIGURACIÓN DE EJES)
                </span>

                <div className="grid grid-cols-5 gap-3 text-center">
                  {data.heavyBreakdown.map((item) => (
                    <div
                      key={item.code}
                      className={`p-3 border transition-colors ${
                        item.code === 'C4'
                          ? 'border-[#18C5BB] bg-white/5'
                          : 'border-white/10 bg-white/[0.02]'
                      }`}
                    >
                      <span className="text-white/50 text-[10px] block">{item.code}</span>
                      <span className="text-lg font-bold text-white block my-1">{item.share}</span>
                      <span className="text-[10px] text-white/60 block">{item.count} veh</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-white/5 border border-white/10 flex justify-between items-center text-[11px] text-white/70">
                  <span>Exportación de matriz completa disponible:</span>
                  <span className="text-[#18C5BB] font-semibold">CSV · PARQUET · EXCEL INVIAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

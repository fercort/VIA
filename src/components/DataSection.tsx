import React from 'react';

export const DataSection: React.FC = () => {
  const pipelineSequence = [
    { step: 'VIDEO', desc: 'Cuadros ópticos' },
    { step: 'DETECTION', desc: 'Envolvente espacial' },
    { step: 'VEHICLE ID', desc: 'Vector de tracking' },
    { step: 'CLASSIFICATION', desc: 'Morfología & ejes' },
    { step: 'COUNT', desc: 'Paso por gate virtual' },
    { step: 'DATABASE', desc: 'Registro inmutable' },
    { step: 'REPORT', desc: 'Matriz consolidada' },
  ];

  const recentEvents = [
    {
      id: 'VZ-01842',
      classType: 'C4',
      name: 'Tractocamión 4 Ejes',
      direction: 'Northbound',
      time: '08:42:16.48',
      speed: '64 km/h',
      confidence: '93.4%',
      status: 'VERIFIED',
    },
    {
      id: 'VZ-01841',
      classType: 'Liviano',
      name: 'Automóvil Particular',
      direction: 'Northbound',
      time: '08:42:13.12',
      speed: '82 km/h',
      confidence: '98.8%',
      status: 'VERIFIED',
    },
    {
      id: 'VZ-01840',
      classType: 'C2',
      name: 'Camión Rígido 2 Ejes',
      direction: 'Southbound',
      time: '08:42:09.80',
      speed: '59 km/h',
      confidence: '95.2%',
      status: 'VERIFIED',
    },
    {
      id: 'VZ-01839',
      classType: 'Bus',
      name: 'Intermunicipal Articulado',
      direction: 'Northbound',
      time: '08:42:04.22',
      speed: '71 km/h',
      confidence: '97.1%',
      status: 'VERIFIED',
    },
    {
      id: 'VZ-01838',
      classType: 'C6',
      name: 'Tractomula 6+ Ejes (3S3)',
      direction: 'Southbound',
      time: '08:41:58.74',
      speed: '48 km/h',
      confidence: '94.6%',
      status: 'VERIFIED',
    },
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F7F8F7] border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
            05 / DATA INTEGRITY
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] tracking-[-0.03em]">
            From vision<br />
            <span className="font-normal text-[#143B56]">to data.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-[#66737A] leading-relaxed">
            Cada vehículo se convierte en un evento verificable respaldado por evidencia fotográfica y trazabilidad temporal.
          </p>
        </div>

        {/* Linear Data Flow Diagram */}
        <div className="bg-white p-6 sm:p-10 border border-[#0E2A43]/10 space-y-4">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#66737A] border-b border-[#0E2A43]/10 pb-3">
            <span>SECUENCIA DE TRANSFORMACIÓN DE LA EVIDENCIA</span>
            <span className="text-[#18C5BB]">DETERMINISMO ANALÍTICO</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
            {pipelineSequence.map((item, idx) => (
              <div key={item.step} className="p-3 bg-[#F7F8F7] border border-[#0E2A43]/10 text-left relative group">
                <span className="text-[10px] font-mono text-[#66737A] block">0{idx + 1}</span>
                <span className="font-mono text-xs font-semibold text-[#0E2A43] mt-1 block">
                  {item.step}
                </span>
                <span className="text-[10px] text-[#66737A] font-light mt-0.5 block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verifiable Event Table */}
        <div className="bg-white p-6 sm:p-10 border border-[#0E2A43]/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0E2A43]/10 gap-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#18C5BB]"></span>
              <span className="font-mono text-xs font-semibold text-[#0E2A43] tracking-wider">
                REGISTRO AUDITABLE DE PASO VEHICULAR :: LEDGER EN VIVO
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#66737A]">
              5 eventos recientes mostrados · 100% fotográficamente auditables
            </span>
          </div>

          {/* Tabular Ledger with Tabular-Nums */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#0E2A43]/15 text-[#66737A] text-[10px] uppercase">
                  <th className="py-3 px-4 font-normal">Event ID</th>
                  <th className="py-3 px-4 font-normal">Clase</th>
                  <th className="py-3 px-4 font-normal">Tipología</th>
                  <th className="py-3 px-4 font-normal">Sentido</th>
                  <th className="py-3 px-4 font-normal">Timestamp</th>
                  <th className="py-3 px-4 font-normal">Velocidad</th>
                  <th className="py-3 px-4 font-normal">Certeza</th>
                  <th className="py-3 px-4 font-normal text-right">Auditoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E2A43]/10">
                {recentEvents.map((ev) => (
                  <tr key={ev.id} className="hover:bg-[#F7F8F7] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0E2A43]">{ev.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-[#18C5BB] bg-[#0E2A43] px-1.5 py-0.5 text-[11px]">
                        {ev.classType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-sans text-xs text-[#0E2A43]">{ev.name}</td>
                    <td className="py-3.5 px-4 text-[#66737A]">{ev.direction}</td>
                    <td className="py-3.5 px-4 tabular-nums text-[#0E2A43]">{ev.time}</td>
                    <td className="py-3.5 px-4 tabular-nums text-[#66737A]">{ev.speed}</td>
                    <td className="py-3.5 px-4 tabular-nums text-[#0E2A43] font-medium">
                      {ev.confidence}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-[10px] text-[#0E2A43] font-semibold border-b border-[#18C5BB]">
                        FRAME CROP
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#66737A] pt-4 border-t border-[#0E2A43]/10 gap-2">
            <span>SISTEMA DE HASH CRIPTOGRÁFICO ASIGNADO A CADA IMAGEN DE EVIDENCIA</span>
            <span className="text-[#0E2A43]">VIZIA AUDIT TRAIL v2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

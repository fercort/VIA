import React, { useState } from 'react';
import trafficFlowImg from '../assets/images/vizia_traffic_flow_1790314916556.jpg';
import infrastructureImg from '../assets/images/vizia_infrastructure_corridor_1790314935875.jpg';
import truckAxlesImg from '../assets/images/vizia_heavy_truck_axles_1790314926365.jpg';
import heroCorridorImg from '../assets/images/vizia_hero_corridor_1790314907261.jpg';

export const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'mobility' | 'infrastructure' | 'industry' | 'safety' | 'agriculture' | 'quality'
  >('mobility');

  const solutions = {
    mobility: {
      name: 'Mobility',
      status: 'PRODUCCIÓN / COMERCIAL ACTIVO',
      headline: 'Analítica visual para comprender cómo se mueve una carretera.',
      description:
        'Nuestra solución base para concesiones viales, consultorías de transporte y secretarías de movilidad. Transforma grabaciones de tráfico en censos vehiculares precisos y caracterización de carga.',
      applications: [
        'Traffic counting (Aforos continuos bidireccionales)',
        'Vehicle classification (Multiclase normativo)',
        'Heavy vehicle characterization (Ejes C2 a C6)',
        'Traffic composition (Proporciones y mezclas de flota)',
        'Mobility studies (Estudios de demanda y matrices O-D)',
        'Road analysis (Capacidad, niveles de servicio y velocidad)',
        'Video auditing (Inspección y verificación con respaldo fotográfico)',
      ],
      image: trafficFlowImg,
      badge: 'Solución Desplegable Hoy',
    },
    infrastructure: {
      name: 'Infrastructure',
      status: 'LÍNEA DE DESARROLLO',
      headline: 'Inspección computacional del estado del activo vial.',
      description:
        'Evolución del pipeline de visión hacia la detección automatizada de anomalías en pavimento, señalización vertical, defensas metálicas y geometría del corredor.',
      applications: [
        'Detección de baches y fisuras por video recorrido',
        'Inventario georreferenciado de señales de tránsito',
        'Monitoreo de demarcación horizontal y reflectancia',
        'Auditoría visual de zonas de obras y desvíos',
      ],
      image: infrastructureImg,
      badge: 'Capacidad en Expansión',
    },
    industry: {
      name: 'Industry',
      status: 'LÍNEA DE DESARROLLO',
      headline: 'Visión artificial para patios de carga y plantas industriales.',
      description:
        'Monitoreo de flotas pesadas en accesos a centros de distribución, verificación de configuración vehicular y control de tiempos de permanencia en muelles de carga.',
      applications: [
        'Automatización de básculas y accesos vehiculares',
        'Cálculo de tiempos de ciclo y permanencia en patio',
        'Verificación de amarre y estado superficial de carga',
        'Conteo de estibas y contenedores en tránsito',
      ],
      image: truckAxlesImg,
      badge: 'Capacidad en Expansión',
    },
    safety: {
      name: 'Safety',
      status: 'LÍNEA DE DESARROLLO',
      headline: 'Telemetría preventiva de interacciones de riesgo.',
      description:
        'Análisis de trayectorias e identificación de eventos casi-colisión (near-miss) entre vehículos pesados y actores viales vulnerables en intersecciones complejas.',
      applications: [
        'Evaluación de conflictos peatonales y ciclistas',
        'Monitoreo de puntos ciegos en giros de camiones',
        'Identificación de invasión de carriles exclusivos',
        'Mapeo de zonas de alta fricción cinemática',
      ],
      image: heroCorridorImg,
      badge: 'Capacidad en Expansión',
    },
    agriculture: {
      name: 'Agriculture',
      status: 'INVESTIGACIÓN & EXPLORACIÓN',
      headline: 'Inspección visual de cultivos y biomasa física.',
      description:
        'Aplicación de arquitecturas de segmentación óptica y recuento volumétrico para evaluación de cosechas y rendimiento por hectárea.',
      applications: [
        'Estimación visual de cosecha en árboles frutales',
        'Monitoreo de biomasa y vigor vegetativo',
        'Detección temprana de patrones de estrés foliar',
      ],
      image: infrastructureImg,
      badge: 'Línea de Exploración Futura',
    },
    quality: {
      name: 'Quality',
      status: 'INVESTIGACIÓN & EXPLORACIÓN',
      headline: 'Control de calidad óptico en procesos continuos.',
      description:
        'Visión por computador de alta velocidad para detección de defectos superficiales y clasificación de piezas manufacturadas.',
      applications: [
        'Detección de anomalías de acabado superficial',
        'Clasificación por calibre y dimensiones geométricas',
        'Verificación de empaque y etiquetado',
      ],
      image: truckAxlesImg,
      badge: 'Línea de Exploración Futura',
    },
  };

  const current = solutions[activeTab];

  return (
    <section id="solutions" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-white border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E2A43]/10 pb-8 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              06 / SOLUTIONS
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] tracking-[-0.03em]">
              Solutions
            </h2>
          </div>
          <p className="text-sm md:text-base font-light text-[#66737A] max-w-md leading-relaxed">
            Una plataforma escalable de visión artificial: nacida en la movilidad vial y concebida para extenderse a cualquier ámbito del mundo físico donde ver signifique decidir.
          </p>
        </div>

        {/* Horizontal Navigation Tabs with Active Underline in Turquoise */}
        <div className="flex flex-wrap gap-8 border-b border-[#0E2A43]/10 text-xs font-semibold uppercase tracking-[0.08em] text-[#66737A]">
          {(Object.keys(solutions) as Array<keyof typeof solutions>).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`pb-4 transition-all relative focus-visible:outline-none ${
                  isActive
                    ? 'text-[#0E2A43] font-bold'
                    : 'text-[#66737A] hover:text-[#0E2A43]'
                }`}
              >
                <span>{solutions[key].name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#18C5BB]"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Solution Detail Frame */}
        <div className="bg-[#F7F8F7] p-8 sm:p-12 lg:p-16 border border-[#0E2A43]/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#18C5BB]"></span>
              <span className="font-mono text-xs text-[#0E2A43] font-semibold tracking-wider">
                {current.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-light text-[#0E2A43] leading-snug">
              {current.headline}
            </h3>

            <p className="text-sm sm:text-base font-light text-[#66737A] leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2 space-y-3">
              <span className="font-mono text-[10px] text-[#0E2A43] font-bold uppercase tracking-wider block">
                Aplicaciones y Capacidades
              </span>
              <ul className="space-y-2 text-xs font-mono text-[#0E2A43]">
                {current.applications.map((app) => (
                  <li key={app} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#18C5BB] shrink-0 mt-1"></span>
                    <span className="font-light">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#E7EBED] border border-[#0E2A43]/10">
              <img
                src={current.image}
                alt={`Aplicación VIZIA en ${current.name}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-[#0E2A43] text-white px-3 py-1 font-mono text-[10px] border-l-2 border-[#18C5BB]">
                {current.badge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

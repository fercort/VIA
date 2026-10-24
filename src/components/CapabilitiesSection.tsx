import React from 'react';
import infrastructureImg from '../assets/images/vizia_infrastructure_corridor_1790314935875.jpg';

export const CapabilitiesSection: React.FC = () => {
  const coreActions = [
    { verb: 'Detect', desc: 'Identificación óptica espacial' },
    { verb: 'Track', desc: 'Persistencia temporal continua' },
    { verb: 'Classify', desc: 'Categorización morfométrica' },
    { verb: 'Count', desc: 'Aforo por líneas virtuales' },
    { verb: 'Analyze', desc: 'Extracción de matrices O-D' },
  ];

  const capabilityDetails = [
    {
      title: 'Object Detection',
      tag: '01',
      description: 'Modelos neuronales de convolución y atención entrenados específicamente para topografías viales, ángulos cenitales y variaciones climáticas.',
    },
    {
      title: 'Multi-object Tracking',
      tag: '02',
      description: 'Asignación robusta de vectores cinemáticos que preserva identidades aún frente a oclusiones parciales provocadas por otros vehículos o postes.',
    },
    {
      title: 'Vehicle Classification',
      tag: '03',
      description: 'Taxonomía completa que discrimina motocicletas, automóviles livianos, transporte de pasajeros y las categorías de carga pesada C2 a C6.',
    },
    {
      title: 'Heavy Vehicle Analysis',
      tag: '04',
      description: 'Segmentación profunda de cabina, plataforma y semirremolque para caracterizar la configuración estructural de vehículos comerciales.',
    },
    {
      title: 'Axle Estimation',
      tag: '05',
      description: 'Algoritmos especializados en aislamiento de huella de rodamiento y detección de conjuntos tándem/trídem a partir del flujo visual lateral.',
    },
    {
      title: 'Temporal Analysis',
      tag: '06',
      description: 'Evaluación multi-frame que acumula certidumbre a través de decenas de cuadros para consolidar una única decisión de clasificación verificada.',
    },
    {
      title: 'Virtual Line Counting',
      tag: '07',
      description: 'Generación flexible de líneas de cruce direccional y zonas poligonales de conteo sobre cualquier perspectiva de cámara fija.',
    },
    {
      title: 'Video Processing',
      tag: '08',
      description: 'Arquitectura de ingesta de alta velocidad capaz de procesar horas de video grabado en formato MP4 o recibir feeds RTSP en despliegues dedicados.',
    },
    {
      title: 'Evidence Generation',
      tag: '09',
      description: 'Recorte visual del vehículo en el instante del aforo, generando soporte fotográfico auditable para concesionarias y entidades supervisoras.',
    },
    {
      title: 'Data Export',
      tag: '10',
      description: 'Exportación directa de series de tiempo, matrices origen-destino y resúmenes horarios en formatos interoperables (CSV, Parquet, JSON y API).',
    },
  ];

  const systemSpecs = [
    { label: 'INPUT', value: 'Video MP4 / MKV / RTSP', detail: 'Compatibilidad con cámaras existentes' },
    { label: 'RESOLUTION', value: 'Up to 1920 × 1080+', detail: 'Optimizado para full HD y 4K' },
    { label: 'PROCESSING', value: 'Offline & Edge Cloud', detail: 'Flexibilidad de despliegue según proyecto' },
    { label: 'ANALYSIS', value: 'Multi-frame Temporal', detail: 'Consistencia a lo largo de la trayectoria' },
    { label: 'OUTPUT', value: 'Structured Data', detail: 'Eventos con sello de tiempo y dirección' },
    { label: 'EVIDENCE', value: 'Visual Audit Frames', detail: 'Fotograma de verificación por registro' },
  ];

  return (
    <section id="capabilities" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#F7F8F7] border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E2A43]/10 pb-8 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              03 / CAPABILITIES & SYSTEM
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E2A43] tracking-[-0.03em]">
              Capabilities
            </h2>
          </div>
          <p className="text-sm md:text-base font-light text-[#66737A] max-w-md leading-relaxed">
            Una plataforma de visión artificial construida con rigor de ingeniería para responder a las exigencias operativas y normativas de la infraestructura vial.
          </p>
        </div>

        {/* Core Verbs Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {coreActions.map((action, i) => (
            <div key={action.verb} className="p-6 bg-white border border-[#0E2A43]/10 space-y-3">
              <span className="font-mono text-xs text-[#18C5BB]">0{i + 1}</span>
              <h3 className="text-2xl font-light text-[#0E2A43]">{action.verb}</h3>
              <p className="text-xs text-[#66737A] font-light">{action.desc}</p>
            </div>
          ))}
        </div>

        {/* Asymmetrical Engineering Datasheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilityDetails.map((cap) => (
            <div
              key={cap.title}
              className="p-6 bg-white border border-[#0E2A43]/10 flex flex-col justify-between h-56 hover:border-[#0E2A43]/30 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#18C5BB]">{cap.tag}</span>
                  <span className="w-1 h-1 bg-[#0E2A43]/20"></span>
                </div>
                <h4 className="text-base font-medium text-[#0E2A43]">{cap.title}</h4>
              </div>
              <p className="text-xs font-light text-[#66737A] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* SYSTEM Specifications Row (Inspirado en 'Gear') */}
        <div className="space-y-8 pt-12 border-t border-[#0E2A43]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#18C5BB] font-semibold">
                Ficha Técnica de Despliegue
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-[#0E2A43] mt-1">System</h3>
            </div>
            <span className="text-xs font-mono text-[#66737A]">
              Capacidades técnicas reales sin supuestos de precisión no auditados
            </span>
          </div>

          <div className="relative aspect-[21/8] bg-[#E7EBED] border border-[#0E2A43]/10 overflow-hidden">
            <img
              src={infrastructureImg}
              alt="Infraestructura de monitoreo vial VIZIA"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 border border-[#0E2A43]/10 text-[10px] font-mono text-[#0E2A43]">
              HARDWARE-AGNOSTIC VISION ENGINE
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {systemSpecs.map((spec) => (
              <div key={spec.label} className="p-5 bg-white border border-[#0E2A43]/10 space-y-2">
                <span className="font-mono text-[10px] text-[#66737A] uppercase tracking-wider block">
                  {spec.label}
                </span>
                <span className="font-mono text-sm text-[#0E2A43] font-medium block">
                  {spec.value}
                </span>
                <span className="text-[10px] text-[#66737A] block leading-tight font-light">
                  {spec.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Share2, Download, Copy, Check, ExternalLink, X, FileText, Code2 } from 'lucide-react';
import { ViziaLogo } from './ViziaLogo';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  sharedUrl: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, sharedUrl }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sharedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleShareWebAPI = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'VIZIA · De un píxel a una decisión',
          text: 'Plataforma corporativa de visión artificial aplicada al análisis de infraestructura vial y movilidad.',
          url: sharedUrl,
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      handleCopy();
    }
  };

  const handleDownloadSpecs = () => {
    const specsContent = `=====================================================
VIZIA · VISIÓN ARTIFICIAL & MOVILIDAD
"De un píxel a una decisión."
Ficha Técnica de Capacidades y Especificaciones de Sistema
=====================================================

1. IDENTIDAD INSTITUCIONAL
-----------------------------------------------------
- Marca: VIZIA
- Propósito: Transformar imágenes y video en información estructurada para la toma de decisiones.
- Pipeline Tecnológico:
  PIXEL -> DETECCIÓN -> COMPRENSIÓN -> DATO -> DECISIÓN
- Sede: Colombia

2. MOVILIDAD & CLASIFICACIÓN DE CARGA PESADA
-----------------------------------------------------
Categorías soportadas según normativa de transporte e INVIAS:
- Motocicletas (Detección de filtrado y maniobra)
- Vehículos Livianos (Automóviles particulares, SUVs, taxis)
- Transporte Colectivo (Buses intermunicipales y sistemas articulados)
- Transporte Pesado por configuración de ejes:
  * C2: Camión rígido de 2 ejes
  * C3: Camión rígido de 3 ejes (Tándem posterior)
  * C4: Articulado / Rígido de 4 ejes
  * C5: Tractocamión semirremolque de 5 ejes (2S3 / 3S2)
  * C6: Tractomula pesada de 6 o más ejes (3S3)

3. CAPACIDADES DEL MOTOR DE VISIÓN COMPUTACIONAL
-----------------------------------------------------
- Object Detection: Detección espacial mediante envolventes adaptativas
- Multi-Object Tracking: Persistencia temporal y trayectorias continuas
- Axle Estimation: Huella de contacto y discriminación inter-eje
- Virtual Line Counting: Aforos bidireccionales y zonas poligonales
- Temporal Evidence: Consolidación multi-frame (15 a 45 cuadros)
- Photographic Audit Trail: Fotograma de evidencia recortado por evento
- Structured Data: Exportación directa en CSV, Parquet y JSON

4. ESPECIFICACIONES DE DESPLIEGUE (SYSTEM)
-----------------------------------------------------
- Input: Archivos de video MP4 / MKV y streams de red RTSP
- Resolución: Hasta 1920 x 1080 Full HD y 4K
- Procesamiento: Offline por lotes o Edge Cloud dedicado
- Certidumbre analítica: Multi-frame temporal sin duplicidad

URL de la plataforma:
${sharedUrl}

Contacto institucional: contacto@vizia.co
(c) ${new Date().getFullYear()} VIZIA. Todos los derechos reservados.
`;

    const blob = new Blob([specsContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'VIZIA_Ficha_Tecnica_Sistema.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess('specs');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleDownloadDatasetSample = () => {
    const csvContent = `event_id,timestamp,location_id,camera_id,direction,class,axles,speed_kmh,confidence,audit_frame_hash
VZ-01842,2026-09-24 08:42:16.48,KM24+800,CAM-02,Northbound,C4,4,64.2,0.934,e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
VZ-01841,2026-09-24 08:42:13.12,KM24+800,CAM-02,Northbound,Liviano,2,82.1,0.988,ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb
VZ-01840,2026-09-24 08:42:09.80,KM24+800,CAM-02,Southbound,C2,2,59.4,0.952,3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d
VZ-01839,2026-09-24 08:42:04.22,KM24+800,CAM-02,Northbound,Bus,3,71.0,0.971,2e7d2c03a9507ae265ecf5b5356885a53393a2029d24139499726b4259fb173a
VZ-01838,2026-09-24 08:41:58.74,KM24+800,CAM-02,Southbound,C6,6,48.5,0.946,8743b52063cd84097a65d1633f5c74f5
`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'VIZIA_Muestra_Aforo_C2_C6.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess('csv');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E2A43]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-xl bg-white p-6 sm:p-10 border border-[#0E2A43]/15 shadow-2xl text-[#0E2A43]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-[#0E2A43]/10 pb-5">
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#18C5BB] font-semibold block">
              DISTRIBUCIÓN INSTITUCIONAL
            </span>
            <h3 className="text-2xl font-light text-[#0E2A43] tracking-tight">
              Compartir y Descargar
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#66737A] hover:text-[#0E2A43] transition-colors focus-visible:outline-none"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Share Link Section */}
        <div className="space-y-6 pt-6">
          <div className="space-y-2">
            <label className="text-[11px] font-mono text-[#66737A] block uppercase">
              Enlace público de la web
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-[#F7F8F7] px-3.5 py-2.5 border border-[#0E2A43]/15 font-mono text-xs text-[#0E2A43] truncate select-all">
                {sharedUrl}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2.5 bg-[#0E2A43] text-white hover:bg-[#143B56] transition-colors text-xs font-mono flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#18C5BB]" />
                    <span className="text-[#18C5BB]">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Share Options */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="button"
              onClick={handleShareWebAPI}
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#0E2A43]/15 bg-white text-xs font-mono hover:border-[#18C5BB] hover:text-[#0E2A43] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#18C5BB]" />
              <span>Compartir nativo</span>
            </button>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(sharedUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#0E2A43]/15 bg-white text-xs font-mono hover:border-[#18C5BB] hover:text-[#0E2A43] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#18C5BB]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent('VIZIA · De un píxel a una decisión')}&body=${encodeURIComponent(`Conoce la plataforma de visión artificial VIZIA para movilidad e infraestructura:\n\n${sharedUrl}`)}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#0E2A43]/15 bg-white text-xs font-mono hover:border-[#18C5BB] hover:text-[#0E2A43] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#18C5BB]" />
              <span>Correo</span>
            </a>
          </div>

          {/* Download Resources Section */}
          <div className="space-y-3 pt-6 border-t border-[#0E2A43]/10">
            <span className="text-[11px] font-mono text-[#66737A] block uppercase">
              Recursos Técnicos para Descarga
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Specs document */}
              <button
                type="button"
                onClick={handleDownloadSpecs}
                className="text-left p-4 border border-[#0E2A43]/15 bg-[#F7F8F7] hover:border-[#18C5BB] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#18C5BB] font-semibold">
                      FICHA TÉCNICA .TXT
                    </span>
                    <FileText className="w-4 h-4 text-[#0E2A43] group-hover:text-[#18C5BB] transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-[#0E2A43] block">
                    Especificaciones VIZIA System
                  </span>
                  <p className="text-[10px] text-[#66737A] mt-1 font-light leading-snug">
                    Resumen de arquitectura, tipologías C2-C6 y pipeline de visión.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#0E2A43] font-semibold mt-3 flex items-center gap-1 group-hover:text-[#18C5BB]">
                  <Download className="w-3 h-3" />
                  {downloadSuccess === 'specs' ? '¡Descargado!' : 'Descargar archivo'}
                </span>
              </button>

              {/* Sample Dataset */}
              <button
                type="button"
                onClick={handleDownloadDatasetSample}
                className="text-left p-4 border border-[#0E2A43]/15 bg-[#F7F8F7] hover:border-[#18C5BB] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#18C5BB] font-semibold">
                      DATASET EJEMPLO .CSV
                    </span>
                    <Code2 className="w-4 h-4 text-[#0E2A43] group-hover:text-[#18C5BB] transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-[#0E2A43] block">
                    Matriz de Aforo Auditable
                  </span>
                  <p className="text-[10px] text-[#66737A] mt-1 font-light leading-snug">
                    Muestra tabular de eventos C2-C6 con timestamps y hashes.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#0E2A43] font-semibold mt-3 flex items-center gap-1 group-hover:text-[#18C5BB]">
                  <Download className="w-3 h-3" />
                  {downloadSuccess === 'csv' ? '¡Descargado!' : 'Descargar CSV'}
                </span>
              </button>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-[#66737A]">
            <span>VIZIA CORP · COLOMBIA</span>
            <span>DE UN PÍXEL A UNA DECISIÓN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

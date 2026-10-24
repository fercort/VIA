import React, { useState, useEffect } from 'react';
import trafficFlowImg from '../assets/images/vizia_traffic_flow_1790314916556.jpg';
import { Play, RotateCcw, CheckCircle2 } from 'lucide-react';

export const InteractiveCvDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(4); // default completed
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (currentStep < 4) {
        timer = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, 900);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  const startSimulation = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const resetSimulation = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-white border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E2A43]/10 pb-8 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              DEMOSTRACIÓN INTERACTIVA
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0E2A43] tracking-[-0.025em]">
              De un píxel a una decisión
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={startSimulation}
              disabled={isPlaying}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E2A43] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#143B56] disabled:opacity-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB]"
            >
              <Play className="w-3 h-3 text-[#18C5BB]" />
              <span>Simular Inferencia</span>
            </button>
            <button
              type="button"
              onClick={resetSimulation}
              className="p-2.5 text-[#66737A] hover:text-[#0E2A43] border border-[#0E2A43]/10 hover:border-[#0E2A43]/30 transition-colors focus-visible:outline-none"
              aria-label="Reiniciar simulación"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className={`p-3 border transition-colors ${currentStep >= 1 ? 'border-[#0E2A43] bg-[#F7F8F7]' : 'border-[#0E2A43]/10 text-[#66737A]'}`}>
            <span className="text-[10px] block text-[#66737A]">PASO 01</span>
            <span className="font-semibold text-[#0E2A43]">DETECCIÓN ÓPTICA</span>
          </div>
          <div className={`p-3 border transition-colors ${currentStep >= 2 ? 'border-[#0E2A43] bg-[#F7F8F7]' : 'border-[#0E2A43]/10 text-[#66737A]'}`}>
            <span className="text-[10px] block text-[#66737A]">PASO 02</span>
            <span className="font-semibold text-[#0E2A43]">TRACK & VEHICLE ID</span>
          </div>
          <div className={`p-3 border transition-colors ${currentStep >= 3 ? 'border-[#0E2A43] bg-[#F7F8F7]' : 'border-[#0E2A43]/10 text-[#66737A]'}`}>
            <span className="text-[10px] block text-[#66737A]">PASO 03</span>
            <span className="font-semibold text-[#0E2A43]">RECUENTO DE EJES C4</span>
          </div>
          <div className={`p-3 border transition-colors ${currentStep >= 4 ? 'border-[#18C5BB] bg-[#0E2A43] text-white' : 'border-[#0E2A43]/10 text-[#66737A]'}`}>
            <span className="text-[10px] block text-[#18C5BB]">PASO 04</span>
            <span className="font-semibold text-white">EVENTO ESTRUCTURADO</span>
          </div>
        </div>

        {/* Interactive Viewport + Data Output Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F8F7] p-6 sm:p-10 border border-[#0E2A43]/10">
          {/* Visual Camera Canvas */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-black border border-[#0E2A43]/10">
            <img
              src={trafficFlowImg}
              alt="Fotograma de análisis vial"
              className="w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />

            {/* Virtual Counting Tripwire */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#18C5BB]/60 pointer-events-none" aria-hidden="true">
              <span className="absolute top-1 right-4 text-[9px] font-mono text-[#18C5BB] bg-[#0E2A43] px-1">
                LÍNEA VIRTUAL :: GATE-01
              </span>
            </div>

            {/* Progressive Detection Box & Annotations */}
            {currentStep >= 1 && (
              <div
                className="absolute top-[32%] left-[34%] w-48 h-28 border border-[#18C5BB] transition-all duration-500"
                style={{
                  boxShadow: '0 0 0 1px rgba(24, 197, 187, 0.4)',
                }}
              >
                {/* Step 2: Vehicle ID */}
                {currentStep >= 2 && (
                  <div className="absolute -top-6 left-0 bg-[#0E2A43] text-[#18C5BB] font-mono text-[9px] px-2 py-0.5 whitespace-nowrap border-b border-[#18C5BB]">
                    ID: VZ-01842 · SPEED: 64 KM/H
                  </div>
                )}

                {/* Step 3: Axles Count & Class */}
                {currentStep >= 3 && (
                  <div className="absolute -bottom-6 left-0 bg-[#0E2A43] text-white font-mono text-[9px] px-2 py-0.5 whitespace-nowrap flex items-center gap-1.5">
                    <span className="text-[#18C5BB]">CLASE: C4</span>
                    <span>·</span>
                    <span>4 EJES CONFIRMADOS</span>
                  </div>
                )}

                {/* Corner hairline brackets */}
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#18C5BB]"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#18C5BB]"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#18C5BB]"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#18C5BB]"></span>
              </div>
            )}
          </div>

          {/* Structured Data Ledger Output */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex justify-between items-center border-b border-[#0E2A43]/10 pb-3">
              <span className="font-mono text-xs font-semibold text-[#0E2A43]">
                REGISTRO DEL EVENTO EN TIEMPO REAL
              </span>
              <span className="text-[10px] font-mono text-[#18C5BB] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#18C5BB] inline-block"></span>
                ESTRUCTURADO
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between p-2.5 bg-white border border-[#0E2A43]/10">
                <span className="text-[#66737A]">EVENT ID</span>
                <span className="text-[#0E2A43] font-bold">
                  {currentStep >= 2 ? 'VZ-01842' : 'PROCESANDO...'}
                </span>
              </div>

              <div className="flex justify-between p-2.5 bg-white border border-[#0E2A43]/10">
                <span className="text-[#66737A]">TIPO MORFOLÓGICO</span>
                <span className="text-[#0E2A43]">
                  {currentStep >= 2 ? 'Vehículo Pesado de Carga' : 'ESPERANDO ENVOLVENTE'}
                </span>
              </div>

              <div className="flex justify-between p-2.5 bg-white border border-[#0E2A43]/10">
                <span className="text-[#66737A]">CONFIGURACIÓN DE EJES</span>
                <span className="text-[#18C5BB] font-bold">
                  {currentStep >= 3 ? '4 Ejes (Tándem posterior)' : 'DETECTANDO RUEDAS'}
                </span>
              </div>

              <div className="flex justify-between p-2.5 bg-white border border-[#0E2A43]/10">
                <span className="text-[#66737A]">CLASIFICACIÓN FINAL</span>
                <span className="text-[#0E2A43] font-bold">
                  {currentStep >= 3 ? 'C4' : 'CALCULANDO'}
                </span>
              </div>

              <div className="flex justify-between p-2.5 bg-white border border-[#0E2A43]/10">
                <span className="text-[#66737A]">FECHA Y HORA</span>
                <span className="text-[#0E2A43]">2026-09-24 08:42:16.48</span>
              </div>

              <div className="flex justify-between p-2.5 bg-white border border-[#0E2A43]/10">
                <span className="text-[#66737A]">NIVEL DE CERTEZA</span>
                <span className="text-[#0E2A43]">
                  {currentStep >= 4 ? '93.4% (Multi-frame 24 frames)' : 'ACUMULANDO EVIDENCIA'}
                </span>
              </div>
            </div>

            {currentStep >= 4 ? (
              <div className="p-3 bg-[#0E2A43] text-white text-xs font-mono flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#18C5BB]" />
                  <span>Dato consolidado para toma de decisión.</span>
                </span>
                <span className="text-[10px] text-[#18C5BB]">AUDITABLE</span>
              </div>
            ) : (
              <div className="text-[11px] font-mono text-[#66737A] pt-1">
                Esperando finalización del ciclo de inferencia...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

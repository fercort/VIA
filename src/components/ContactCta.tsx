import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactCtaProps {
  initialOpenModal?: boolean;
}

export const ContactCta: React.FC<ContactCtaProps> = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    email: '',
    projectType: 'Aforos y Movilidad Vial',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-44 px-6 md:px-12 lg:px-16 bg-white border-b border-[#0E2A43]/10">
      <div className="max-w-[1520px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Editorial Invitation Column */}
          <div className="lg:col-span-6 space-y-8">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#66737A]">
              INICIAR CONVERSACIÓN
            </span>

            <h2 className="text-5xl sm:text-7xl lg:text-[84px] font-light text-[#0E2A43] leading-[1.0] tracking-[-0.035em]">
              ¿Qué podríamos<br />
              <span className="font-normal text-[#143B56]">ver por usted?</span>
            </h2>

            <p className="text-base sm:text-xl font-light text-[#66737A] leading-relaxed max-w-lg">
              Conversemos sobre cómo transformar imágenes y video en información útil para su operación de movilidad, infraestructura o concesión vial.
            </p>

            <div className="pt-6 space-y-3 font-mono text-xs text-[#66737A]">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#18C5BB]"></span>
                <span>Proyectos piloto y auditorías de video bajo acuerdo de confidencialidad.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#18C5BB]"></span>
                <span>Procesamiento de video histórico o despliegue en punto de monitoreo.</span>
              </div>
            </div>
          </div>

          {/* Minimalist Contact Form */}
          <div className="lg:col-span-6 bg-[#F7F8F7] p-8 sm:p-12 border border-[#0E2A43]/10">
            {formSubmitted ? (
              <div className="py-12 space-y-4 text-center">
                <div className="w-12 h-12 bg-[#0E2A43] text-[#18C5BB] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-light text-[#0E2A43]">Mensaje Recibido</h3>
                <p className="text-sm font-light text-[#66737A] max-w-md mx-auto leading-relaxed">
                  Gracias por contactar a VIZIA. Un ingeniero de nuestro equipo revisará los requerimientos de su operación y se comunicará a la brevedad.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        role: '',
                        organization: '',
                        email: '',
                        projectType: 'Aforos y Movilidad Vial',
                        message: '',
                      });
                    }}
                    className="text-xs font-mono text-[#0E2A43] underline hover:text-[#18C5BB]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#0E2A43]/10 pb-3 flex justify-between items-center text-xs font-mono">
                  <span className="text-[#0E2A43] font-semibold">FORMULARIO DE CONTACTO TÉCNICO</span>
                  <span className="text-[#18C5BB]">VIZIA COLOMBIA</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#66737A] block uppercase">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ing. Carlos Restrepo"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#0E2A43]/15 text-sm text-[#0E2A43] placeholder-[#66737A]/50 focus:outline-none focus:border-[#18C5BB]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#66737A] block uppercase">
                      Cargo / Área
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Ej. Director de Operaciones"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#0E2A43]/15 text-sm text-[#0E2A43] placeholder-[#66737A]/50 focus:outline-none focus:border-[#18C5BB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#66737A] block uppercase">
                      Organización / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Concesión, consultoría o entidad"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#0E2A43]/15 text-sm text-[#0E2A43] placeholder-[#66737A]/50 focus:outline-none focus:border-[#18C5BB]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#66737A] block uppercase">
                      Correo corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#0E2A43]/15 text-sm text-[#0E2A43] placeholder-[#66737A]/50 focus:outline-none focus:border-[#18C5BB]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[#66737A] block uppercase">
                    Tipo de requerimiento
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#0E2A43]/15 text-sm text-[#0E2A43] focus:outline-none focus:border-[#18C5BB]"
                  >
                    <option value="Aforos y Movilidad Vial">Aforos y Caracterización C2-C6 de Tráfico</option>
                    <option value="Auditoría de Video para Concesiones">Auditoría y Certificación de Video</option>
                    <option value="Inspección de Infraestructura">Inspección de Infraestructura y Activos</option>
                    <option value="Monitoreo de Patios Industriales">Monitoreo Industrial y Patios de Carga</option>
                    <option value="Desarrollo a Medida">Desarrollo de Visión Artificial Especializado</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[#66737A] block uppercase">
                    Detalles del proyecto o metraje de video
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Especifique ubicación, volumen aproximado de video o necesidad operativa..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#0E2A43]/15 text-sm text-[#0E2A43] placeholder-[#66737A]/50 focus:outline-none focus:border-[#18C5BB]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0E2A43] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#143B56] transition-colors flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18C5BB]"
                >
                  <span>Hablar con VIZIA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#18C5BB] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

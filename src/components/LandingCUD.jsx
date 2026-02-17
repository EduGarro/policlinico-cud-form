import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const JOTFORM_URL = 'https://form.jotform.com/260465222587056';

export default function LandingCUD() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isModalOpen]);

    // Prevenir scroll cuando modal está abierto
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* HEADER */}
            <header className="w-full bg-[#2B3E50]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <img
                        src="/logo-ministerio.png"
                        alt="Ministerio de Salud - República Argentina"
                        className="h-20 md:h-24 w-auto object-contain"
                    />
                    <img
                        src="/logo-secretaria.png"
                        alt="Secretaría Nacional de Discapacidad"
                        className="h-16 md:h-20 w-auto object-contain"
                    />
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="bg-white py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2B3E50] mb-4">
                        Sistema de Turnos Online
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-normal text-gray-600 mb-3">
                        Certificado Único de Discapacidad (CUD)
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500">
                        Provincia de San Luis
                    </p>
                </div>
            </section>

            {/* INFORMACIÓN */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                        <p>
                            El Certificado Único de Discapacidad (CUD) es un documento público que
                            certifica la condición de discapacidad. Este certificado le permite acceder
                            a derechos y prestaciones establecidos por la legislación nacional.
                        </p>

                        <p>
                            Para tramitar su CUD en la Provincia de San Luis, debe solicitar un turno
                            previo. El proceso es completamente gratuito y le permitirá ser atendido
                            en fecha y hora programadas.
                        </p>

                        <p>
                            Complete el formulario online, imprima los documentos generados y preséntelos
                            el día de su turno asignado.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-white py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-block px-16 py-5 bg-[#28A745] hover:bg-[#218838] text-white text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300"
                        aria-label="Abrir formulario para solicitar turno"
                    >
                        SOLICITAR TURNO
                    </button>
                </div>
            </section>

            {/* MODAL */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className="bg-white rounded-xl max-w-2xl w-full p-8 md:p-12 relative animate-slideIn shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1"
                            aria-label="Cerrar modal"
                        >
                            <X size={32} />
                        </button>

                        {/* Contenido */}
                        <div className="text-center">
                            <div className="mb-6">
                                <AlertTriangle
                                    size={64}
                                    className="mx-auto text-yellow-500"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3
                                id="modal-title"
                                className="text-3xl font-bold text-[#2B3E50] mb-6"
                            >
                                IMPORTANTE
                            </h3>

                            <p className="text-lg leading-relaxed text-gray-800 mb-8">
                                Para solicitar un turno debe completar el siguiente formulario e imprimir
                                los documentos resultantes para presentarlos el día de su turno asignado.
                                De lo contrario no se lo atenderá.
                            </p>

                            <button
                                onClick={() => window.open(JOTFORM_URL, '_blank', 'noopener,noreferrer')}
                                className="px-12 py-4 bg-[#28A745] hover:bg-[#218838] text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <footer className="bg-[#2B3E50] text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="space-y-4 mb-6">
                        <p className="text-base">
                            <strong>Gobierno de la Provincia de San Luis</strong>
                        </p>
                        <p className="text-sm">
                            Ministerio de Salud - Secretaría de Discapacidad
                        </p>
                        <p className="text-sm">
                            Horario de atención: Lunes a Viernes de 8:00 a 16:00 hs
                        </p>
                    </div>

                    <div className="border-t border-gray-600 pt-6">
                        <p className="text-sm text-gray-300">
                            © 2026 Gobierno de la Provincia de San Luis - Ministerio de Salud
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

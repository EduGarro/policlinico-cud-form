import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Bus, Wallet, FileText, X } from 'lucide-react';

const JOTFORM_URL = 'https://form.jotform.com/260465222587056';

const benefitsData = [
    {
        icon: <Stethoscope size={28} />,
        title: 'Salud',
        shortDescription: 'Cobertura del 100% en prestaciones de rehabilitación y medicamentos.',
        details: (
            <div className="space-y-4 text-gray-700 text-lg">
                <p className="font-semibold text-gray-900">Cobertura del 100% de las prestaciones que requiera en relación a su discapacidad, incluyendo:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Medicamentos</li>
                    <li>Equipamiento</li>
                    <li>Tratamiento y rehabilitación</li>
                </ul>
                <p className="bg-[#EAF7FA] border-l-4 border-[#0072BB] p-4 text-sm mt-6 rounded-lg">
                    <strong>Importante:</strong> Si tiene obra social presente copia autenticada para mayor cobertura medica.
                </p>
            </div>
        )
    },
    {
        icon: <Bus size={28} />,
        title: 'Transporte',
        shortDescription: 'Pases libres en transporte público y Símbolo de Acceso.',
        details: (
            <div className="space-y-4 text-gray-700 text-lg">
                <p className="font-semibold text-gray-900">Translado gratuito en el transporte público, exención de pago de peajes y libre translados.</p>
                <ul className="list-disc pl-5 space-y-3 text-base">
                    <li>En San Luis tramite la CIPE como paso urbano e interurbano en Centro de admisión más cercano</li>
                    <li>Para viajes de larga distancia. Tramitar con varios días de anticipación en terminal o por página web: <a href="https://reservapasajes.cnrt.gov.ar/login" target="_blank" rel="noopener noreferrer" className="text-[#0072BB] underline font-semibold">reservapasajes.cnrt.gov.ar/login</a>.</li>
                    <li>Si tiene CUD con acompañante puede optar por viajar solo o acompañado.</li>
                    <li><strong>Oblea Provincial:</strong> si usted ya cuenta con un permiso nacional, puede acercarse a la dirección de tránsito (Avenida La Finur, esquina Tomás Jofre) y completar el formulario de autorización. Debe llevar el CUD</li>
                    <li><strong>Peajes:</strong> solicitar requisitos en cualquier peaje</li>
                </ul>
            </div>
        )
    },
    {
        icon: <Wallet size={28} />,
        title: 'Asignaciones',
        shortDescription: 'Ayuda Escolar Anual y Asignación Familiar.',
        details: (
            <div className="space-y-4 text-gray-700 text-lg">
                <ul className="list-disc pl-5 space-y-3">
                    <li>Ayuda escolar anual por hijo con discapacidad.</li>
                    <li>Asignación familiar por hijo con discapacidad.</li>
                </ul>
                <p className="bg-[#EAF7FA] border-l-4 border-[#0072BB] p-4 text-sm mt-6 rounded-lg">
                    Presente copia del CUD en ANSES para acceder a estos beneficios.
                </p>
            </div>
        )
    },
    {
        icon: <FileText size={28} />,
        title: 'Otros Tramites',
        shortDescription: 'Exención de impuestos, patentes, y prioridad en gestiones.',
        details: (
            <div className="space-y-4 text-gray-700 text-lg">
                <ul className="list-disc pl-5 space-y-3">
                    <li>Exención de impuestos (municipales, patentes, entre otros).</li>
                    <li>Beneficios de viviendas sociales.</li>
                    <li>Prioridad para trámites en instituciones públicas y privadas.</li>
                </ul>
            </div>
        )
    }
];

function FeatureCard({ icon, title, shortDescription, index, onClick }) {
    return (
        <div
            onClick={onClick}
            className={[
                'flex flex-col py-10 relative group/feature border-gray-200 cursor-pointer hover:bg-white',
                'lg:border-r',
                (index === 0 || index === 4) && 'lg:border-l',
                index < 4 && 'lg:border-b',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {/* Hover gradient */}
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-100 to-transparent pointer-events-none" />
            )}

            <div className="mb-4 relative z-10 px-10 text-[#0072BB]">
                {icon}
            </div>

            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-[#0072BB] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
                    {title === 'Otros Tramites' ? 'Trámites' : title}
                </span>
            </div>

            <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
                {shortDescription}
            </p>

            <div className="relative z-10 px-10 mt-4 text-[#0072BB] text-sm font-semibold opacity-0 group-hover/feature:opacity-100 transition-all duration-200 group-hover/feature:translate-x-2 flex items-center gap-1">
                <span>Ver detalles</span>
                <span className="text-lg leading-none">&rarr;</span>
            </div>
        </div>
    );
}

export default function BenefitsSection() {
    const [selectedBenefit, setSelectedBenefit] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedBenefit) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedBenefit]);

    return (
        <section id="beneficios" className="py-16 md:py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    ¿Qué derechos garantiza el CUD?
                </h2>
                <p className="text-center text-sm text-gray-500 mb-10 max-w-lg mx-auto">
                    Haga clic en cada beneficio para ver más detalles. El Certificado Único de Discapacidad otorga acceso a múltiples beneficios en todo el territorio nacional.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
                    {benefitsData.map((benefit, index) => (
                        <FeatureCard
                            key={benefit.title}
                            {...benefit}
                            index={index}
                            onClick={() => setSelectedBenefit(benefit)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedBenefit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A2B3C]/80 backdrop-blur-sm p-4 md:p-8 lg:p-12"
                        onClick={() => setSelectedBenefit(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                            className="bg-white w-full max-w-6xl h-[90vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedBenefit(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors shadow-sm"
                            >
                                <X size={28} />
                            </button>

                            {/* Left Side: Content */}
                            <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col h-full overflow-y-auto">
                                <div className="flex items-center gap-4 mb-8 text-[#0072BB]">
                                    {selectedBenefit.icon}
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        Beneficios de {selectedBenefit.title === 'Otros Tramites' ? 'Trámites Varios' : selectedBenefit.title}
                                    </h3>
                                </div>

                                <div className="flex-1 mb-10">
                                    {selectedBenefit.details}
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <a
                                        href={JOTFORM_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-10 py-4 bg-[#2E7D33] hover:bg-[#1B5E20] 
                                                   text-white text-lg font-bold rounded-xl 
                                                   shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                                                   transition-all duration-300 w-full md:w-auto"
                                    >
                                        Obten tu CUD ahora
                                    </a>
                                </div>
                            </div>

                            {/* Right Side: Image with Animation */}
                            <div className="hidden md:flex w-[45%] bg-[#F3F6F9] relative overflow-hidden items-center justify-center p-8">
                                <motion.div
                                    className="w-full h-full bg-center bg-no-repeat bg-contain z-10"
                                    style={{
                                        backgroundImage: 'url(/benefit-modal-image.png)',
                                    }}
                                    initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                                    animate={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' }}
                                    transition={{ duration: 1.2, ease: 'circOut', delay: 0.1 }}
                                />
                                {/* Abstract background elements to make the PNG pop */}
                                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-poncho-alert rounded-full opacity-50 blur-3xl mix-blend-multiply" />
                                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-poncho-cyan rounded-full opacity-10 blur-3xl mix-blend-multiply" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

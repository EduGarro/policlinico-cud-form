import React from 'react';
import { Stethoscope, Bus, Wallet, FileText } from 'lucide-react';

const benefits = [
    {
        icon: <Stethoscope size={28} />,
        title: 'Salud',
        description: 'Cobertura del 100% en prestaciones de rehabilitación y medicamentos.',
    },
    {
        icon: <Bus size={28} />,
        title: 'Transporte',
        description: 'Pases libres en transporte público y Símbolo de Acceso.',
    },
    {
        icon: <Wallet size={28} />,
        title: 'Asignaciones',
        description: 'Ayuda Escolar Anual y Asignación Familiar.',
    },
    {
        icon: <FileText size={28} />,
        title: 'Trámites',
        description: 'Exención de patentes y peajes según normativa.',
    },
];

function FeatureCard({ icon, title, description, index }) {
    return (
        <div
            className={[
                'flex flex-col py-10 relative group/feature border-gray-200',
                'lg:border-r',
                (index === 0 || index === 4) && 'lg:border-l',
                index < 4 && 'lg:border-b',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {/* Hover gradient — top-up for first row, bottom-up for second */}
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-100 to-transparent pointer-events-none" />
            )}

            {/* Icon */}
            <div className="mb-4 relative z-10 px-10 text-[#0072BB]">
                {icon}
            </div>

            {/* Title with animated left bar */}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-[#0072BB] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
                    {title}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
}

export default function BenefitsSection() {
    return (
        <section id="beneficios" className="py-16 md:py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    ¿Qué derechos garantiza el CUD?
                </h2>
                <p className="text-center text-sm text-gray-500 mb-10 max-w-lg mx-auto">
                    El Certificado Único de Discapacidad otorga acceso a múltiples beneficios en todo el territorio nacional.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <FeatureCard key={benefit.title} {...benefit} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

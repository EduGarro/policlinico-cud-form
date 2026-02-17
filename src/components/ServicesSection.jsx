import React from 'react';
import { Car, Accessibility, Users, ClipboardList, ExternalLink } from 'lucide-react';

const services = [
    {
        icon: <Car size={28} />,
        title: 'Franquicia y Certificado de Libre Disponibilidad',
        description: 'Podés tramitarla para personas con discapacidad e instituciones.',
        href: 'https://www.argentina.gob.ar/andis/franquicia-y-certificado-de-libre-disponibilidad',
    },
    {
        icon: <Accessibility size={28} />,
        title: 'Símbolo Internacional de Acceso',
        description: 'Si tenés un certificado de discapacidad podés tramitar tu símbolo.',
        href: 'https://www.argentina.gob.ar/andis/simbolo-internacional-de-acceso',
    },
    {
        icon: <Users size={28} />,
        title: 'Programas para personas con discapacidad',
        description: 'Destinados a mejorar la calidad de vida de las personas con discapacidad y sus familias.',
        href: 'https://www.argentina.gob.ar/andis/simbolo-internacional-de-acceso',
    },
    {
        icon: <ClipboardList size={28} />,
        title: 'Registro de Prestadores',
        description: 'Pueden inscribirse prestadores de servicios de atención y rehabilitación de todo el país.',
        href: 'https://www.argentina.gob.ar/inscribirse-en-el-registro-nacional-de-prestadores',
    },
];

function ServiceFeatureCard({ icon, title, description, href, index }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={[
                'flex flex-col py-10 relative group/feature border-gray-200 cursor-pointer',
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
            <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10 mb-4">
                {description}
            </p>

            {/* Link indicator */}
            <div className="relative z-10 px-10 flex items-center gap-1 text-[#0072BB] text-sm font-semibold 
                            opacity-0 group-hover/feature:opacity-100 transition-all duration-200
                            group-hover/feature:translate-x-2">
                <span>Ver más</span>
                <ExternalLink size={14} />
            </div>
        </a>
    );
}

export default function ServicesSection() {
    return (
        <section id="tramites" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Más trámites y servicios
                </h2>
                <p className="text-sm text-gray-500 mb-10 max-w-lg mx-auto text-center">
                    Accedé a trámites y programas nacionales relacionados con discapacidad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceFeatureCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

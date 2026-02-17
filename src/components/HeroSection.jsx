import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, MapPin, AlertTriangle } from 'lucide-react';

const JOTFORM_URL = 'https://form.jotform.com/260465222587056';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const contactInfo = [
    {
        icon: Globe,
        label: 'www.sanluis.gob.ar',
    },
    {
        icon: Phone,
        label: '(0266) 4452000',
    },
    {
        icon: MapPin,
        label: 'San Luis, Argentina',
    },
];

export default function HeroSection() {
    return (
        <motion.section
            id="inicio"
            className="relative flex w-full flex-col overflow-hidden bg-white text-[#333333] md:flex-row"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Left Side: Content */}
            <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
                {/* Top Section: Logo & Main Content */}
                <div>
                    <motion.header className="mb-10" variants={itemVariants}>
                        <div className="flex items-center gap-4">
                            <img
                                src="/logos/gobierno-san-luis-hero.png"
                                alt="Gobierno de la Provincia de San Luis"
                                className="h-14"
                            />
                            <div className="w-px h-10 bg-gray-300" />
                            <img
                                src="/logos/agencia-discapacidad-hero.png"
                                alt="Agencia Nacional de Discapacidad"
                                className="h-24"
                            />
                            <div className="w-px h-10 bg-gray-300" />
                            <img
                                src="/logos/cud-logo.png"
                                alt="Certificado Único de Discapacidad"
                                className="h-24"
                            />
                        </div>
                    </motion.header>

                    <motion.div variants={containerVariants}>
                        <motion.h1
                            className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
                            variants={itemVariants}
                        >
                            Junta Provincial de Certificación de{' '}
                            <span className="text-[#0072BB]">
                                Personas en Situación de Discapacidad
                            </span>
                        </motion.h1>

                        <motion.div
                            className="my-6 h-1 w-20 bg-[#0072BB] rounded-full"
                            variants={itemVariants}
                        />

                        <motion.p
                            className="mb-8 max-w-md text-lg text-gray-600 leading-relaxed"
                            variants={itemVariants}
                        >
                            Solicite su CUD con un turno online del CERPRE
                            de manera rápida, accesible y gratuita.
                        </motion.p>

                        {/* CTA Principal */}
                        <motion.a
                            href={JOTFORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-[#2E7D33] hover:bg-[#1B5E20] 
                                       text-white text-lg md:text-xl font-bold rounded-lg 
                                       shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                                       transition-all duration-300 ease-in-out
                                       focus:outline-none focus:ring-4 focus:ring-green-300"
                            variants={itemVariants}
                        >
                            SOLICITAR TURNO ONLINE
                        </motion.a>

                        {/* Callout de Alerta */}
                        <motion.div
                            className="mt-8 bg-[#EAF7FA] border-l-4 border-[#0072BB] p-5 rounded-r-lg max-w-lg"
                            variants={itemVariants}
                        >
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="text-[#0072BB] flex-shrink-0 mt-0.5" size={24} />
                                <div className="text-left">
                                    <p className="text-gray-800 font-semibold text-sm mb-1">
                                        INFORMACIÓN IMPORTANTE
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Al completar el formulario, recibirá un correo con la fecha, hora
                                        y planillas oficiales. Si transcurridas 24 hs hábiles no recibió
                                        el correo, comuníquese al WhatsApp de Recepción.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Section: Contact Info */}
                <motion.footer className="mt-12 w-full" variants={itemVariants}>
                    <div className="grid grid-cols-1 gap-4 text-xs text-gray-500 sm:grid-cols-3">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div className="mr-2 flex-shrink-0">
                                    <item.icon className="h-5 w-5 text-[#0072BB]" />
                                </div>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.footer>
            </div>

            {/* Right Side: Image with Clip Path Animation */}
            <motion.div
                className="w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
                style={{
                    backgroundImage: 'url(/hero-cerpre.jpg)',
                }}
                initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
                transition={{ duration: 1.2, ease: 'circOut' }}
            />
        </motion.section>
    );
}

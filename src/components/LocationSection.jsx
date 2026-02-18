import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationSection() {
    return (
        <section id="ubicacion" className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Ubicación
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg border border-gray-200"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.799589598514!2d-66.32184812442965!3d-33.297905673450366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43f007fd04ffb%3A0x332d843bb1e2988d!2sCERPRE!5e0!3m2!1ses-419!2sar!4v1771374353055!5m2!1ses-419!2sar"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación CERPRE"
                        />
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Address card */}
                        <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#0072BB] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-[#0072BB]" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Dirección</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Complejo Sanitario San Luis
                                        <br />
                                        Héroes de Malvinas 110
                                        <br />
                                        San Luis, Argentina
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hours card */}
                        <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#0072BB] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="text-[#0072BB]" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Horario de atención</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Lunes a Viernes
                                        <br />
                                        8:00 a 14:00 hs
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone card */}
                        <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#0072BB] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-[#0072BB]" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Teléfono</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        (0266) 4452000
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps button */}
                        <a
                            href="https://maps.app.goo.gl/s8fqoEojtDpBAYig7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 
                                       bg-[#0072BB] hover:bg-[#005a94] text-white font-semibold 
                                       rounded-lg shadow-md hover:shadow-lg transition-all duration-200
                                       focus:outline-none focus:ring-4 focus:ring-blue-200"
                        >
                            <MapPin size={18} />
                            Abrir en Google Maps
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

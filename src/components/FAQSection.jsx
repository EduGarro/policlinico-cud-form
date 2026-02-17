import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: '¿El trámite tiene algún costo?',
        answer: 'No, es 100% gratuito. El Certificado Único de Discapacidad es un trámite completamente sin cargo para el ciudadano.',
    },
    {
        question: '¿Qué pasa si pierdo mi turno?',
        answer: 'El sistema lo cancela automáticamente si hay inasistencia. Deberá solicitar uno nuevo por esta vía.',
    },
    {
        question: '¿El CUD es permanente?',
        answer: 'Depende de la evaluación de la Junta Médica. Vencido el plazo, debe renovarlo siguiendo el mismo procedimiento.',
    },
];

function FaqItem({ question, answer, index, isOpen, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className={[
                'group rounded-lg transition-all duration-200 ease-in-out',
                'border border-gray-200',
                isOpen
                    ? 'bg-gradient-to-br from-white via-gray-50 to-white shadow-sm'
                    : 'hover:bg-gray-50',
            ].join(' ')}
        >
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between text-left 
                           hover:bg-transparent transition-colors focus:outline-none 
                           focus:ring-2 focus:ring-[#0072BB] focus:ring-inset rounded-lg"
                aria-expanded={isOpen}
            >
                <h3
                    className={[
                        'text-base font-medium transition-colors duration-200 pr-4',
                        isOpen ? 'text-gray-900' : 'text-gray-600',
                    ].join(' ')}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={[
                        'p-0.5 rounded-full flex-shrink-0 transition-colors duration-200',
                        isOpen ? 'text-[#0072BB]' : 'text-gray-400',
                    ].join(' ')}
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: { duration: 0.2, ease: 'easeOut' },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: { duration: 0.2, ease: 'easeIn' },
                        }}
                    >
                        <div className="px-6 pb-4 pt-2">
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-sm text-gray-600 leading-relaxed"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-16 md:py-20 bg-[#F8F9FA]">
            <div className="container mx-auto px-4 max-w-2xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-sm text-gray-500">
                        Respuestas a las consultas más comunes sobre el trámite del CUD.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

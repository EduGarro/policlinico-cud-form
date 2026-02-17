import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1A2B3C] pb-6 pt-16 lg:pb-8 lg:pt-20">
            <div className="px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Top: Logos */}
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center gap-6">
                        <img
                            src="/logos/gobierno-san-luis-hero.png"
                            alt="Gobierno de la Provincia de San Luis"
                            className="h-20 brightness-0 invert opacity-80"
                        />
                        <div className="w-px h-12 bg-white/20" />
                        <img
                            src="/logos/agencia-discapacidad-hero.png"
                            alt="Agencia Nacional de Discapacidad"
                            className="h-20 brightness-0 invert opacity-80"
                        />
                        <div className="w-px h-12 bg-white/20" />
                        <img
                            src="/logos/cud-logo.png"
                            alt="Certificado Único de Discapacidad"
                            className="h-20 brightness-0 invert opacity-80"
                        />
                    </div>

                    {/* CERPRE logo + text on the right */}
                    <div className="flex items-center gap-3 mt-6 md:mt-0">
                        <img
                            src="/logos/cerpre-nav-white.png"
                            alt="CERPRE"
                            className="h-20"
                        />
                        <div>
                            <p className="text-base font-bold text-white/90">CERPRE</p>
                            <p className="text-[11px] text-white/50 leading-tight">
                                Centro de Referencia Provincial<br />de Rehabilitación
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider + Bottom */}
                <div className="border-t border-white/10 mt-8 pt-8 lg:grid lg:grid-cols-10">
                    {/* Nav links */}
                    <nav className="lg:mt-0 lg:col-[4/11]">
                        <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
                            {[
                                { label: 'Inicio', href: '#inicio' },
                                { label: 'Beneficios', href: '#beneficios' },
                                { label: 'Trámites', href: '#tramites' },
                                { label: 'FAQ', href: '#faq' },
                                { label: 'Ubicación', href: '#ubicacion' },
                            ].map((link) => (
                                <li key={link.label} className="my-1 mx-2 shrink-0">
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/70 underline-offset-4 hover:underline hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* External links */}
                    <div className="mt-4 lg:mt-0 lg:col-[4/11]">
                        <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
                            {[
                                { label: 'ANDIS', href: 'https://www.argentina.gob.ar/andis' },
                                { label: 'Normativa', href: 'https://www.argentina.gob.ar/andis/normativa' },
                            ].map((link) => (
                                <li key={link.label} className="my-1 mx-3 shrink-0">
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white/40 underline-offset-4 hover:underline hover:text-white/70 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Copyright */}
                    <div className="mt-6 text-sm leading-6 text-white/40 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
                        <div>© {new Date().getFullYear()} CERPRE</div>
                        <div>Gobierno de la Provincia de San Luis</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

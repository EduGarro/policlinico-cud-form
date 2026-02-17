import React, { useState, useEffect } from 'react';
import { Home, Heart, FileText, HelpCircle, MapPin, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Inicio', href: '#inicio', icon: Home },
    { label: 'Beneficios', href: '#beneficios', icon: Heart },
    { label: 'Trámites', href: '#tramites', icon: FileText },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
    { label: 'Ubicación', href: '#ubicacion', icon: MapPin },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header
            className={[
                'sticky top-0 z-50 mx-auto w-full transition-all duration-500 ease-out',
                scrolled && !mobileOpen
                    ? 'md:top-3 md:max-w-5xl md:rounded-xl bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/80'
                    : 'max-w-full bg-[#0072BB] border-b border-transparent',
                mobileOpen ? 'bg-white' : '',
            ].join(' ')}
        >
            {/* Main nav bar */}
            <nav className={[
                'flex items-center justify-between transition-all duration-500 ease-out',
                scrolled
                    ? 'h-14 px-4 md:px-5'
                    : 'h-20 px-5 md:px-8',
            ].join(' ')}>
                {/* Logo */}
                <a
                    href="#inicio"
                    onClick={(e) => handleNavClick(e, '#inicio')}
                    className="flex items-center gap-0 flex-shrink-0"
                >
                    <img
                        src="/logos/cerpre-nav-white.png"
                        alt="CERPRE"
                        className={[
                            'transition-all duration-500',
                            scrolled ? 'h-12' : 'h-16',
                        ].join(' ')}
                        style={scrolled && !mobileOpen ? {
                            filter: 'brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1230%) hue-rotate(184deg) brightness(95%) contrast(101%)'
                        } : {}}
                    />
                    <div className="hidden sm:block">
                        <p className={[
                            'font-bold leading-tight transition-all duration-500',
                            scrolled && !mobileOpen ? 'text-sm text-[#0072BB]' : 'text-base text-white',
                        ].join(' ')}>
                            CERPRE
                        </p>
                        <p className={[
                            'leading-tight transition-all duration-500',
                            scrolled && !mobileOpen
                                ? 'text-[10px] text-gray-400'
                                : 'text-[11px] text-white/80',
                        ].join(' ')}>
                            Centro de Referencia Provincial de Rehabilitación
                        </p>
                    </div>
                </a>

                {/* Desktop nav links */}
                <div className="hidden md:flex items-center gap-0.5">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={[
                                'rounded-lg font-medium transition-all duration-300',
                                scrolled
                                    ? 'px-3 py-1.5 text-sm text-gray-600 hover:text-[#0072BB] hover:bg-blue-50'
                                    : 'px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/15',
                            ].join(' ')}
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* CTA button */}
                    <a
                        href="https://form.jotform.com/260465222587056"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={[
                            'ml-1 rounded-lg font-bold transition-all duration-300',
                            scrolled
                                ? 'px-3 py-1.5 text-sm bg-[#2E7D33] text-white hover:bg-[#1B5E20]'
                                : 'px-4 py-2.5 text-sm bg-white text-[#0072BB] hover:bg-white/90 shadow-sm',
                        ].join(' ')}
                    >
                        Solicitar Turno
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={[
                        'md:hidden p-2 rounded-lg transition-colors',
                        scrolled || mobileOpen
                            ? 'text-gray-700 hover:bg-gray-100'
                            : 'text-white hover:bg-white/15',
                    ].join(' ')}
                    aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 bottom-0 h-screen">
                    <div className="flex flex-col p-4 gap-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 
                                               hover:bg-blue-50 hover:text-[#0072BB] transition-colors text-base font-medium"
                                >
                                    <Icon size={18} />
                                    {link.label}
                                </a>
                            );
                        })}
                        <div className="pt-4 mt-2 border-t border-gray-100">
                            <a
                                href="https://form.jotform.com/260465222587056"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-4 py-3 bg-[#2E7D33] hover:bg-[#1B5E20] 
                                           text-white font-bold rounded-lg transition-colors"
                            >
                                Solicitar Turno Online
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import FAQSection from './components/FAQSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col font-roboto">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <BenefitsSection />
                <ServicesSection />
                <FAQSection />
                <LocationSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;

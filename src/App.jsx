import { useState } from 'react'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import InfoCallout from './components/InfoCallout'
import MultiStepForm from './components/MultiStepForm'
import SuccessScreen from './components/SuccessScreen'

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSuccess = () => {
        setIsSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gov-bg">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-8">
                <Breadcrumb />

                {!isSubmitted ? (
                    <>
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-gov-text mb-3">
                                Solicitud de Turno para Certificado Único de Discapacidad (CUD)
                            </h1>
                            <p className="text-lg text-gov-text-secondary">
                                Complete el siguiente formulario para iniciar su trámite digital.
                            </p>
                        </div>

                        <InfoCallout />

                        <MultiStepForm onSuccess={handleSuccess} />
                    </>
                ) : (
                    <SuccessScreen />
                )}
            </main>

            <footer className="bg-white border-t border-gov-border mt-16 py-6">
                <div className="max-w-7xl mx-auto px-6 text-center text-gov-text-secondary text-sm">
                    <p>Policlínico Regional San Luis - Gobierno de la Provincia de San Luis</p>
                    <p className="mt-1">Sistema de Trámites Digitales</p>
                </div>
            </footer>
        </div>
    )
}

export default App

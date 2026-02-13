import { AlertCircle } from 'lucide-react'

export default function InfoCallout() {
    return (
        <div
            className="bg-gov-callout border-l-4 border-gov-primary p-6 rounded-r-lg mb-8"
            role="region"
            aria-label="Información importante"
        >
            <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-gov-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                    <h2 className="text-lg font-bold text-gov-text mb-2">
                        ⚠️ Antes de empezar
                    </h2>
                    <p className="text-gov-text leading-relaxed">
                        Asegúrese de tener digitalizados (fotos claras) su <strong>DNI (frente y dorso)</strong> y
                        el <strong>Certificado Médico firmado</strong>. Los necesitará en el último paso.
                    </p>
                </div>
            </div>
        </div>
    )
}

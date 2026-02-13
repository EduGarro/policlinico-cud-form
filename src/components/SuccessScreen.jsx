import { CheckCircle } from 'lucide-react'

export default function SuccessScreen() {
    return (
        <div className="max-w-2xl mx-auto text-center py-12 px-6">
            <div className="mb-8">
                <CheckCircle
                    className="w-24 h-24 text-gov-success mx-auto mb-6"
                    aria-hidden="true"
                />

                <h1 className="text-3xl font-bold text-gov-text mb-4">
                    ✅ ¡Solicitud Recibida con Éxito!
                </h1>
            </div>

            <div className="bg-gov-bg p-8 rounded-lg text-left space-y-4">
                <p className="text-lg text-gov-text leading-relaxed">
                    Hemos recibido sus datos correctamente.
                </p>

                <div className="border-l-4 border-gov-primary pl-4 py-2">
                    <p className="text-gov-text leading-relaxed">
                        <strong>Próximos pasos:</strong>
                    </p>
                    <ul className="mt-2 space-y-2 text-gov-text-secondary">
                        <li className="flex items-start gap-2">
                            <span className="text-gov-primary font-bold">1.</span>
                            <span>Recibirá un <strong>correo electrónico</strong> con los documentos generados</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gov-primary font-bold">2.</span>
                            <span>Luego recibirá un <strong>WhatsApp</strong> con la confirmación de su turno</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gov-primary font-bold">3.</span>
                            <span><strong>No es necesario</strong> que concurra al Policlínico hasta el día del turno</span>
                        </li>
                    </ul>
                </div>

                <p className="text-sm text-gov-text-secondary italic pt-4">
                    Si tiene alguna consulta, puede comunicarse al teléfono del Policlínico Regional San Luis.
                </p>
            </div>
        </div>
    )
}

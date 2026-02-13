import Button from '../Button'

export default function Step2MedicalData({ register, errors, onNext, onPrevious }) {
    return (
        <div className="space-y-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gov-text mb-2">
                    Tipo de Discapacidad y Datos Médicos
                </h2>
                <p className="text-gov-text-secondary">
                    Seleccione el tipo de discapacidad a evaluar y proporcione información médica.
                </p>
            </div>

            <div className="mb-6">
                <label
                    htmlFor="disabilityType"
                    className="block text-gov-text font-medium mb-2 text-base"
                >
                    ¿Qué tipo de discapacidad se va a evaluar?
                    <span className="text-red-600 ml-1" aria-label="requerido">*</span>
                </label>

                <select
                    id="disabilityType"
                    aria-invalid={errors.disabilityType ? 'true' : 'false'}
                    aria-describedby={errors.disabilityType ? 'error-disabilityType' : undefined}
                    className={`
            w-full min-h-touch px-4 py-3 text-base
            border-2 rounded-lg
            transition-colors duration-200
            focus-visible
            ${errors.disabilityType
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-gov-border focus:border-gov-primary'
                        }
            bg-white
          `}
                    {...register('disabilityType', {
                        required: 'Debe seleccionar un tipo de discapacidad'
                    })}
                >
                    <option value="">Seleccione una opción</option>
                    <option value="motora">Motora</option>
                    <option value="visual">Visual</option>
                    <option value="auditiva">Auditiva</option>
                    <option value="mental">Mental</option>
                    <option value="visceral">Visceral / Otra</option>
                </select>

                {errors.disabilityType && (
                    <p
                        id="error-disabilityType"
                        className="mt-2 text-sm text-red-600 flex items-start gap-1"
                        role="alert"
                    >
                        <span aria-hidden="true">⚠</span>
                        {errors.disabilityType.message}
                    </p>
                )}
            </div>

            <div className="mb-6">
                <label
                    htmlFor="diagnosis"
                    className="block text-gov-text font-medium mb-2 text-base"
                >
                    Breve descripción del diagnóstico médico
                    <span className="text-red-600 ml-1" aria-label="requerido">*</span>
                </label>

                <textarea
                    id="diagnosis"
                    rows="5"
                    placeholder="Describa brevemente el diagnóstico médico..."
                    aria-invalid={errors.diagnosis ? 'true' : 'false'}
                    aria-describedby={errors.diagnosis ? 'error-diagnosis' : undefined}
                    className={`
            w-full px-4 py-3 text-base
            border-2 rounded-lg
            transition-colors duration-200
            focus-visible
            resize-y
            ${errors.diagnosis
                            ? 'border-red-500 focus:border-red-600'
                            : 'border-gov-border focus:border-gov-primary'
                        }
            bg-white
          `}
                    {...register('diagnosis', {
                        required: 'La descripción del diagnóstico es requerida',
                        minLength: {
                            value: 20,
                            message: 'Ingrese al menos 20 caracteres'
                        }
                    })}
                />

                {errors.diagnosis && (
                    <p
                        id="error-diagnosis"
                        className="mt-2 text-sm text-red-600 flex items-start gap-1"
                        role="alert"
                    >
                        <span aria-hidden="true">⚠</span>
                        {errors.diagnosis.message}
                    </p>
                )}
            </div>

            <div className="pt-4 flex gap-4">
                <Button
                    type="button"
                    variant="secondary"
                    onClick={onPrevious}
                    className="flex-1"
                >
                    Anterior
                </Button>
                <Button
                    type="button"
                    variant="primary"
                    onClick={onNext}
                    className="flex-1"
                >
                    Siguiente Paso
                </Button>
            </div>
        </div>
    )
}

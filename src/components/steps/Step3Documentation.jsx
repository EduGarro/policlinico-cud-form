import { useState } from 'react'
import { Upload } from 'lucide-react'
import Button from '../Button'

export default function Step3Documentation({ register, errors, onPrevious, onSubmit, isSubmitting }) {
    const [fileName, setFileName] = useState('')

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFileName(file.name)
        }
    }

    return (
        <div className="space-y-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gov-text mb-2">
                    Documentación y Confirmación
                </h2>
                <p className="text-gov-text-secondary">
                    Adjunte el certificado médico y confirme la veracidad de los datos.
                </p>
            </div>

            <div className="mb-6">
                <label
                    htmlFor="medicalCertificate"
                    className="block text-gov-text font-medium mb-2 text-base"
                >
                    Subir foto del Certificado Médico Firmado
                    <span className="text-red-600 ml-1" aria-label="requerido">*</span>
                </label>

                <div className="relative">
                    <input
                        id="medicalCertificate"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        aria-invalid={errors.medicalCertificate ? 'true' : 'false'}
                        aria-describedby={errors.medicalCertificate ? 'error-medicalCertificate' : 'file-help'}
                        className="sr-only"
                        {...register('medicalCertificate', {
                            required: 'Debe adjuntar el certificado médico',
                            onChange: handleFileChange
                        })}
                    />

                    <label
                        htmlFor="medicalCertificate"
                        className={`
              flex items-center justify-center gap-3
              w-full min-h-touch px-4 py-6
              border-2 border-dashed rounded-lg
              cursor-pointer
              transition-all duration-200
              hover:border-gov-primary hover:bg-gov-callout/30
              ${errors.medicalCertificate
                                ? 'border-red-500'
                                : 'border-gov-border'
                            }
            `}
                    >
                        <Upload className="w-6 h-6 text-gov-primary" aria-hidden="true" />
                        <span className="text-gov-text font-medium">
                            {fileName || 'Haga clic para seleccionar archivo'}
                        </span>
                    </label>
                </div>

                <p id="file-help" className="mt-2 text-sm text-gov-text-secondary">
                    Formatos aceptados: JPG, PNG, PDF (máximo 10MB)
                </p>

                {errors.medicalCertificate && (
                    <p
                        id="error-medicalCertificate"
                        className="mt-2 text-sm text-red-600 flex items-start gap-1"
                        role="alert"
                    >
                        <span aria-hidden="true">⚠</span>
                        {errors.medicalCertificate.message}
                    </p>
                )}
            </div>

            <div className="mb-6">
                <div className="flex items-start gap-3 p-4 bg-gov-bg rounded-lg">
                    <input
                        id="declaration"
                        type="checkbox"
                        aria-invalid={errors.declaration ? 'true' : 'false'}
                        aria-describedby={errors.declaration ? 'error-declaration' : undefined}
                        className="mt-1 w-5 h-5 text-gov-primary border-2 border-gov-border rounded focus:ring-2 focus:ring-gov-primary/20 cursor-pointer"
                        {...register('declaration', {
                            required: 'Debe aceptar la declaración jurada'
                        })}
                    />
                    <label
                        htmlFor="declaration"
                        className="text-gov-text text-base cursor-pointer flex-1"
                    >
                        Declaro que los datos ingresados son reales y tienen carácter de
                        <strong> declaración jurada</strong>.
                    </label>
                </div>

                {errors.declaration && (
                    <p
                        id="error-declaration"
                        className="mt-2 text-sm text-red-600 flex items-start gap-1"
                        role="alert"
                    >
                        <span aria-hidden="true">⚠</span>
                        {errors.declaration.message}
                    </p>
                )}
            </div>

            <div className="pt-4 flex gap-4">
                <Button
                    type="button"
                    variant="secondary"
                    onClick={onPrevious}
                    className="flex-1"
                    disabled={isSubmitting}
                >
                    Anterior
                </Button>
                <Button
                    type="submit"
                    variant="success"
                    onClick={onSubmit}
                    loading={isSubmitting}
                    className="flex-1"
                >
                    {isSubmitting ? 'Enviando...' : 'CONFIRMAR SOLICITUD'}
                </Button>
            </div>
        </div>
    )
}

import FormInput from '../FormInput'
import Button from '../Button'

export default function Step1ApplicantData({ register, errors, onNext }) {
    return (
        <div className="space-y-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gov-text mb-2">
                    Datos del Solicitante
                </h2>
                <p className="text-gov-text-secondary">
                    Ingrese sus datos personales de contacto.
                </p>
            </div>

            <FormInput
                label="DNI"
                name="dni"
                type="text"
                placeholder="12345678"
                required
                error={errors.dni}
                register={register('dni', {
                    required: 'El DNI es requerido',
                    pattern: {
                        value: /^[0-9]{7,8}$/,
                        message: 'Ingrese un DNI válido (7 u 8 dígitos)'
                    }
                })}
            />

            <FormInput
                label="Nombre y Apellido Completo"
                name="fullName"
                type="text"
                placeholder="Juan Pérez"
                required
                error={errors.fullName}
                register={register('fullName', {
                    required: 'El nombre completo es requerido',
                    minLength: {
                        value: 3,
                        message: 'Ingrese un nombre válido'
                    }
                })}
            />

            <FormInput
                label="Correo Electrónico"
                name="email"
                type="email"
                placeholder="ejemplo@correo.com"
                required
                error={errors.email}
                register={register('email', {
                    required: 'El correo electrónico es requerido',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ingrese un correo electrónico válido'
                    }
                })}
            />

            <FormInput
                label="Teléfono / WhatsApp"
                name="phone"
                type="tel"
                placeholder="2664123456"
                required
                error={errors.phone}
                register={register('phone', {
                    required: 'El teléfono es requerido',
                    pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: 'Ingrese un teléfono válido (10-15 dígitos)'
                    }
                })}
            />

            <div className="pt-4">
                <Button
                    type="button"
                    variant="primary"
                    onClick={onNext}
                    className="w-full"
                >
                    Siguiente Paso
                </Button>
            </div>
        </div>
    )
}

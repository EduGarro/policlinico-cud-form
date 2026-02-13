export default function FormInput({
    label,
    name,
    type = 'text',
    placeholder,
    error,
    register,
    required = false,
    pattern,
    className = '',
    ...props
}) {
    const inputId = `input-${name}`
    const errorId = `error-${name}`

    return (
        <div className={`mb-6 ${className}`}>
            <label
                htmlFor={inputId}
                className="block text-gov-text font-medium mb-2 text-base"
            >
                {label}
                {required && <span className="text-red-600 ml-1" aria-label="requerido">*</span>}
            </label>

            <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? errorId : undefined}
                className={`
          w-full min-h-touch px-4 py-3 text-base
          border-2 rounded-lg
          transition-colors duration-200
          focus-visible
          ${error
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gov-border focus:border-gov-primary'
                    }
          ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
        `}
                {...register}
                {...props}
            />

            {error && (
                <p
                    id={errorId}
                    className="mt-2 text-sm text-red-600 flex items-start gap-1"
                    role="alert"
                >
                    <span aria-hidden="true">⚠</span>
                    {error.message}
                </p>
            )}
        </div>
    )
}

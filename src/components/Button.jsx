import { Loader2 } from 'lucide-react'

export default function Button({
    children,
    variant = 'primary',
    type = 'button',
    disabled = false,
    loading = false,
    onClick,
    className = '',
    ...props
}) {
    const baseStyles = 'min-h-touch px-8 py-3 rounded-lg font-bold text-base transition-all duration-200 focus-visible disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'

    const variants = {
        primary: 'bg-gov-primary text-white hover:bg-gov-primary/90 active:bg-gov-primary/80',
        secondary: 'bg-gray-200 text-gov-text hover:bg-gray-300 active:bg-gray-400',
        success: 'bg-gov-success text-white hover:bg-gov-success/90 active:bg-gov-success/80 text-lg py-4',
    }

    return (
        <button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {loading && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
            {children}
        </button>
    )
}

import { Check } from 'lucide-react'

export default function ProgressIndicator({ currentStep, totalSteps = 3 }) {
    return (
        <div className="mb-8" role="progressbar" aria-valuenow={currentStep} aria-valuemin="1" aria-valuemax={totalSteps}>
            <p className="text-center text-gov-text-secondary mb-4 font-medium">
                Paso {currentStep} de {totalSteps}
            </p>

            <div className="flex items-center justify-center gap-2">
                {Array.from({ length: totalSteps }, (_, index) => {
                    const stepNumber = index + 1
                    const isCompleted = stepNumber < currentStep
                    const isCurrent = stepNumber === currentStep

                    return (
                        <div key={stepNumber} className="flex items-center">
                            <div
                                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                  transition-all duration-300
                  ${isCompleted ? 'bg-gov-success text-white' : ''}
                  ${isCurrent ? 'bg-gov-primary text-white ring-4 ring-gov-primary/20' : ''}
                  ${!isCompleted && !isCurrent ? 'bg-gray-200 text-gray-500' : ''}
                `}
                                aria-label={`Paso ${stepNumber}${isCompleted ? ' completado' : isCurrent ? ' actual' : ''}`}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
                            </div>

                            {stepNumber < totalSteps && (
                                <div
                                    className={`
                    w-12 h-1 mx-1
                    ${stepNumber < currentStep ? 'bg-gov-success' : 'bg-gray-200'}
                  `}
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

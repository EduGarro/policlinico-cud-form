import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ProgressIndicator from './ProgressIndicator'
import Step1ApplicantData from './steps/Step1ApplicantData'
import Step2MedicalData from './steps/Step2MedicalData'
import Step3Documentation from './steps/Step3Documentation'

export default function MultiStepForm({ onSuccess }) {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        mode: 'onBlur',
        defaultValues: {
            dni: '',
            fullName: '',
            email: '',
            phone: '',
            disabilityType: '',
            diagnosis: '',
            medicalCertificate: null,
            declaration: false,
        }
    })

    const validateAndProceed = async (fields) => {
        const isValid = await trigger(fields)
        if (isValid) {
            setCurrentStep(prev => prev + 1)
        }
    }

    const handleStep1Next = () => {
        validateAndProceed(['dni', 'fullName', 'email', 'phone'])
    }

    const handleStep2Next = () => {
        validateAndProceed(['disabilityType', 'diagnosis'])
    }

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1)
    }

    const onSubmit = async (data) => {
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log('Form Data:', data)

        // TODO: Replace with actual webhook call
        // await fetch('YOUR_N8N_WEBHOOK_URL', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // })

        setIsSubmitting(false)
        onSuccess()
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <ProgressIndicator currentStep={currentStep} totalSteps={3} />

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {currentStep === 1 && (
                    <Step1ApplicantData
                        register={register}
                        errors={errors}
                        onNext={handleStep1Next}
                    />
                )}

                {currentStep === 2 && (
                    <Step2MedicalData
                        register={register}
                        errors={errors}
                        onNext={handleStep2Next}
                        onPrevious={handlePrevious}
                    />
                )}

                {currentStep === 3 && (
                    <Step3Documentation
                        register={register}
                        errors={errors}
                        onPrevious={handlePrevious}
                        onSubmit={handleSubmit(onSubmit)}
                        isSubmitting={isSubmitting}
                    />
                )}
            </form>
        </div>
    )
}

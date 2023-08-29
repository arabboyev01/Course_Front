import DumbReview from '@/components/ReviewStepper/DumbReview'
import React, { useState } from 'react'
import { ChildrenProps } from '@/globalTypes'
import { AppDispatch } from '@/store'
import { useDispatch } from 'react-redux'
import { changeStep } from '@/store/reducerSlice'

const ReviewStepper: React.FC<ChildrenProps> = ({children}) => {

    const dispatch = useDispatch<AppDispatch>()
    const steps = ['Customer', 'Shipping', 'Payment', 'Finish'];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    const setChanges = (curStep: any, steps: string[], setComplete: any, setCurrentStep: any) => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep((prev: any) => prev + 1)
        return dispatch(changeStep(curStep))
    }

    return (
        <DumbReview
            steps={steps}
            currentStep={currentStep}
            complete={complete}
            setComplete={setComplete}
            setCurrentStep={setCurrentStep}
            setChanges={setChanges}
        >
            {children}
        </DumbReview>
    )
}
export default ReviewStepper
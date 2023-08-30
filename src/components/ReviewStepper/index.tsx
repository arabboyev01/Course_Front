import DumbReview from '@/components/ReviewStepper/DumbReview'
import React, { useState } from 'react'
import { ChildrenProps } from '@/globalTypes'
import { AppDispatch } from '@/store'
import { useDispatch } from 'react-redux'
import { changeStep, changeComplete } from '@/store/reducerSlice'

const ReviewStepper: React.FC<ChildrenProps> = ({children}) => {

    const dispatch = useDispatch<AppDispatch>()
    const steps = ['About', 'Photo', 'Tags', 'Finish'];
    const [currentStep, setCurrentStep] = useState(2);
    const [complete, setComplete] = useState<any>(false);

    const setChanges = (curStep: any, steps: string[], setComplete: any, setCurrentStep: any) => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep((prev: any) => prev + 1)
        dispatch(changeStep(curStep))
        dispatch(changeComplete(complete))
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
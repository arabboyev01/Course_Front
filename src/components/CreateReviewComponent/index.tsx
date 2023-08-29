import DumbReview from '@/components/CreateReviewComponent/DumbReview'
import React, { useState } from 'react'
import { ChildrenProps } from '@/globalTypes'

const CreateReviewComponent: React.FC<ChildrenProps> = ({children}) => {
    const steps = ['Customer', 'Shipping', 'Payment', 'Finish'];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    return <DumbReview
        steps={steps}
        currentStep={currentStep}
        complete={complete}
        setComplete={setComplete}
        setCurrentStep={setCurrentStep}>
        {children}
    </DumbReview>
}
export default CreateReviewComponent
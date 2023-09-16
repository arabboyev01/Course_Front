import DumbReview from '@/components/ReviewStepper/DumbReview'
import React from 'react'
import { ReviewFormTypes } from '@/globalTypes'

const ReviewStepper: React.FC<ReviewFormTypes> = ({children, currentStep}) => {

    return (
        <DumbReview currentStep={currentStep}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </DumbReview>
    )
}
export default ReviewStepper
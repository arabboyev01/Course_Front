import React from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep } from '@/store/Selector'
import ReviewStepper from "@/components/ReviewStepper"

const ReviewForm = () => {

    const handleReview = (values: any) => {

    }

    const current = useSelector(CurrStep)

    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} current={current}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
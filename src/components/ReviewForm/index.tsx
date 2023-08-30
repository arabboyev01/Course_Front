import React from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep, IsCompleted } from '@/store/Selector'
import ReviewStepper from "@/components/ReviewStepper"

const ReviewForm = () => {

    const handleReview = (values: any) => {

    }

    const current = useSelector(CurrStep)
    const complete = useSelector(IsCompleted)

    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} current={current} complete={complete}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
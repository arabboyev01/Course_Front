import React, { useState } from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep } from '@/store/Selector'
import ReviewStepper from "@/components/ReviewStepper"

const ReviewForm = () => {

    const [loader, setLoader] = useState(false)
    const handleReview = (values: any) => {

    }

    const current = useSelector(CurrStep)
    console.log(current)


    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} loader={loader} current={current}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
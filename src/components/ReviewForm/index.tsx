import React from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep, image, IsCompleted, tags } from '@/store/Selector'
import ReviewStepper from "@/components/ReviewStepper"

const ReviewForm = () => {

    const current = useSelector(CurrStep)
    const complete = useSelector(IsCompleted)
    const Tags = useSelector(tags)
    const Image = useSelector(image)
    console.log(Image);

    const handleReview = (values: any) => {
        console.log(values)
    }

    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} current={current} complete={complete}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
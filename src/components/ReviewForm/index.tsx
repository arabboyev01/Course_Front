import React from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep, image, IsCompleted, tags } from '@/store/Selector'
import ReviewStepper from "@/components/ReviewStepper"
import { api } from '@/config'

const ReviewForm = () => {

    const current = useSelector(CurrStep)
    const complete = useSelector(IsCompleted)
    const Tags = useSelector(tags)
    const Image = useSelector(image)
    const grade = 5
    const handleReview = (values: any) => {
        console.log(values)
        api.Review("api/review", values, Image, grade, Tags).then((data) => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} current={current} complete={complete}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
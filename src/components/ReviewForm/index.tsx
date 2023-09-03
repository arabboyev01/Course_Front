import React, { useState } from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep, image, tags } from '@/store/Selector'
import ReviewStepper from '@/components/ReviewStepper'
import { api } from '@/config'

const ReviewForm = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const current = useSelector(CurrStep)
    const Tags = useSelector(tags)
    const Image = useSelector(image)
    const grade = 5
    const handleReview = (values: any) => {
        setLoading(true)
        api.Review('api/review', values, Image, grade, Tags).then((data) => {
            console.log(data)// @ts-ignore
            if (data) setSuccess(true)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} current={current} loading={loading} success={success}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
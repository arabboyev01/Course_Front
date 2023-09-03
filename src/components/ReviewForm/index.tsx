import React, { useState } from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep, image, tags } from '@/store/Selector'
import ReviewStepper from '@/components/ReviewStepper'
import { api } from '@/config'
import { useAlert } from 'react-alert'

const ReviewForm = () => {
    const [loading, setLoading] = useState(false)
    const current = useSelector(CurrStep)
    const Tags = useSelector(tags)
    const Image = useSelector(image)
    const alert = useAlert()
    const grade = 5
    const handleReview = (values: any) => {
        setLoading(true)
        api.Review('api/review', values, Image, grade, Tags).then((data) => {
            if (Object.keys(data).length === 0) throw new Error
            else alert.success('Review Created');
        }).catch(err => {
            console.log(err)
            alert.error('Something went wrong!')
        }).finally(() => setLoading(false))
    }

    return (
        <ReviewStepper>
            <Forms handleReview={handleReview} current={current} loading={loading}/>
        </ReviewStepper>
    )
}
export default ReviewForm;
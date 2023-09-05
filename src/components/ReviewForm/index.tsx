import React, { useState } from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { CurrStep, groupName, image, tags } from '@/store/Selector'
import ReviewStepper from '@/components/ReviewStepper'
import { api } from '@/config'
import { useAlert } from 'react-alert'
import { useRouter } from 'next/router'

const ReviewForm = () => {
    const [loading, setLoading] = useState(false)
    const current = useSelector(CurrStep)
    const Tags = useSelector(tags)
    const Image = useSelector(image)
    const GroupName = useSelector(groupName)
    const router = useRouter()
    const alert = useAlert()
    const handleReview = (values: any) => {
        setLoading(true)
        api.Review('api/review', values, Image, Tags, GroupName).then((data) => {
            if (Object.keys(data).length === 0) throw new Error
            else {
                alert.success('Review Created');
                router.push("/")
            }
        }).catch(() => {
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
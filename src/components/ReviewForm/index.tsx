import React, { useState } from 'react'
import Forms from '@/components/ReviewForm/Forms'
import { useSelector } from 'react-redux'
import { adminUserId, groupName, image, mode, tags } from '@/store/Selector'
import ReviewStepper from '@/components/ReviewStepper'
import { useRouter } from 'next/router'
import { handleReview } from '@/components/ReviewForm/PostForm'

const ReviewForm = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const Tags = useSelector(tags)
    const Image = useSelector(image)
    const GroupName = useSelector(groupName)
    const userId = useSelector(adminUserId)
    const theme = useSelector(mode)

    const { id }: any = router.query

    const handlePostReview = (values: any) => {
        handleReview(values, setLoading, Tags, GroupName, router, theme, Image, userId)
    }

    const setChanges = (id: number) => {
        router.replace(`/review-creation/${id}`)
    }

    return (
        <ReviewStepper currentStep={id}>
            <Forms
                handleReview={handlePostReview}
                loading={loading}
                setChanges={setChanges}
                id={id}
            />
        </ReviewStepper>
    )
}
export default ReviewForm;
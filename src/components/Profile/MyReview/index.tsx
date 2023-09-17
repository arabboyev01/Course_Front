import { useEffect, useState } from 'react'
import { api } from '@/config'
import DumbReview from '@/components/ReviewCart/DumbReview'
import { ReviewType } from '@/globalTypes'
import * as React from 'react'
import { useRouter } from 'next/router'

const MyReview = () => {

    const router = useRouter()
    const [review, setReview] = useState<ReviewType[] | null | any>(null)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [loading, setLoading] = useState(false)
    const checkId = (id: number) => {
        window.localStorage.setItem('reviewId', id.toString())
    }
    const setId = (id: number) => {
        router.push(`/edit-review/${id}`)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        setLoading(true)
        api.SingleUser('api/user-review').then((data) => {
            setReview(data)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }, []);


    return <DumbReview
        ReviewsData={review}
        anchorEl={anchorEl}
        handleClick={handleClick}
        setAnchorEl={setAnchorEl}
        loading={loading}
        setId={setId}
        checkId={checkId}
    />
}

export default MyReview
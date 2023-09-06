import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

const ReviewCart = () => {
    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const dispatch = useDispatch<AppDispatch>()

    const fetchReviews = useCallback(async () => {
        try {
            const fetchedUsers = await api.getUsers('api/all-reviews');
            setReviews(fetchedUsers);
        } catch (error) {
            throw error;
        }
    }, [])

    useEffect(() => {
        fetchReviews().then(console.log).catch(err => console.log(err))
    }, [fetchReviews, dispatch]);


    return <DumbReview ReviewsData={reviews} />
}

export default ReviewCart;
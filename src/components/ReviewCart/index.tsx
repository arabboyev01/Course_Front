import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useSelector } from 'react-redux'
import { selectTags } from '@/store/Selector'

const ReviewCart = () => {
    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const [loading, setLoading] = useState(false)
    const selectedTags = useSelector(selectTags)
    const selectedTagsString = JSON.stringify(selectedTags)

    const fetchReviews = useCallback(async () => {
        setLoading(true)
        try {
            const fetchedUsers = await api.getUsers(`api/all-reviews?selectedTags=${selectedTagsString}`);
            setReviews(fetchedUsers);
            setLoading(false)
        } catch (error) {
            throw error;
        }
    }, [selectedTagsString])

    useEffect(() => {
        fetchReviews().then(console.log).catch(err => console.log(err))
    }, [fetchReviews]);


    return <DumbReview ReviewsData={reviews} loading={loading}/>
}

export default ReviewCart;
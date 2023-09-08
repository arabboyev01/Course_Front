import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useDispatch, useSelector } from 'react-redux'
import { selectTags } from '@/store/Selector'
import { quantity } from '@/components/ReviewCart/utils'
import { useRouter } from 'next/router'
import { AppDispatch } from '@/store'
import { reviewDataLength } from '@/store/reducerSlice'

const ReviewCart = () => {
    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const [loading, setLoading] = useState(false)
    const selectedTags = useSelector(selectTags)
    const selectedTagsString = JSON.stringify(selectedTags)
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const navigateSinglePage = (id: number) => {
      router.push(`/single-review/${id}`)
    }

    const fetchReviews = useCallback(async () => {
        setLoading(true)
        try {
            const fetchedUsers = await api.getUsers(`api/all-reviews?selectedTags=${selectedTagsString}`);
            setReviews(fetchedUsers);
            setLoading(false)
            dispatch(reviewDataLength(fetchedUsers?.length))
        } catch (error) {
            throw error;
        }
    }, [selectedTagsString, dispatch])

    useEffect(() => {
        fetchReviews().then(console.log).catch(err => console.log(err))
    }, [fetchReviews]);

    const count = quantity(reviews)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedReview = Array.isArray(reviews) ? reviews.slice(indexOfFirstPost, indexOfLastPost) : null
    const handlePaginateData = (number: any) => {
        setCurrentPage(number)
    }


    return <DumbReview
        ReviewsData={slicedReview}
        loading={loading}
        count={count}
        handlePaginateData={handlePaginateData}
        navigateSinglePage={navigateSinglePage}
    />
}

export default ReviewCart;
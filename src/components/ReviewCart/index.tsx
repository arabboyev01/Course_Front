import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useDispatch, useSelector } from 'react-redux'
import { filterGroup, selectTags } from '@/store/Selector'
import { quantity } from '@/components/ReviewCart/utils'
import { useRouter } from 'next/router'
import { AppDispatch } from '@/store'
import { reviewDataLength } from '@/store/reducerSlice'

const ReviewCart = () => {

    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const [loading, setLoading] = useState(false)
    const selectedTags = useSelector(selectTags)
    const filteredGroup = useSelector(filterGroup);
    const [isLoad, setLoad] = useState(false)

    const selectedTagsString = JSON.stringify(selectedTags)

    const fetchReviews = useCallback(async () => {
        setLoading(true)
        try {
            const fetchedUsers = await api.getUsers(`api/all-reviews?selectedTags=${selectedTagsString}&groupName=${filteredGroup}`);
            setReviews(fetchedUsers);
            setLoading(false)
            dispatch(reviewDataLength(fetchedUsers?.length))
        } catch (error) {
            throw error;
        }
    }, [selectedTagsString, dispatch, filteredGroup, isLoad])

    useEffect(() => {
        fetchReviews().then(console.log).catch(err => console.log(err))
    }, [fetchReviews]);

    const count = quantity(reviews)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedReview = Array.isArray(reviews) ? reviews.slice(indexOfFirstPost, indexOfLastPost) : null
    const handlePaginateData = (number: any) => setCurrentPage(number)
    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)

    const handleLikeReq = (userId: number, reviewId: number) => {
        setLoad(true)
        const payload = {userId, reviewId}
        api.Users("api/likes", payload).then(() => setLoad(false))
            .catch(err => console.log(err))
    }

    console.log(reviews)
    return <DumbReview
        ReviewsData={slicedReview}
        loading={loading}
        count={count}
        handlePaginateData={handlePaginateData}
        navigateSinglePage={navigateSinglePage}
        handleLikeReq={handleLikeReq}
    />
}

export default ReviewCart;
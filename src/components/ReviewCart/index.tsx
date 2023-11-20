import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useDispatch, useSelector } from 'react-redux'
import { selectTags, sortName, filterName, userReviewId, totalLike } from '@/store/Selector'
import { useRouter } from 'next/router'
import { AppDispatch } from '@/store'
import { reviewDataLength, setImageObjects } from '@/store/reducerSlice'
import * as React from 'react'
import { useAlert } from 'react-alert'
import { handleLikeReq } from '@/utils/PostRequest'
import Sorting from '@/components/Sorting'
import { ReviewCartComponent } from '@/components/ReviewCart/style.cart'

const ReviewCart = () => {

    const router = useRouter()
    const alert = useAlert();
    const dispatch = useDispatch<AppDispatch>()

    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const selectedTags = useSelector(selectTags)
    const FilterName = useSelector(filterName);
    const SortName = useSelector(sortName)
    const UserReviewId = useSelector(userReviewId)
    const TotalLike = useSelector(totalLike)

    const selectedTagsString = JSON.stringify(selectedTags)

    const fetchReviews = useCallback(async () => {
        setLoading(true)
        try {
            const fetchedUsers =
                await api.getUsers(
                    `api/all-reviews?selectedTags=${selectedTagsString}&filterName=${FilterName}&&sortName=${SortName}&page=${page}&pageSize=${5}`
                );
            setReviews(fetchedUsers.reviews);
            setLoading(false)
            dispatch(reviewDataLength(fetchedUsers.currentPage))
            setCount(fetchedUsers.totalPages)
        } catch (error) {
            throw error;
        }
    }, [selectedTagsString, dispatch, FilterName, SortName, page])

    useEffect(() => {
        fetchReviews().then(console.log).catch(err => console.log(err))
    }, [fetchReviews]);

    const handlePaginateData = (number: any) => setPage(number)
    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)
    const likeReq = (reviewId: number) => handleLikeReq(reviewId, alert, dispatch)

    const handleImageModal = (imageUrl: string) => {
        const payload: any = {open: true, imageUrl}
        dispatch(setImageObjects(payload))
    }

    return (
        <ReviewCartComponent>
            <Sorting/>
            <DumbReview
                ReviewsData={reviews}
                loading={loading}
                count={count}
                handlePaginateData={handlePaginateData}
                navigateSinglePage={navigateSinglePage}
                handleLikeReq={likeReq}
                UserReviewId={UserReviewId}
                totalLike={TotalLike}
                handleImageModal={handleImageModal}
            />
        </ReviewCartComponent>
    )
}

export default ReviewCart;
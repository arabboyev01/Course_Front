import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useDispatch, useSelector } from 'react-redux'
import { selectTags, sortName, filterName, userReviewId, totalLike, bookmarkReviewId, mode } from '@/store/Selector'
import { useRouter } from 'next/router'
import { AppDispatch } from '@/store'
import { reviewDataLength, setImageObjects } from '@/store/reducerSlice'
import { useAlert } from 'react-alert'
import { handleLikeReq, PostBookmarks } from '@/utils/PostRequest'
import Sorting from '@/components/Sorting'
import { ReviewCartComponent } from '@/components/ReviewCart/style.cart'
import { Themes } from '@pubnub/react-chat-components'

const ReviewCart = () => {

    const router = useRouter()
    const alert = useAlert();
    const dispatch = useDispatch<AppDispatch>()

    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const [count, setCount] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    const selectedTags = useSelector(selectTags)
    const FilterName = useSelector(filterName);
    const SortName = useSelector(sortName)
    const UserReviewId = useSelector(userReviewId)
    const TotalLike = useSelector(totalLike)
    const bookmarkId = useSelector(bookmarkReviewId)
    const selectedTagsString = JSON.stringify(selectedTags)
    const theme: Themes | undefined = useSelector(mode) as Themes | undefined

    const fetchReviews = useCallback(() => {
        setLoading(true)
        api.getUsers(`api/all-reviews?selectedTags=${selectedTagsString}&filterName=${FilterName}&&sortName=${SortName}&page=${page}&pageSize=${5}`)
            .then((data) => {
                setReviews(data.reviews)
                dispatch(reviewDataLength(data.currentPage))
                setCount(data.totalPages)
            }).catch(err => console.log(err)).finally(() => setLoading(false))
    }, [selectedTagsString, dispatch, FilterName, SortName, page])

    useEffect(() => {
        fetchReviews()
    }, [fetchReviews]);

    const handlePaginateData = (number: any) => setPage(number)
    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)
    const likeReq = (reviewId: number) => handleLikeReq(reviewId, alert, dispatch)
    const handleBookmark = (id: number) => PostBookmarks(id, dispatch, theme)
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
                bookmarkId={bookmarkId}
                handleBookmark={handleBookmark}
                theme={theme}
            />
        </ReviewCartComponent>
    )
}

export default ReviewCart;
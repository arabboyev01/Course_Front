import { useEffect, useState } from 'react'
import { api } from '@/config'
import DumbReview from '@/components/ReviewCart/DumbReview'
import { ReviewType } from '@/globalTypes'
import * as React from 'react'
import { useRouter } from 'next/router'
import { StyleReview } from '@/components/Profile/MyReview/style.review'
import Sorting from '@/components/Sorting'
import { useDispatch, useSelector } from 'react-redux'
import { reviewDataLength, setImageObjects } from '@/store/reducerSlice'
import { bookmarkReviewId, filterName, mode, sortName, totalLike, userReviewId } from '@/store/Selector'
import { handleLikeReq, PostBookmarks } from '@/utils/PostRequest'

const MyReview = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const [review, setReview] = useState<ReviewType[] | null | any>(null)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)

    const FilterName = useSelector(filterName);
    const SortName = useSelector(sortName)
    const UserReviewId = useSelector(userReviewId)
    const TotalLike = useSelector(totalLike)
    const theme = useSelector(mode)
    const bookmarkId = useSelector(bookmarkReviewId)

    useEffect(() => {
        setLoading(true)
        api.SingleUser(`api/user-review?selectedTags=${null}&filterName=${FilterName}&&sortName=${SortName}&page=${page}&pageSize=${5}`)
            .then((data) => {
                setReview(data.results);
                dispatch(reviewDataLength(data.results.length))
                setCount(Math.ceil(data.results.length / 5))
            }).catch(err => console.log(err)).finally(() => setLoading(false))
    }, [dispatch, FilterName, SortName, page]);

    const checkId = (id: number) => window.localStorage.setItem('reviewId', id.toString())
    const setId = (id: number) => router.push(`/edit-review/${id}`)
    const handlePaginateData = (number: any) => setPage(number)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)
    const likeReq = (reviewId: number) => {
        handleLikeReq(reviewId, alert, dispatch)
    }
    const handleBookmark = (id: number) => PostBookmarks(id, dispatch, theme)
     const handleImageModal = (imageUrl: string) => {
        const payload = {open: true, imageUrl} //@ts-ignore
        dispatch(setImageObjects(payload))
    }

    return (
        <StyleReview>
            <Sorting/>
            <DumbReview
                ReviewsData={review}
                anchorEl={anchorEl}
                handleClick={handleClick}
                setAnchorEl={setAnchorEl}
                loading={loading}
                setId={setId}
                checkId={checkId}
                edit={true}
                navigateSinglePage={navigateSinglePage}
                count={count}
                handlePaginateData={handlePaginateData}
                handleLikeReq={likeReq}
                UserReviewId={UserReviewId}
                totalLike={TotalLike}
                handleImageModal={handleImageModal}
                bookmarkId={bookmarkId}
                handleBookmark={handleBookmark}
            />
        </StyleReview>
    )
}

export default MyReview
import DumbBookmark from '@/components/Bookmark/DumbBookmark'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { bookmarkReviewId, isLiked, SingleUser, totalLike, userReviewId } from '@/store/Selector'
import { setImageObjects } from '@/store/reducerSlice'
import { handleLikeReq, PostBookmarks } from '@/utils/PostRequest'
import { useRouter } from 'next/router'
import { useAlert } from 'react-alert'

const BookmarkComponent = () => {

    const [bookmark, setBookmark] = useState(null)
    const [loader, setLoader] = useState(false)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)

    const singleUser = useSelector(SingleUser)
    const TotalLike = useSelector(totalLike)
    const UserReviewId = useSelector(userReviewId)
    const bookmarkId = useSelector(bookmarkReviewId)
    const bookmarked = useSelector(isLiked)
    const dispatch = useDispatch()
    const router = useRouter()
    const alert = useAlert();

    useEffect(() => {
        setLoader(true)
        api.getUsers(`api/get-bookmark?userId=${singleUser?.id}`).then(data => {
            setBookmark(data)
            setCount(data.length)
        })
            .catch(err => console.log(err)).then(() => setLoader(false))
    }, [singleUser, page, bookmarked])

    const handleImageModal = (imageUrl: string) => {
        const payload: any = {open: true, imageUrl}
        dispatch(setImageObjects(payload))
    }

    const handlePaginateData = (number: any) => setPage(number)
    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)
    const likeReq = (reviewId: number) => handleLikeReq(reviewId, alert, dispatch)
    const handleBookmark = (id: number) => PostBookmarks(id, alert, dispatch)

    return (
        <DumbBookmark
            bookmark={bookmark}
            loader={loader}
            handleImageModal={handleImageModal}
            navigateSinglePage={navigateSinglePage}
            handlePaginateData={handlePaginateData}
            likeReq={likeReq}
            count={count}
            TotalLike={TotalLike}
            UserReviewId={UserReviewId}
            bookmarkId={bookmarkId}
            handleBookmark={handleBookmark}
        />
    )
}

export default BookmarkComponent
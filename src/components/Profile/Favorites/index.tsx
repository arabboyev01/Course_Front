import DumbFavorite from '@/components/Profile/Favorites/DumbFavorite'
import React, { useEffect, useState } from 'react'
import { api } from '@/config'
import { useRouter } from 'next/router'
import { handleLikeReq } from '@/utils/PostRequest'
import { useDispatch, useSelector } from 'react-redux'
import { isLiked, totalLike, userReviewId } from '@/store/Selector'
import { AppDispatch } from '@/store'
import { setImageObjects } from '@/store/reducerSlice'
import { StyleReview } from '@/components/Profile/MyReview/style.review'
import Sorting from '@/components/Sorting'

const Favorites = () => {
    const [data, setData] = useState(null)
    const router = useRouter();
    const UserReviewId = useSelector(userReviewId)
    const liked = useSelector(isLiked)
    const TotalLike = useSelector(totalLike)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        api.SingleUser('api/single-user-like').then(data => setData(data))
            .catch(err => console.log(err))
    }, [liked])

    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)
    const likeReq = (reviewId: number) => handleLikeReq(reviewId, alert, dispatch)

    const handleImageModal = (imageUrl: string) => {
        const payload = {open: true, imageUrl} //@ts-ignore
        dispatch(setImageObjects(payload))
    }


    return (
        <StyleReview>
            <Sorting/>
            <DumbFavorite
                ReviewsData={data}
                navigateSinglePage={navigateSinglePage}
                likeReq={likeReq}
                UserReviewId={UserReviewId}
                totalLike={TotalLike}
                handleImageModal={handleImageModal}
            />
        </StyleReview>
    )
}

export default Favorites
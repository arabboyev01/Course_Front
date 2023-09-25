import DumbFavorite from '@/components/Profile/Favorites/DumbFavorite'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { useRouter } from 'next/router'
import { handleLikeReq } from '@/utils/PostRequest'
import { useDispatch, useSelector } from 'react-redux'
import { isLiked, userReviewId } from '@/store/Selector'
import { AppDispatch } from '@/store'

const Favorites = () => {
    const [data, setData] = useState(null)
    const router = useRouter();
    const UserReviewId = useSelector(userReviewId)
    const liked = useSelector(isLiked)
     const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        api.SingleUser("api/single-user-like").then(data => setData(data))
            .catch(err => console.log(err))
    }, [liked])

     const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)
    const likeReq = (reviewId: number) => {
        handleLikeReq(reviewId, alert, dispatch)
    }

    return <DumbFavorite ReviewsData={data} navigateSinglePage={navigateSinglePage} likeReq={likeReq} UserReviewId={UserReviewId}/>
}

export default Favorites
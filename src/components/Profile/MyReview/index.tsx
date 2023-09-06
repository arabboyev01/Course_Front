import { useEffect, useState } from 'react'
import { api } from '@/config'
import DumbReview from '@/components/ReviewCart/DumbReview'
import { ReviewType } from '@/globalTypes'

const MyReview = () => {

    const [review, setReview] = useState<ReviewType[] | null | any>(null)
    useEffect(() => {
        api.SingleUser('api/user-review').then((data) => {
            setReview(data)
        }).catch(err => console.log(err))
    }, []);

    return <DumbReview ReviewsData={review}/>
}

export default MyReview
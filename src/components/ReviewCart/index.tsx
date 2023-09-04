import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType, usersType } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { lengthReviews } from '@/store/reducerSlice'

const ReviewCart = () => {
    const [users, setUsers] = useState<usersType | null>(null)
    const [reviews, setReviews] = useState<ReviewType | null>(null)
    const dispatch = useDispatch<AppDispatch>()

    const fetchUsers = useCallback(async () => {
        try {
            const fetchedUsers = await api.getUsers('api/users');
            setUsers(fetchedUsers);
        } catch (error) {
            throw error;
        }
    }, [])

    const fetchReviews = useCallback(async () => {
         try {
            const fetchedUsers = await api.getUsers('api/all-reviews');
            setReviews(fetchedUsers);
        } catch (error) {
            throw error;
        }
    }, [])

    useEffect(() => {
        fetchUsers().then(console.log).catch(err => console.log(err))
        fetchReviews().then(console.log).catch(err => console.log(err))
        if(reviews !== null) { // @ts-ignore
            dispatch(lengthReviews(reviews?.length))
        }
    }, [fetchUsers, fetchReviews]);

    return <DumbReview ReviewsData={reviews} users={users}/>
}

export default ReviewCart
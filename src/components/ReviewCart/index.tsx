import DumbReview from '@/components/ReviewCart/DumbReview'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType, usersType } from '@/globalTypes'

const ReviewCart = () => {
    const [users, setUsers] = useState<usersType | null>(null)
    const [reviews, setReviews] = useState<ReviewType | null>(null)

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
    }, [fetchUsers, fetchReviews]);

    return <DumbReview ReviewsData={reviews} users={users}/>
}

export default ReviewCart
import DumbReview from '@/components/ReviewCart/DumbReview'
import { ReviewsData } from '@/DumbApi'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { usersType } from '@/globalTypes'

const ReviewCart = () => {
    const [users, setUsers] = useState<usersType | null>(null)

    const fetchUsers = useCallback(async () => {
        try {
            const fetchedUsers = await api.getUsers('api/users');
            setUsers(fetchedUsers);
        } catch (error) {
            throw error;
        }
    }, [])

    useEffect(() => {
        fetchUsers().then(console.log).catch(err => console.log(err))
    }, [fetchUsers]);

    return <DumbReview ReviewsData={ReviewsData} users={users}/>
}

export default ReviewCart
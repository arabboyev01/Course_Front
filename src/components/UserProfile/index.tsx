import DumbUserProfile from '@/components/UserProfile/DumbUserProfile'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { UserProfile } from '@/globalTypes'

const UserProfile = () => {
    const router = useRouter()
    const {username} = router.query
    const [data, setData] = useState<UserProfile|null>(null)
    const fetchUserData = useCallback(() => {
        api.getUsers(`api/user-profile?username=${username}`).then(data => setData(data))
            .catch(err => console.log(err))
    }, [username])

    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])

    return <DumbUserProfile username={username} userData={data} />
}
export default UserProfile
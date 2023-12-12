import DumbUserProfile from '@/components/UserProfile/DumbUserProfile'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { UserProfile } from '@/globalTypes'

const UserProfile = () => {
    const router = useRouter()
    const {username} = router.query
    const [data, setData] = useState<UserProfile | null>(null)
    const [checkUser, setCheckUser] = useState(null)
    const fetchUserData = useCallback(() => {
        api.getUsers(`api/user-profile?username=${username}`).then(data => setData(data))
            .catch(err => console.log(err))
    }, [username])

    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])

    useEffect(() => {
        api.getUsers(`api/check-user?username=${username}`)
            .then((data) => setCheckUser(data))
            .catch(err => console.log(err))
    }, [username])

    return <DumbUserProfile username={username} userData={data} checkUser={checkUser}/>
}
export default UserProfile
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { usersType } from '@/globalTypes'
import DumbUsers from '@/components/Profile/Users/DumbUsers'

const Users = () => {
    const [users, setUsers] = useState<usersType[] | []>([])
    useEffect(() => {
        api.getUsers("api/users").then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    return <DumbUsers rows={users}/>
}

export default Users
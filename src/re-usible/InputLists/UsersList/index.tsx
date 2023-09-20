import DumbUserLists from '@/re-usible/InputLists/UsersList/DumbUserList'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserId } from '@/store/reducerSlice'
import { api } from '@/config'
import { usersType } from '@/globalTypes'

const UsersList = () => {
    const [open, setOpen] = useState(false)
    const [userData, setValue] = useState('')
    const [users, setUsers] = useState<null|usersType[]>(null)
    const dispatch = useDispatch()
    const handleInputFocus = (): void => {
        api.SingleUser('api/users').then(data => setUsers(data))
            .catch(err => console.log(err))
        setOpen(true);
    }
    const handleInputBlur = () => setOpen(false)
    const handleTagSelect = (value: any) => {
        const filtered = users?.find((data: usersType) => data.username === value)
        setValue(value)// @ts-ignore
        dispatch(getUserId(filtered.id))
    }

    return <DumbUserLists
        open={open}
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        groupVal={userData}
        handleTagSelect={handleTagSelect}
        users={users}
    />
}

export default UsersList
import DumbPersonalPage from './DumbPersonalPage'
import { api } from '@/config'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { mode, SingleUser } from '@/store/Selector'
import { Toaster } from '@/re-usible/Toaster'

const PersonalPage = () => {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const singleUser = useSelector(SingleUser)
     const theme = useSelector(mode)

    const handleChange = (values: any) => {
        setLoading(true)
        api.UpdateUser('api/update-user', values, singleUser).then(() => {
            Toaster('Data updated!', 'success', 'top-center', theme)
        }).catch(() => Toaster('Something went wrong', 'error', 'top-center', theme)).finally(() => setLoading(false))
    }

    return (
        <DumbPersonalPage
            handleChange={handleChange}
            user={singleUser}
            loading={loading}
            open={open}
            setOpen={setOpen}
        />
    )
}

export default PersonalPage
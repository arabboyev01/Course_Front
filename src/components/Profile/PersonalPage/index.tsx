import DumbPersonalPage from './DumbPersonalPage'
import { api } from '@/config'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useSelector } from 'react-redux'
import { SingleUser } from '@/store/Selector'

const PersonalPage = () => {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const alert = useAlert();
    const singleUser = useSelector(SingleUser)

    const handleChange = (values: any) => {
        setLoading(true)
        api.UpdateUser('api/update-user', values, singleUser).then(() => {
            alert.success('Data updated')
        }).catch(() => alert.error('Something went wrong')).finally(() => setLoading(false))
    }

    return <DumbPersonalPage handleChange={handleChange} user={singleUser} loading={loading} open={open}
                             setOpen={setOpen}/>
}

export default PersonalPage
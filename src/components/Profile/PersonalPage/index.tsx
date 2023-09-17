import DumbPersonalPage from './DumbPersonalPage'
import { api } from '@/config'
import { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'

const PersonalPage = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const alert = useAlert();

    useEffect(() => {
        api.SingleUser("api/single-user").then((data) => setUser(data))
            .catch(err => console.log(err))
    }, []);

    const handleChange = (values: any) => {
        setLoading(true)
        api.UpdateUser("api/update-user", values, user).then(() => {
            alert.success("Data updated")
        }).catch(() => alert.error("Something went wrong")).finally(() => setLoading(false))
    }

    return <DumbPersonalPage handleChange={handleChange} user={user} loading={loading} open={open} setOpen={setOpen}/>
}

export default PersonalPage
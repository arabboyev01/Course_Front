import DumbFavorite from '@/components/Profile/Favorites/DumbFavorite'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { useRouter } from 'next/router'

const Favorites = () => {
    const [data, setData] = useState(null)
    const router = useRouter();

    useEffect(() => {
        api.SingleUser("api/single-user-like").then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
     const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)

    return <DumbFavorite ReviewsData={data} navigateSinglePage={navigateSinglePage}/>
}

export default Favorites
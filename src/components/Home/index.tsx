import DumbHome from '@/components/Home/DumbHome'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'
import { useRouter } from 'next/router'

const Home = () => {

    const [reviews, setReviews] = useState<ReviewType[] | null>(null)
    let selectedTagsString: any = [];
    const router = useRouter()
    const i = JSON.stringify(selectedTagsString)
    let groupName: null = null;

    useEffect(() => {
        api.getUsers(`api/all-reviews?selectedTags=${i}&groupName${groupName}`).then(data => setReviews(data.reverse()))
            .catch(err => console.log(err))
    }, [i, groupName])

    const handleSingleRoute = (id: number) => router.push(`/single-review/${id}`)

    return <DumbHome reviews={reviews} handleSingleRoute={handleSingleRoute}/>
}

export default Home;
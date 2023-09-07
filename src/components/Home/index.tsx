import DumbHome from '@/components/Home/DumbHome'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'

const Home = () => {

    const [reviews, setReviews] = useState<ReviewType[] | null>(null)
    let selectedTagsString: any = [];
    const i = JSON.stringify(selectedTagsString)
    useEffect(() => {
        api.getUsers(`api/all-reviews?selectedTags=${i}`).then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [i])

    return <DumbHome reviews={reviews}/>
}

export default Home;
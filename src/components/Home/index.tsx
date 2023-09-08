import DumbHome from '@/components/Home/DumbHome'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { ReviewType } from '@/globalTypes'

const Home = () => {

    const [reviews, setReviews] = useState<ReviewType[] | null>(null)
    let selectedTagsString: any = [];
    const i = JSON.stringify(selectedTagsString)
    let groupName: null = null;
    useEffect(() => {
        api.getUsers(`api/all-reviews?selectedTags=${i}&groupName${groupName}`).then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [i, groupName])

    return <DumbHome reviews={reviews}/>
}

export default Home;
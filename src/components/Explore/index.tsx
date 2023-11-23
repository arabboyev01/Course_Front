import DumbExplorePage from '@/components/Explore/DumbExplorePage'
import React, { useEffect, useState } from 'react'
import { api } from '@/config'

const ExploreComponent = () => {

    const [exploreData, setExploreData] = useState(null)

    useEffect(() => {
        api.getUsers('api/explore-reviews').then(data => setExploreData(data))
            .catch(err => console.log(err))
    }, [])

    return <DumbExplorePage reviews={exploreData}/>
}

export default ExploreComponent
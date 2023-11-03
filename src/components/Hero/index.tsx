import DumbHero from '@/components/Hero/DumbHero'
import React, { useEffect, useState } from 'react'
import { ReviewType } from '@/globalTypes'
import { api } from '@/config'
import { Router } from '@/utils/router'

const Hero = () => {
    const [reviews, setReviews] = useState<ReviewType[] | null>(null)
    const { handleRoute } = Router()

    const handleDirect = (id: number) => {
        handleRoute(`/single-review/${id}`)
    }

    useEffect(() => {
        api.getUsers(`api/high-rate-review`).then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [])

    return <DumbHero
        handleDirect={handleDirect}
        reviews={reviews}
    />
}

export default Hero
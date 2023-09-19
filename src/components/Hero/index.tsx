import DumbHero from '@/components/Hero/DumbHero'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ReviewType } from '@/globalTypes'
import { api } from '@/config'

const Hero = () => {
    const router = useRouter()
    const [reviews, setReviews] = useState<ReviewType[] | null>(null)

    const handleDirect = (id: number) => {
        router.push(`/single-review/${id}`)
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
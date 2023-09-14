import DumbHero from '@/components/Hero/DumbHero'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ReviewType } from '@/globalTypes'
import { api } from '@/config'

const Hero = () => {
    const router = useRouter()
    const [inputValue, setInputValue] = React.useState('');
    const [reviews, setReviews] = useState<ReviewType[] | null>(null)
    const handleSearchValue = (values: any) => {
        setInputValue(values.search)
    }

    const handleOnchange = (e: string) => {
        setInputValue(e)
    }
    const handleDirect = (id: number) => {
        router.push(`/single-review/${id}`)
        setInputValue('')
    }

    let selectedTagsString: any = [];
    const i = JSON.stringify(selectedTagsString)
    let groupName: null = null;

    useEffect(() => {
        api.getUsers(`api/all-reviews?selectedTags=${i}&groupName${groupName}`).then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [i, groupName])

    return <DumbHero
        inputValue={inputValue}
        handleDirect={handleDirect}
        handleSearchValue={handleSearchValue}
        handleOnchange={handleOnchange}
        reviews={reviews}
    />
}

export default Hero
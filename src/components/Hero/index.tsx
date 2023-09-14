import DumbHero from '@/components/Hero/DumbHero'
import { useRouter } from 'next/router'
import React from 'react'

const Hero = () => {
    const router = useRouter()
    const [inputValue, setInputValue] = React.useState('');
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

    return <DumbHero inputValue={inputValue} handleDirect={handleDirect} handleSearchValue={handleSearchValue} handleOnchange={handleOnchange}/>
}

export default Hero
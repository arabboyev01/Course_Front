import DumbSearch from '@/re-usible/SearchFiled/DumbSearch'
import { useRouter } from 'next/router'
import React from 'react'

const SearchFiled: React.FC = () => {

    const router = useRouter()
     const handleDirect = (id: number) => {
        router.push(`/single-review/${id}`)
        setInputValue('')
    }
    const [inputValue, setInputValue] = React.useState('');

    const handleOnchange = (e: string) => {
        setInputValue(e)
    }


    return <DumbSearch handleOnchange={handleOnchange} inputValue={inputValue} handleDirect={handleDirect}/>
}

export default SearchFiled
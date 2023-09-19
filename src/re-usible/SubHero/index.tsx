import { SearchText, StyledHero } from '@/re-usible/SubHero/style'
import SearchFiled from '@/re-usible/SearchFiled'
import { useState } from 'react'
import { useRouter } from 'next/router'

const SubHero = () => {

    const router = useRouter()
    const [inputValue, setInputValue] = useState('')
    const handleDirect = (id: number) => {
        router.push(`/single-review/${id}`)
        setInputValue('')
    }
    const handleOnchange = (e: any) => setInputValue(e)
    const handleSearchValue = (values: any) => {

    }

    return (
        <StyledHero>
            <SearchText>Search here</SearchText>
            <SearchFiled handleSearchValue={handleSearchValue} handleOnchange={handleOnchange} inputValue={inputValue} handleDirect={handleDirect}/>
        </StyledHero>
    )
}

export default SubHero
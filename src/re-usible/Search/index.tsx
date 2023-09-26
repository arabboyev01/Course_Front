import SearchImage from '../../../public/search.svg'
import Image from 'next/image'
import SearchSuggested from '@/re-usible/Search/SearchSuggested'
import React from 'react';
import { SearchInput, SearchWrapper } from '@/re-usible/Search/style.search'
import { useRouter } from 'next/router'

const Search = () => {
     const router = useRouter()
    const [inputValue, setInputValue] = React.useState("");
    const handleDirect = (id: number) => {
        router.push(`/single-review/${id}`)
        setInputValue("")
    }

    return (
        <SearchWrapper>
            <div className="search-box">
                <button className="btn-search">
                    <Image className="search-icon" src={SearchImage.src} alt="search" width={22} height={22}/>
                </button>
                <SearchInput type="text" value={inputValue} placeholder="Type to Search Review" onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            {inputValue ? <SearchSuggested inputValue={inputValue} handleDirect={handleDirect} /> : null}
        </SearchWrapper>
    )
}

export default Search
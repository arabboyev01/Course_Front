import { StyleSearch } from '@/re-usible/SearchFiled/style.seach'
import { Forms, SearchInput } from './style.seach'
import SearchSuggested from '@/re-usible/Search/SearchSuggested'
import React from 'react'

const DumbSearch: React.FC<any> = ({handleOnchange, inputValue, handleDirect}) => (
    <StyleSearch>
        <Forms>
            <SearchInput placeholder="Type here to search" onChange={(e: any) => handleOnchange(e.target.value)}/>
        </Forms>
        {inputValue ? <SearchSuggested inputValue={inputValue} handleDirect={handleDirect}/> : null}
    </StyleSearch>
)

export default DumbSearch
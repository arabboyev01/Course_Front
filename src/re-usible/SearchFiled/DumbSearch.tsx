import { StyleSearch } from '@/re-usible/SearchFiled/style.seach'
import { Forms, SearchInput, SubmitButton } from './style.seach'
import SearchSuggested from '@/re-usible/Search/SearchSuggested'
import React from 'react'

const DumbSearch: React.FC<any> = ({handleOnchange, inputValue, handleDirect}) => (
    <StyleSearch>
        <Forms>
            <SearchInput placeholder="type here to search" onChange={(e: any) => handleOnchange(e.target.value)}/>
            <SubmitButton type="submit">Search Now</SubmitButton>
        </Forms>
        {inputValue ? <SearchSuggested inputValue={inputValue} handleDirect={handleDirect}/> : null}
    </StyleSearch>
)

export default DumbSearch
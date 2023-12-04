import React, { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { PropsSearch } from '@/globalTypes'
import DumbSearch from '@/re-usible/Search/DumbSearch'
import { removePrevActive } from '@/re-usible/Search/utils'

const SearchSuggested: React.FC<PropsSearch> = ({inputValue, handleDirect}) => {
    const [active, setActive] = useState('')
    const [searchData, setSearchData] = useState(null);

    const [value, setValue] = React.useState({
        name: inputValue,
        username: '',
        latest: ''
    });

    const handleSearch = useCallback(() => {
        api.getUsers(`api/reviews/advanced-search?name=${value.name}&&username=${value.username}&&latest=${value.latest}`)
            .then((res) => setSearchData(res)).catch(err => console.log(err))
    }, [value])

    useEffect(() => {
        handleSearch()
    }, [handleSearch])

    const makeActive = (propertyName: string, value: string) => {
        setActive(propertyName);
        removePrevActive(propertyName, setValue)
        setValue((prevState) => ({...prevState, [propertyName]: value}));
    }
    console.log(value)

    return (
        <DumbSearch
            active={active}
            makeActive={makeActive}
            inputValue={inputValue}
            searchData={searchData}
            handleDirect={handleDirect}
        />
    )
}
export default SearchSuggested;
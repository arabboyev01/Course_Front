import React, { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { PropsSearch } from '@/globalTypes'
import DumbSearch from '@/re-usible/Search/DumbSearch'

const SearchSuggested: React.FC<PropsSearch> = ({inputValue, handleDirect}) => {
    const [active, setActive] = useState('name')
    const [searchData, setSearchData] = useState(null);

    const [value, setValue] = React.useState({
        name: inputValue,
        groupName: '',
        latest: ''
    });

    const handleSearch = useCallback(() => {
        api.getUsers(`api/reviews/advanced-search?name=${value.name}&&groupName=${value.groupName}&&tags=${value.latest}`)
            .then((res) => setSearchData(res))
            .catch(err => console.log(err))
    }, [value])

    useEffect(() => {
        handleSearch()
    }, [handleSearch])


    const makeActive = (propertyName: any, value: string) => {
        setActive(propertyName);
        setValue((prevState) => ({...prevState, [active]: ''}));
        setValue((prevState) => ({...prevState, [propertyName]: value}));
    }

    return <DumbSearch active={active} makeActive={makeActive} inputValue={inputValue} searchData={searchData} handleDirect={handleDirect}/>
}
export default SearchSuggested
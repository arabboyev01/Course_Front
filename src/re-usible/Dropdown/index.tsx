import React, { useState } from 'react'
import DumbDropdown from '@/re-usible/Dropdown/DumbDropdown'
import { Options } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { handleFilterGroup } from '@/store/reducerSlice'

const Dropdown: React.FC<Options> = ({options, firstOption}) => {
    const [selectedOption, setSelectedOption] = useState<string | any>(firstOption);
    const dispatch = useDispatch()

    const handleOptionClick = (option: string) => {
        if(option === firstOption) setSelectedOption(null)
        else setSelectedOption(option);// @ts-ignore
        dispatch(handleFilterGroup(selectedOption))
    };

    return (
        <DumbDropdown
            options={options}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
            firstOption={firstOption}
        />
    )
}

export default Dropdown;
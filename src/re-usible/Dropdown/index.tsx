import React, { useState } from 'react'
import DumbDropdown from '@/re-usible/Dropdown/DumbDropdown'
import { Options } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { handleFilterGroup } from '@/store/reducerSlice'

const Dropdown: React.FC<Options> = ({options, firstOption}) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(firstOption);
    const dispatch = useDispatch()

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);// @ts-ignore
        dispatch(handleFilterGroup(option))
    };

    return (
        <DumbDropdown
            options={options}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
        />
    )
}

export default Dropdown;
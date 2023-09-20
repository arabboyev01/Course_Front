import React from 'react'
import DumbDropdown from '@/re-usible/Dropdown/DumbDropdown'
import { Options } from '@/globalTypes'

const Dropdown: React.FC<Options> = ({options, firstOption, handleOptionClick}) => {

    return <DumbDropdown options={options} handleOptionClick={handleOptionClick} firstOption={firstOption}/>
}

export default Dropdown;
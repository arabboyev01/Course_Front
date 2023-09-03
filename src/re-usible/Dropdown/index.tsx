import React, { useState } from 'react'
import DumbDropdown from '@/re-usible/Dropdown/DumbDropdown'
import { Options } from '@/globalTypes'

const Dropdown: React.FC<Options> = ({options, firstOption}) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(firstOption);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return <DumbDropdown
        options={options}
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
    />
}

export default Dropdown;
import React, { useState } from 'react'
import DumbDropdown from '@/re-usible/Dropdown/DumbDropdown'
import { Options } from '@/globalTypes'

const Dropdown: React.FC<Options> = ({options, firstOption}) => {
    const [selectedOption, setSelectedOption] = useState<string >(firstOption);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return <DumbDropdown
        isOpen={isOpen}
        options={options}
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
        setIsOpen={setIsOpen}
    />
}

export default Dropdown;
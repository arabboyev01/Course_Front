import { DropdownContainer, DropdownHeader, DropdownOptions, DropdownOption } from '@/re-usible/Dropdown/style.dropdown'
import React from 'react'
import { DropdownProps } from '@/globalTypes'

const DumbDropdown:React.FC<DropdownProps> = ({isOpen, options, setIsOpen, selectedOption, handleOptionClick}) => (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <DropdownHeader>
        {selectedOption}
      </DropdownHeader>
      {isOpen && (
        <DropdownOptions>
          {options?.map((option) => (
            <DropdownOption
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownOption>
          ))}
        </DropdownOptions>
      )}
    </DropdownContainer>
)
export default DumbDropdown
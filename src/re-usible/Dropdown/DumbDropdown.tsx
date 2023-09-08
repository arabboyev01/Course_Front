import React from 'react'
import { DropdownProps } from '@/globalTypes'

const DumbDropdown: React.FC<DropdownProps> = ({options, selectedOption, handleOptionClick, firstOption}) => (
    <div className="menu-container">
        <nav>
            <ul className="menu">
                <li className="dropdown dropdown-6">{selectedOption}
                    <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                        <li className="dropdown_item-1" onClick={() => handleOptionClick(firstOption)}>{firstOption}</li>
                        {options?.map((item: any) =>
                            <li className="dropdown_item-1" key={item} onClick={() => handleOptionClick(item)}>{item}</li>
                        )}
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
)
export default DumbDropdown
import React from 'react'
import { DropdownProps } from '@/globalTypes'// @ts-ignore
import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'

const DumbDropdown: React.FC<DropdownProps> = ({options, handleOptionClick, firstOption}) => (
    <SimpleDropdown
        options={options}
        labels={{notSelected: firstOption}}
        clearable
        onChange={handleOptionClick}
        configs={
          { position: { y: 'bottom', x: 'center' } }
        }
      />
)
export default DumbDropdown
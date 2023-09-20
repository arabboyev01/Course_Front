import {
    LeftSide,
    RightSide,
    StyleSorting,
    SubText,
    Times
} from '@/components/Sorting/style.sorting'
import Dropdown from '@/re-usible/Dropdown'
import React from 'react'
import { Options } from '@/globalTypes'
import { filters, options } from '@/Static'

const DumbSorting: React.FC<Options|any> = ({totalReview, handleSort, handleFilter}) => (
    <StyleSorting>
        <LeftSide>
            <SubText>{totalReview} Total reviews</SubText>
        </LeftSide>
        <RightSide>
            <Times>
                <Dropdown options={options} firstOption="Sort" handleOptionClick={handleSort}/>
            </Times>
            <Times>
                <Dropdown options={filters} firstOption="Filter" handleOptionClick={handleFilter}/>
            </Times>
        </RightSide>
    </StyleSorting>
)

export default DumbSorting
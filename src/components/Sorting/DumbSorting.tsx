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

const DumbSorting: React.FC<Options> = ({options, filters, totalReview}) => (
    <StyleSorting>
        <LeftSide>
            <SubText>{totalReview} Total reviews</SubText>
        </LeftSide>
        <RightSide>
            <Times>
                <Dropdown options={options} firstOption="Types"/>
            </Times>
            <Times>
                <Dropdown options={filters} firstOption="Filters"/>
            </Times>
        </RightSide>
    </StyleSorting>
)

export default DumbSorting
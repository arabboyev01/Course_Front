import {
    LeftSide,
    RightSide, SearchIcon, SearchInput,
    SearchWrapper,
    StyleSorting,
    SubText,
    Text,
    Times
} from '@/components/Sorting/style.sorting'
import Dropdown from '@/re-usible/Dropdown'
import React from 'react'
import { Options } from '@/globalTypes'
import AnimationComponent from '@/components/animation'
import SearchJson from '@/AnimationJson/SearchAnimation.json'

const DumbSorting: React.FC<Options> = ({options, filters}) => (
    <StyleSorting>
        <LeftSide>
            <Text>All Reviews</Text>
            <SubText>100 Total</SubText>
        </LeftSide>
        <RightSide>
            <Times>
                <Dropdown options={options} firstOption="Options"/>
            </Times>
            <SearchWrapper>
                <SearchIcon>
                    <AnimationComponent animationData={SearchJson}/>
                </SearchIcon>
                <SearchInput placeholder="Search Reviews"/>
            </SearchWrapper>
            <Times>
                <Dropdown options={filters} firstOption="Filters"/>
            </Times>
        </RightSide>
    </StyleSorting>
)

export default DumbSorting
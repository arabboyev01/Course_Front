import { BodyWrapper, HomeStyle } from '@/components/Home/home.style'
import Sorting from '@/components/Sorting'
import ReviewCart from '@/components/ReviewCart'
import Tags from '@/re-usible/Tags'
import React from 'react'
import Hero from '@/components/Hero'
import Navigator from '@/components/Navigator'

const DumbHome: React.FC = () => (
    <HomeStyle>
        {/*<Hero/>*/}
        {/*<Sorting/>*/}
        <BodyWrapper>
            <Navigator />
            <ReviewCart/>
            <Tags/>
        </BodyWrapper>
    </HomeStyle>
)

export default DumbHome
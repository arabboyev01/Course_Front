import { BodyWrapper, HomeStyle } from '@/components/Home/home.style'
import Sorting from '@/components/Sorting'
import ReviewCart from '@/components/ReviewCart'
import Tags from '@/re-usible/Tags'
import React from 'react'
import Hero from '@/components/Hero'

const DumbHome: React.FC = () => (
    <HomeStyle>
        <Hero/>
        <Sorting/>
        <BodyWrapper>
            <ReviewCart/>
            <Tags/>
        </BodyWrapper>
    </HomeStyle>
)
export default DumbHome
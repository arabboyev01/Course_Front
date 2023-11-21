import { BodyWrapper, HomeStyle } from '@/components/Home/home.style'
import ReviewCart from '@/components/ReviewCart'
import Tags from '@/re-usible/Tags'
import React from 'react'
import Navigator from '@/components/Navigator'

const DumbHome: React.FC = () => (
    <HomeStyle>
        <BodyWrapper>
            <Navigator />
            <ReviewCart/>
            <Tags/>
        </BodyWrapper>
    </HomeStyle>
)

export default DumbHome
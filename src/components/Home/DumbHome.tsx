import { BodyWrapper, HomeStyle } from '@/components/Home/home.style'
import Sorting from '@/components/Sorting'
import ReviewCart from '@/components/ReviewCart'
import Tags from '@/re-usible/Tags'
import Swiper from '@/re-usible/Swiper'
import React from 'react'
import { ReviewType } from '@/globalTypes'

const DumbHome:React.FC<ReviewType[] | null | any> = ({reviews}) => (
    <HomeStyle>
        <Swiper reviews={reviews}/>
        <Sorting/>
        <BodyWrapper>
            <ReviewCart/>
            <Tags/>
        </BodyWrapper>
    </HomeStyle>
)
export default DumbHome;
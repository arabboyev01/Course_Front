import { BodyWrapper, HomeStyle } from '@/components/Home/home.style'
import Sorting from '@/components/Sorting'
import ReviewCart from '@/components/ReviewCart'
import Tags from '@/re-usible/Tags'
import Swiper from '@/re-usible/Swiper'
import React from 'react'
import { ReviewType } from '@/globalTypes'
import Hero from '@/components/Hero'

const DumbHome:React.FC<ReviewType[] | null | any> = ({reviews, handleSingleRoute}) => (
    <HomeStyle>
        {/*<Swiper reviews={reviews} handleSingleRoute={handleSingleRoute}/>*/}
        <Hero />
        <Sorting/>
        <BodyWrapper>
            <ReviewCart/>
            <Tags/>
        </BodyWrapper>
    </HomeStyle>
)
export default DumbHome;
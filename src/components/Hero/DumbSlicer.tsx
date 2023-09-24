import { Content, Time, Images, LoaderCenter, SliderCart, SliderStyled, Title } from '@/components/Hero/slider'
import { ReviewType } from '@/globalTypes'
import React from 'react'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import RatingComponent from '@/re-usible/Rating'
import { formatted } from '@/re-usible/FormattedDate'

const DumbSlicer: React.FC<ReviewType[] | null | any> = ({reviews, handleDirect}) => (
    <SliderStyled>
        {reviews || typeof reviews !== null ? reviews?.map(({id, name, imageUrl, grade, createdAt}: ReviewType) =>
            <SliderCart key={id} onClick={() => handleDirect(id)}>
                <Images src={imageUrl} alt="images"/>
                <Content>
                    <Time>{formatted(createdAt)}</Time>
                    <RatingComponent value={grade} size="small"/>
                    <Title>{name.substring(0, 30)}</Title>
                </Content>
            </SliderCart>
        ) : <LoaderCenter><MainLoader /> </LoaderCenter>}
    </SliderStyled>
)

export default DumbSlicer
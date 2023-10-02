import {
    Content,
    Time,
    Images,
    LoaderCenter,
    SliderCart,
    SliderStyled,
    Title,
    RatingWrapper, Grade
} from '@/components/Hero/slider'
import { ReviewType } from '@/globalTypes'
import React from 'react'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import RatingComponent from '@/re-usible/Rating'
import { formatted } from '@/re-usible/FormattedDate'

const DumbSlicer: React.FC<ReviewType[] | null | any> = ({reviews, handleDirect}) => (
    <SliderStyled>
        {reviews === null || reviews.error ? <LoaderCenter><MainLoader /> </LoaderCenter> :
            reviews?.map(({id, name, imageUrl, grade, createdAt}: ReviewType) =>
            <SliderCart key={id} onClick={() => handleDirect(id)}>
                <Images src={imageUrl} alt="images"/>
                <Content>
                    <Time>{formatted(createdAt)}</Time>
                    <RatingWrapper>
                        <RatingComponent value={grade} size="small"/>
                        <Grade>({grade})</Grade>
                    </RatingWrapper>
                    <Title>{name.substring(0, 30)}</Title>
                </Content>
            </SliderCart>
        )}
    </SliderStyled>
)

export default DumbSlicer
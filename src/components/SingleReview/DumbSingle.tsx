import {
    CenterDiv, Date,
    Description,
    MainImage,
    MainWrapper, RatingText, RatingWrapper,
    StyleSingle,
    Text
} from '@/components/SingleReview/style.single'
import React from 'react'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import RatingGiven from '@/re-usible/Rating/Rated'
import { formatted } from '@/re-usible/FormattedDate'

const DumbSingle = ({single}: any) => (
    <StyleSingle>
        {single === null ?
            <CenterDiv>
                <MainLoader/>
            </CenterDiv> :
            <MainWrapper>
                <MainImage image={single.imageUrl}></MainImage>
                <RatingWrapper>
                    <RatingGiven id={single.id}/>
                    <RatingText>Rate (0)</RatingText>
                </RatingWrapper>
                <Date>{formatted(single.createdAt)}</Date>
                <Text>{single.name}</Text>
                <Description>{single.reviewText}</Description>
            </MainWrapper>
        }
    </StyleSingle>
)

export default DumbSingle;
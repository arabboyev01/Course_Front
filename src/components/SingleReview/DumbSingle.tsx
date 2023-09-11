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
import Comments from '@/re-usible/Comments'

const DumbSingle = ({single}: any) => (
    <StyleSingle>
        {single === null ?
            <CenterDiv>
                <MainLoader/>
            </CenterDiv> :
            <MainWrapper>
                <MainImage image={single.imageUrl}></MainImage>
                <RatingWrapper>
                    <RatingGiven reviewId={single?.id} grade={single.grade}/>
                    <RatingText>({single.grade},0)</RatingText>
                </RatingWrapper>
                <Date>{formatted(single.createdAt)}</Date>
                <Text>{single.name}</Text>
                <Description>{single.reviewText}</Description>
            </MainWrapper>
        }
        <Comments reviewId={single?.id} comments={single?.comments}/>
    </StyleSingle>
)

export default DumbSingle;
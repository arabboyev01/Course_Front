import {
    CenterDiv, Date,
    Description,
    MainImage,
    MainWrapper, RatingText, RatingWrapper,
    StyleSingle, Tags, TagsWrapper,
    Text
} from '@/components/SingleReview/style.single'
import React from 'react'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import RatingGiven from '@/re-usible/Rating/Rated'
import { formatted } from '@/re-usible/FormattedDate'
import Comments from '@/re-usible/Comments'

const DumbSingle = ({single}: any) => (
    <StyleSingle>
        {single === null || single === undefined ?
            <CenterDiv>
                <MainLoader/>
            </CenterDiv> :
            <MainWrapper>
                <MainImage image={single?.imageUrl}></MainImage>
                <RatingWrapper>
                    <RatingGiven reviewId={single?.id} grade={single?.grade}/>
                    <RatingText>({single?.grade},0)</RatingText>
                </RatingWrapper>
                <Date>{formatted(single?.createdAt)}</Date>
                <Text>{single?.name}</Text>
                <Description>{single?.reviewText}</Description>
                <TagsWrapper>
                    {single.tags.map((data: any) =>
                        <Tags key={data.id}>#{data.name}</Tags>
                    )}
                </TagsWrapper>
            </MainWrapper>
        }
        <Comments reviewId={single?.id}/>
    </StyleSingle>
)

export default DumbSingle;
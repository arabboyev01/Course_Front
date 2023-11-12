import React from 'react'
import RatingGiven from '@/re-usible/Rating/Rated'
import { formatted } from '@/re-usible/FormattedDate'
import Comments from '@/re-usible/Comments'
import {
    Date,
    Description,
    MainImage,
    MainWrapper, RatingWrapper,
    StyleSingle, Tags, TagsWrapper,
    Text
} from '@/components/SingleReview/style.single'
import ImageModalComponent from '@/re-usible/ImageModal'
import SkeletonComponent from '@/re-usible/Skeleton'

const DumbSingle: React.FC<any> = ({single, handleImageModal}) => (
    <StyleSingle>
        {single === null || single === undefined ?
            Array.from(new Array(1)).map((_, index: number) => <SkeletonComponent key={index}/>) :
            <MainWrapper>
                <MainImage image={single?.imageUrl} onClick={() => handleImageModal(single?.imageUrl)}></MainImage>
                <ImageModalComponent/>
                <Date>{formatted(single?.createdAt)}</Date>
                <RatingWrapper>
                    <RatingGiven reviewId={single?.id} grade={single?.grade}/>
                </RatingWrapper>
                <Text>{single?.name}</Text>
                <Description>{single?.reviewText}</Description>
                <TagsWrapper>
                    {single?.tags?.map((data: any) =>
                        <Tags key={data.id}>#{data.name}</Tags>
                    )}
                </TagsWrapper>
            </MainWrapper>
        }
        <Comments reviewId={single?.id}/>
    </StyleSingle>
)

export default DumbSingle;
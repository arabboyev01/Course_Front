import {
    CartDetail, CartFooter,
    CartHeader,
    CartWrapper, Center, HeaderWrapper, Images, MainCartWrapper, RatingText, ReadMoreButton, ReviewName,
    StyleCart, Tags, Text,
    User,
    UserName
} from '@/components/ReviewCart/style.cart'
import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import RatingComponent from '@/re-usible/Rating'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import Avatar from '@mui/material/Avatar'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import PaginationRounded from '@/re-usible/Pagination'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const DumbReview: React.FC<ReviewPropsType | any> =
    ({
         ReviewsData,
         loading,
         count,
         handlePaginateData,
         navigateSinglePage,
         handleLikeReq,
     }) => (
        <StyleCart>
            {!ReviewsData || loading ? (<Center><MainLoader/></Center>) :
                <MainCartWrapper>
                    {ReviewsData?.map(({id, name, reviewText, imageUrl, grade, tags, user, likes}: ReviewType) =>
                        <CartWrapper key={id}>
                            <HeaderWrapper>
                                <div></div>
                                <ThumbUpIcon onClick={() => handleLikeReq(id)}
                                             // style={{color: isLiked ? '#308efe' : '#8f8f8f', cursor: 'pointer'}}
                                />
                            </HeaderWrapper>
                            <Images src={imageUrl.src} alt="images"/>
                            <ReviewName>{name}</ReviewName>
                            <CartHeader>
                                <User>
                                    <Avatar src={user?.imageUrl || '/broken-image.jpg'}/>
                                    <UserName>@{user?.username}</UserName>
                                </User>
                                <User>
                                    <RatingText>({grade}.0)</RatingText>
                                    <RatingComponent value={grade} size="small"/>
                                </User>
                            </CartHeader>
                            <CartDetail>
                                <Text>{reviewText}</Text>
                            </CartDetail>
                            <CartFooter>
                                {tags.map(({name, id}: any) =>
                                    <Tags key={id}>#{name}</Tags>
                                )}
                            </CartFooter>
                            <ReadMoreButton
                                onClick={() => navigateSinglePage(id)}
                            >
                                Read more<TrendingFlatIcon/>
                            </ReadMoreButton>
                        </CartWrapper>
                    )}
                </MainCartWrapper>
            }
            <PaginationRounded count={count} handlePaginateData={handlePaginateData}/>
        </StyleCart>
    );

export default DumbReview


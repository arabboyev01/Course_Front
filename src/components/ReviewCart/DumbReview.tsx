import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import RatingComponent from '@/re-usible/Rating'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import Avatar from '@mui/material/Avatar'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PaginationRounded from '@/re-usible/Pagination'
import { formatted } from '@/re-usible/FormattedDate'
import {
    CartDetail,
    CartFooter,
    CartHeader,
    CartWrapper,
    Center,
    ControlButton,
    Dots,
    HeaderWrapper,
    Images, Likes,
    MainCartWrapper, MainLike,
    RatingText,
    ReadMoreButton,
    ReviewName,
    StyleCart,
    Tags,
    Text,
    Time, TotalLike,
    User,
    UserName
} from '@/components/ReviewCart/style.cart'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicPopover from '@/re-usible/Popover'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { handleLikesCounts } from '@/utils/handleLikes'

const DumbReview: React.FC<ReviewPropsType | any> =
    ({ ReviewsData, loading, count, handlePaginateData, navigateSinglePage, handleLikeReq, anchorEl, handleClick, setAnchorEl, setId, checkId, edit, UserReviewId, totalLike}) => (
        <StyleCart>
            {ReviewsData === null || loading || !totalLike ? (<Center><MainLoader/></Center>) :
                <MainCartWrapper>
                    {ReviewsData?.map(({id, name, reviewText, imageUrl, grade, tags, user, createdAt}: ReviewType) =>
                        <CartWrapper key={id}>
                            <HeaderWrapper>
                                <div></div>
                                <ControlButton>
                                    <MainLike>
                                        <Likes onClick={() => handleLikeReq(id)}>
                                            <FavoriteIcon style={{
                                                color: UserReviewId?.includes(id) ? '#bf0000' : '#8f8f8f',
                                                fontSize: '1.7rem'
                                            }}/>
                                        </Likes>
                                        <TotalLike>{handleLikesCounts(totalLike, id)}</TotalLike>
                                    </MainLike>
                                    {edit ?
                                        <Dots onClick={() => checkId(id)}>
                                            <MoreVertIcon onClick={handleClick} sx={{color: "#8f8f8f"}} />
                                            <BasicPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} setId={setId}/>
                                        </Dots> : null
                                    }
                                </ControlButton>
                            </HeaderWrapper>
                            <Images src={imageUrl} alt="images"/>
                            <Time>{formatted(createdAt)}</Time>
                            <CartHeader>
                                <User>
                                    <Avatar src={user?.imageUrl || '/broken-image.jpg'}/>
                                    <UserName>@{user?.username}</UserName>
                                </User>
                                <User>
                                    <RatingComponent value={grade} size="small"/>
                                    <RatingText>({grade})</RatingText>
                                </User>
                            </CartHeader>
                            <ReviewName>{name}</ReviewName>
                            <CartDetail>
                                <Text>{reviewText}</Text>
                            </CartDetail>
                            <CartFooter>
                                {tags?.map(({name, id}: any) =>
                                    <Tags key={id}>#{name}</Tags>
                                )}
                            </CartFooter>
                            <ReadMoreButton onClick={() => navigateSinglePage(id)}>
                                Read more <KeyboardDoubleArrowRightIcon/>
                            </ReadMoreButton>
                        </CartWrapper>
                    )}
                </MainCartWrapper>
            }
            {ReviewsData === null ? null :
                <PaginationRounded count={count} handlePaginateData={handlePaginateData}/>
            }
        </StyleCart>
    );

export default DumbReview


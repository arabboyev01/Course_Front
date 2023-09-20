import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import RatingComponent from '@/re-usible/Rating'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import Avatar from '@mui/material/Avatar'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PaginationRounded from '@/re-usible/Pagination'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
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
    MainCartWrapper,
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
import { handleLikes } from '@/utils/handleLikes'

const DumbReview: React.FC<ReviewPropsType | any> =
    ({
         ReviewsData,
         loading,
         count,
         handlePaginateData,
         navigateSinglePage,
         handleLikeReq,
         anchorEl,
         handleClick,
         setAnchorEl,
         setId, checkId, edit
     }) => (
        <StyleCart>
            {!ReviewsData || loading ? (<Center><MainLoader/></Center>) :
                <MainCartWrapper>
                    {ReviewsData?.map(({id, name, reviewText, imageUrl, grade, tags, user, createdAt, isLiked}: ReviewType) =>
                        <CartWrapper key={id}>
                            <HeaderWrapper>
                                <div></div>
                                <ControlButton>
                                    <Likes onClick={() => handleLikeReq(id)}>
                                        {/*<TotalLike>{likes?.likes?.length}</TotalLike>*/}
                                        <ThumbUpIcon style={{color: isLiked ? 'blue' : '#8f8f8f'}}/>
                                    </Likes>
                                    {edit ?
                                    <Dots onClick={() => checkId(id)}>
                                        <MoreVertIcon onClick={handleClick}/>
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


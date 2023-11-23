import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import RatingComponent from '@/re-usible/Rating'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PaginationRounded from '@/re-usible/Pagination'
import { formatted } from '@/re-usible/FormattedDate'
import {
    CartDetail,
    CartFooter,
    CartHeader,
    CartWrapper,
    ControlButton,
    Dots,
    HeaderWrapper,
    Images, Likes,
    MainCartWrapper, MainLike, Name,
    RatingText,
    ReadMoreButton,
    ReviewName,
    StyleCart,
    Tags,
    Text,
    Time, TotalLike,
    User, UserInfo,
    UserName
} from '@/components/ReviewCart/style.cart'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicPopover from '@/re-usible/Popover'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { handleLikesCounts } from '@/utils/handleLikes'
import SkeletonComponent from '@/re-usible/Skeleton'
import ImageModalComponent from '@/re-usible/ImageModal'
import NoData from '@/re-usible/NoData'
import Avatar from '@mui/material/Avatar'

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
         setId,
         checkId,
         edit,
         UserReviewId,
         totalLike,
         handleImageModal
     }) => (
        <StyleCart>
            {ReviewsData === undefined && <NoData/>}
            {ReviewsData === null || loading || !totalLike ?
                Array.from(new Array(2)).map((_, index: number) => <SkeletonComponent key={index}/>) :
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
                                            <MoreVertIcon onClick={handleClick} sx={{color: '#8f8f8f'}}/>
                                            <BasicPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} setId={setId}/>
                                        </Dots> : null
                                    }
                                </ControlButton>
                            </HeaderWrapper>
                            <Images src={imageUrl} alt="images" onDoubleClick={() => handleLikeReq(id)}
                                    onClick={() => handleImageModal(imageUrl)}/>
                            <ImageModalComponent/>
                            <Time>{formatted(createdAt)}</Time>
                            <CartHeader>
                                <User>
                                    <Avatar src={user?.imageUrl || '/broken-image.jpg'} />
                                    <UserInfo>
                                        <Name>{user?.firstName}</Name>
                                        <UserName>@{user?.username}</UserName>
                                    </UserInfo>
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
            {ReviewsData && <PaginationRounded count={count} handlePaginateData={handlePaginateData}/>}
        </StyleCart>
    );

export default DumbReview
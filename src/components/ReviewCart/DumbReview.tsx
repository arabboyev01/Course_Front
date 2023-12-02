import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PaginationRounded from '@/re-usible/Pagination'
import { formatted } from '@/re-usible/FormattedDate'
import {
    CartDetail,
    CartFooter,
    CartWrapper,
    ControlButton,
    Dots,
    HeaderWrapper,
    Images,
    MainCartWrapper,
    ReadMoreButton,
    ReviewName,
    StyleCart,
    Tags,
    Text,
    Time,
} from '@/components/ReviewCart/style.cart'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicPopover from '@/re-usible/Popover'
import SkeletonComponent from '@/re-usible/Skeleton'
import ImageModalComponent from '@/re-usible/ImageModal'
import NoData from '@/re-usible/NoData'
import HandleLikes from '@/re-usible/Likes'
import CartUser from '@/re-usible/CartUser'

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
         handleImageModal,
         bookmarkId,
        handleBookmark
     }) => (
        <StyleCart>
            {ReviewsData === undefined && <NoData str='No reviews created yet' />}
            {ReviewsData === null || loading || !totalLike ?
                Array.from(new Array(2)).map((_, index: number) => <SkeletonComponent key={index}/>) :
                <MainCartWrapper>
                    {ReviewsData?.map(({id, name, reviewText, imageUrl, grade, tags, user, createdAt}: ReviewType) =>
                        <CartWrapper key={id}>
                            <HeaderWrapper>
                                <div></div>
                                <ControlButton>
                                    <HandleLikes
                                        totalLike={totalLike}
                                        id={id} handleLikeReq={handleLikeReq}
                                        UserReviewId={UserReviewId}
                                        handleBookmark={handleBookmark}
                                        bookmarkId={bookmarkId}
                                    />
                                    {edit &&
                                        <Dots onClick={() => checkId(id)}>
                                            <MoreVertIcon onClick={handleClick} sx={{color: '#8f8f8f'}}/>
                                            <BasicPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} setId={setId}/>
                                        </Dots>
                                    }
                                </ControlButton>
                            </HeaderWrapper>
                            <Images src={imageUrl} alt="images" onDoubleClick={() => handleLikeReq(id)}
                                    onClick={() => handleImageModal(imageUrl)}/>
                            <ImageModalComponent/>
                            <Time>{formatted(createdAt)}</Time>
                            <CartUser user={user} grade={grade}/>
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
            {ReviewsData?.length > 5 && <PaginationRounded count={count} handlePaginateData={handlePaginateData}/>}
        </StyleCart>
    );

export default DumbReview
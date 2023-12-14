import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { formatted } from '@/re-usible/FormattedDate'
import * as S from '@/components/ReviewCart/style.cart'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicPopover from '@/re-usible/Popover'
import ImageModalComponent from '@/re-usible/ImageModal'
import HandleLikes from '@/re-usible/Likes'
import CartUser from '@/re-usible/CartUser'
import ReviewLoads from '@/re-usible/ReviewLoads'

const DumbReview: React.FC<ReviewPropsType | any> =
    ({
         ReviewsData, loading, count, handlePaginateData, navigateSinglePage, handleLikeReq, anchorEl, handleClick,
         setAnchorEl, setId, checkId, edit, UserReviewId, totalLike, handleImageModal, bookmarkId, handleBookmark, theme
     }) => (
        <S.StyleCart>
            <ReviewLoads ReviewsData={ReviewsData} loading={loading} totalLike={totalLike} count={count} handlePaginateData={handlePaginateData}>
                <S.MainCartWrapper>
                    {ReviewsData?.map(({id, name, reviewText, imageUrl, grade, tags, user, createdAt}: ReviewType) =>
                        <S.CartWrapper key={id}>
                            <S.HeaderWrapper>
                                <div></div>
                                <S.ControlButton>
                                    <HandleLikes
                                        totalLike={totalLike}
                                        id={id} handleLikeReq={handleLikeReq}
                                        UserReviewId={UserReviewId}
                                        handleBookmark={handleBookmark}
                                        bookmarkId={bookmarkId}
                                        theme={theme}
                                    />
                                    {edit &&
                                        <S.Dots onClick={() => checkId(id)}>
                                            <MoreVertIcon onClick={handleClick} sx={{color: '#8f8f8f'}}/>
                                            <BasicPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} setId={setId}/>
                                        </S.Dots>
                                    }
                                </S.ControlButton>
                            </S.HeaderWrapper>
                            <S.Images
                                src={imageUrl} alt="images"
                                onDoubleClick={() => handleLikeReq(id)}
                                onClick={() => handleImageModal(imageUrl)}
                            />
                            <ImageModalComponent/>
                            <S.Time>{formatted(createdAt)}</S.Time>
                            <CartUser user={user} grade={grade}/>
                            <S.ReviewName>{name}</S.ReviewName>
                            <S.CartDetail>
                                <S.Text>{reviewText}</S.Text>
                            </S.CartDetail>
                            <S.CartFooter>
                                {tags?.map(({name, id}: any) =>
                                    <S.Tags key={id}>#{name}</S.Tags>
                                )}
                            </S.CartFooter>
                            <S.ReadMoreButton onClick={() => navigateSinglePage(id)}>
                                Read more <KeyboardDoubleArrowRightIcon/>
                            </S.ReadMoreButton>
                        </S.CartWrapper>
                    )}
                </S.MainCartWrapper>
            </ReviewLoads>
        </S.StyleCart>
    )

export default DumbReview
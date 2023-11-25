import { BodyBookmark, BookmarkWrapper, StyleBookmark } from '@/components/Bookmark/style.bookmark'
import React, { FC } from 'react'
import { bookmarkProp } from '@/globalTypes'
import Sorting from '@/components/Sorting'
import DumbReview from '@/components/ReviewCart/DumbReview'
import Navigator from '@/components/Navigator'
import Tags from '@/re-usible/Tags'
import { userValidation } from '@/utils/errors'
import NoData from '@/re-usible/NoData'

const DumbBookmark: FC<bookmarkProp> =
    ({
         bookmark,
         loader,
         handleImageModal,
         navigateSinglePage,
         handlePaginateData,
         likeReq,
         count,
         TotalLike,
         UserReviewId,
         bookmarkId, handleBookmark
     }) => (
        <BookmarkWrapper>
            <BodyBookmark>
                <Navigator/>
                <StyleBookmark>
                    {bookmark === userValidation.emptyBookmark ? <NoData/> :
                        <>
                            <Sorting/>
                            <DumbReview
                                ReviewsData={bookmark}
                                loading={loader}
                                count={count}
                                handlePaginateData={handlePaginateData}
                                navigateSinglePage={navigateSinglePage}
                                handleLikeReq={likeReq}
                                UserReviewId={UserReviewId}
                                totalLike={TotalLike}
                                handleImageModal={handleImageModal}
                                alert={alert}
                                bookmarkId={bookmarkId}
                                handleBookmark={handleBookmark}
                            />
                        </>
                    }
                </StyleBookmark>
                <Tags/>
            </BodyBookmark>
        </BookmarkWrapper>
    )
export default DumbBookmark
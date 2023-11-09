import { NoDataMessage, StyleFavorites } from '@/components/Profile/Favorites/style.favorites'
import DumbReview from '@/components/ReviewCart/DumbReview'
import React from 'react'
import { userValidation } from '@/utils/errors'
import NoData from '@/re-usible/NoData'

const DumbFavorite: React.FC<any> = ({ReviewsData, navigateSinglePage, likeReq, UserReviewId, totalLike, handleImageModal}) => (
    <StyleFavorites>
        {ReviewsData === userValidation.emptyData ?
            <NoDataMessage>
               <NoData/>
            </NoDataMessage>
        :
         <DumbReview
             ReviewsData={ReviewsData}
             navigateSinglePage={navigateSinglePage}
             handleLikeReq={likeReq}
             UserReviewId={UserReviewId}
             totalLike={totalLike}
             handleImageModal={handleImageModal}
         />
        }
    </StyleFavorites>
)

export default DumbFavorite
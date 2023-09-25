import { NoDataMessage, StyleFavorites } from '@/components/Profile/Favorites/style.favorites'
import DumbReview from '@/components/ReviewCart/DumbReview'
import React from 'react'
import { userValidation } from '@/utils/errors'

const DumbFavorite: React.FC<any> = ({ReviewsData, navigateSinglePage, likeReq, UserReviewId}) => (
    <StyleFavorites>
        {ReviewsData === userValidation.emptyData ? <NoDataMessage>There is no favorite reviews</NoDataMessage> :
         <DumbReview ReviewsData={ReviewsData} navigateSinglePage={navigateSinglePage} handleLikeReq={likeReq} UserReviewId={UserReviewId}/>
        }
    </StyleFavorites>
)

export default DumbFavorite
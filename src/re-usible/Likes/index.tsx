import { LikeImage, Likes, MainLike, TotalLike } from '@/components/ReviewCart/style.cart'
import { handleLikesCounts } from '@/utils/handleLikes'
import FilledLike from '../../../public/filled_like.svg'

import React, { FC } from 'react'
import { likeProp } from '@/globalTypes'
import { BookmarkBorderIcon, BookmarkIcon, LikeBorderIcon } from '../../../public/icons'

const HandleLikes: FC<likeProp> = ({totalLike, id, handleLikeReq, UserReviewId, handleBookmark, bookmarkId, theme}) => (
    <MainLike>
        <TotalLike>{handleLikesCounts(totalLike, id)}</TotalLike>
        <Likes onClick={() => handleLikeReq(id)}>
            {UserReviewId?.includes(id) ?
                <LikeImage src={FilledLike.src} alt="filled_bookmark_image"/> :
                <LikeBorderIcon theme={theme}/>
            }
        </Likes>
        <Likes onClick={() => handleBookmark(id)}>
            {bookmarkId?.includes(id) ?
                <BookmarkIcon theme={theme}/> :
                <BookmarkBorderIcon theme={theme}/>
            }
        </Likes>
    </MainLike>
)

export default HandleLikes
import { BookmarkImage, LikeImage, Likes, MainLike, TotalLike, BorderLikeButton } from '@/components/ReviewCart/style.cart'
import { handleLikesCounts } from '@/utils/handleLikes'
import BookmarkBorder from '../../../public/bookmark.svg'
import FilledBookmark from '../../../public/filled-bookmark.svg'
import FilledLike from '../../../public/filled_like.svg'
import BorderLike from '../../../public/like_border.svg'

import React, { FC } from 'react'
import { likeProp } from '@/globalTypes'

const HandleLikes: FC<likeProp> = ({totalLike, id, handleLikeReq, UserReviewId, handleBookmark, bookmarkId}) => (
    <MainLike>
        <TotalLike>{handleLikesCounts(totalLike, id)}</TotalLike>
        <Likes onClick={() => handleLikeReq(id)}>
            {UserReviewId?.includes(id) ?
                <LikeImage src={FilledLike.src} alt="filled_bookmark_image"/> :
                <BorderLikeButton src={BorderLike.src} alt="bookmark_image"/>
            }
        </Likes>
        <Likes onClick={() => handleBookmark(id)}>
            {bookmarkId?.includes(id) ?
                <BookmarkImage src={FilledBookmark.src} alt="filled_bookmark_image"/> :
                <BookmarkImage src={BookmarkBorder.src} alt="bookmark_image"/>
            }
        </Likes>
    </MainLike>
)

export default HandleLikes
import { BookmarkImage, Likes, MainLike, TotalLike } from '@/components/ReviewCart/style.cart'
import { handleLikesCounts } from '@/utils/handleLikes'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkBorder from '../../../public/bookmark.svg'
import FilledBookmark from '../../../public/filled-bookmark.svg'
import React, { FC } from 'react'
import { likeProp } from '@/globalTypes'

const HandleLikes: FC<likeProp> = ({totalLike, id, handleLikeReq, UserReviewId, handleBookmark, bookmarkId}) => (
    <MainLike>
        <TotalLike>{handleLikesCounts(totalLike, id)}</TotalLike>
        <Likes onClick={() => handleLikeReq(id)}>
            <FavoriteIcon style={{
                color: UserReviewId?.includes(id) ? '#bf0000' : '#8f8f8f',
                fontSize: '1.7rem'
            }}/>
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
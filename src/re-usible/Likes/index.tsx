import { Likes, MainLike, TotalLike } from '@/components/ReviewCart/style.cart'
import { handleLikesCounts } from '@/utils/handleLikes'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
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
                <BookmarkIcon style={{color: '#000'}}/> :
                <BookmarkBorderIcon style={{color: '#5b5b5b'}}/>
            }
        </Likes>
    </MainLike>
)

export default HandleLikes
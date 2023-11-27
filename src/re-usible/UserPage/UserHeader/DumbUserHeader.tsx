import {
    MessageBtn, PostNumber,
    Posts,
    UserDetail,
    UserHeaderStyle,
    UserImage,
    Username, UserWrapper
} from '@/re-usible/UserPage/UserHeader/userHeader.style'
import { UserHeaderDumbProp } from '@/globalTypes'
import React, { FC } from 'react'
import userImage from '../../../../public/user.svg'

const DumbUserHeader: FC<UserHeaderDumbProp> = ({userData, handleImageModal, handleRoute, route, singleUser}) => (
    <UserHeaderStyle>
        <UserImage
            src={userData?.imageUrl === null ? userImage.src : userData?.imageUrl}
            alt={userData?.imageUrl}
            onClick={() => handleImageModal(userData?.imageUrl)}
        />
        <UserWrapper>
            <UserDetail>
                <Username>{userData?.username}</Username>
                {route === singleUser?.username ?
                    <MessageBtn onClick={() => handleRoute('/profile')}>Edit profile</MessageBtn> :
                    <React.Fragment>
                        <MessageBtn>Follow</MessageBtn>
                        <MessageBtn onClick={() => handleRoute('/message')}>Message</MessageBtn>
                    </React.Fragment>
                }
            </UserDetail>
            <Posts>
                <PostNumber>{userData?.reviews?.length} posts</PostNumber>
                <PostNumber>0 followers</PostNumber>
                <PostNumber>0 following</PostNumber>
            </Posts>
        </UserWrapper>
    </UserHeaderStyle>
)
export default DumbUserHeader
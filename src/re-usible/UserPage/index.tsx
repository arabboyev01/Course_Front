import UserHeader from '@/re-usible/UserPage/UserHeader'
import React, { FC } from 'react'
import { UserProfileProp } from '@/globalTypes'
import { StyleUserPage } from '@/re-usible/UserPage/style.user.page'
import ImageModalComponent from '@/re-usible/ImageModal'
import UserPostComponent from '@/re-usible/UserPage/UserPost'

const UserPage: FC<UserProfileProp> = ({username, userData}) => {
    return (
        <StyleUserPage>
            <UserHeader userData={userData}/>
            <ImageModalComponent/>
            <UserPostComponent userData={userData}/>
        </StyleUserPage>
    )
}

export default UserPage
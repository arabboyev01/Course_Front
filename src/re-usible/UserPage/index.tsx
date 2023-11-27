import UserHeader from '@/re-usible/UserPage/UserHeader'
import React, { FC } from 'react'
import { UserProfileProp } from '@/globalTypes'
import { StyleUserPage } from '@/re-usible/UserPage/style.user.page'
import ImageModalComponent from '@/re-usible/ImageModal'

const UserPage: FC<UserProfileProp> = ({username, userData}) => {
    return (
        <StyleUserPage>
            <UserHeader userData={userData}/>
            <ImageModalComponent/>
        </StyleUserPage>
    )
}

export default UserPage
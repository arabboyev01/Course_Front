import { ProfileContent, StyleUserProfile } from '@/components/UserProfile/style.user.profile'
import React, { FC } from 'react'
import { UserProfileProp } from '@/globalTypes'
import Navigator from '@/components/Navigator'
import UserPage from '@/re-usible/UserPage'
import NotFound from '@/re-usible/NotFound'

const DumbUserProfile: FC<UserProfileProp> = ({username, userData, checkUser}) => (
    <StyleUserProfile>
        <ProfileContent>
            <Navigator/>
            {checkUser || checkUser === null ? <UserPage username={username} userData={userData}/> : <NotFound username={username}/>}
        </ProfileContent>
    </StyleUserProfile>
)

export default DumbUserProfile
import { ProfileContent, StyleUserProfile } from '@/components/UserProfile/style.user.profile'
import React, { FC } from 'react'
import { UserProfileProp } from '@/globalTypes'
import Navigator from '@/components/Navigator'
import UserPage from '@/re-usible/UserPage'

const DumbUserProfile: FC<UserProfileProp> = ({username, userData}) => (
    <StyleUserProfile>
        <ProfileContent>
            <Navigator />
             <UserPage username={username} userData={userData}/>
        </ProfileContent>
    </StyleUserProfile>
)

export default DumbUserProfile
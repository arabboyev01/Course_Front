import { ProfileContent, StyleUserProfile } from '@/components/UserProfile/style.user.profile'
import React, { FC } from 'react'
import { UserProfileProp } from '@/globalTypes'
import Navigator from '@/components/Navigator'

const DumbUserProfile: FC<UserProfileProp> = ({username, userData}) => (
    <StyleUserProfile>
        <ProfileContent>
            <Navigator />
             {username}
        </ProfileContent>
    </StyleUserProfile>
)

export default DumbUserProfile
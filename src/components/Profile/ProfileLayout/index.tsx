import { ProfileWrapper } from '@/components/Profile/ProfileLayout/style.layout'
import React from 'react'
import { ChildrenProps } from '@/globalTypes'

const ProfileLayout: React.FC<ChildrenProps> = ({children}) => {

    return (
        <ProfileWrapper>
            {children}
        </ProfileWrapper>
    )
}
export default ProfileLayout
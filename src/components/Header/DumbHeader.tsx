import { HeaderContent, LogoImage, LoginButton, StyleHeader } from '@/components/Header/style.header'
import Logo from '../../../public/0001-cropped.svg'
import React from 'react'
import { RoutingType } from '@/globalTypes'
import UserAvatar from '@/re-usible/Avatar'

const DumbHeader: React.FC<RoutingType> = ({handleRouter, Auth}) => (
    <StyleHeader>
        <HeaderContent>
            <LogoImage src={Logo.src} alt="logo"/>
            {!Auth ?
                <LoginButton onClick={handleRouter}>Login</LoginButton> :
                <UserAvatar />
            }
        </HeaderContent>
    </StyleHeader>
)

export default DumbHeader
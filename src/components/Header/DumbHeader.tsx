import { HeaderContent, LogoImage, LoginButton, StyleHeader, Aligned } from '@/components/Header/style.header'
import Logo from '../../../public/icon-light.svg'
import React from 'react'
import { RoutingType } from '@/globalTypes'
import UserAvatar from '@/re-usible/Avatar'
import ToggleButton from '@/Theme/ToggleButton'

const DumbHeader: React.FC<RoutingType> = ({handleRouter, Auth, handleMain}) => (
    <StyleHeader>
        <HeaderContent>
            <LogoImage src={Logo.src} alt="logo" onClick={handleMain}/>
            <Aligned>
                {!Auth ?
                    <LoginButton onClick={handleRouter}>Sign in</LoginButton> :
                    <UserAvatar/>
                }
                <ToggleButton />
            </Aligned>
        </HeaderContent>
    </StyleHeader>
)

export default DumbHeader
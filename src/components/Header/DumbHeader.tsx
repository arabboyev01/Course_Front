import { HeaderContent, LogoImage, LoginButton, StyleHeader, Aligned } from '@/components/Header/style.header'
import Logo from '../../../public/0001-cropped.svg'
import React from 'react'
import { RoutingType } from '@/globalTypes'
import UserAvatar from '@/re-usible/Avatar'
import Search from '@/re-usible/Search'

const DumbHeader: React.FC<RoutingType> = ({handleRouter, Auth, handleMain}) => (
    <StyleHeader>
        <HeaderContent>
            <LogoImage src={Logo.src} alt="logo" onClick={handleMain}/>
            <Aligned>
                <Search />
                {!Auth ?
                    <LoginButton onClick={handleRouter}>Login</LoginButton> :
                    <UserAvatar/>
                }
            </Aligned>
        </HeaderContent>
    </StyleHeader>
)

export default DumbHeader
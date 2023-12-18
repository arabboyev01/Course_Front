import { HeaderContent, LoginButton, StyleHeader, Aligned } from '@/components/Header/style.header'
import React from 'react'
import { RoutingType } from '@/globalTypes'
import UserAvatar from '@/re-usible/Avatar'
import ToggleButton from '@/Theme/ToggleButton'
import { LogoIcon } from '../../../public/icons'

const DumbHeader: React.FC<RoutingType> = ({handleRouter, auth, handleMain, theme}) => (
    <StyleHeader>
        <HeaderContent>
            <LogoIcon theme={theme} onClick={handleMain}/>
            <Aligned>
                <ToggleButton/>
                {!auth ? <LoginButton onClick={handleRouter}>Sign in</LoginButton> : <UserAvatar/>}
            </Aligned>
        </HeaderContent>
    </StyleHeader>
)

export default DumbHeader
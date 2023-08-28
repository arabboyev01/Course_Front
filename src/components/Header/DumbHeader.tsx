import { HeaderContent, LogoImage, LoginButton, StyleHeader } from '@/components/Header/style.header'
import Logo from '../../../public/0001-cropped.svg'
import React from 'react'
import { RoutingType } from '@/globalTypes'

const DumbHeader: React.FC<RoutingType> = ({handleRouter}) => (
    <StyleHeader>
        <HeaderContent>
            <LogoImage src={Logo.src} alt="logo"/>
            <LoginButton onClick={handleRouter}>Login</LoginButton>
        </HeaderContent>
    </StyleHeader>
)

export default DumbHeader
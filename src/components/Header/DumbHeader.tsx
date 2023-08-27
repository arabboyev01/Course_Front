import { HeaderContent, LogoImage, LoginButton, StyleHeader } from '@/components/Header/style.header'
import Logo from '../../../public/0001-cropped.svg'

const DumbHeader = () => (
    <StyleHeader>
        <HeaderContent>
            <LogoImage src={Logo.src} alt="logo"/>
            <LoginButton>Login</LoginButton>
        </HeaderContent>
    </StyleHeader>
)

export default DumbHeader
import { Copyright, IconsWrapper, StyleFooter } from '@/re-usible/Footer/style.footer'
import { Icons } from '@/Static'
import { useRouter } from 'next/router'
const Footer = () => {
    const router = useRouter();
    const handleDirect = (link: string) => router.push(link)

    return (
        <StyleFooter>
            <IconsWrapper>
                {Icons.map((Icon: any) =>
                  <div key={Icon.link} onClick={() => handleDirect(Icon.link)}>{Icon.icon}</div>
                )}
            </IconsWrapper>
            <Copyright>© Copyright 2023, All Rights Reserved</Copyright>
        </StyleFooter>
    )
}

export default Footer
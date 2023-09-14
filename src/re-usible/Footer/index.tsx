import { Copyright, icon, IconsWrapper, StyleFooter } from '@/re-usible/Footer/style.footer'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {

    return (
        <StyleFooter>
            <IconsWrapper>
                <LinkedInIcon sx={icon}/>
                <GitHubIcon sx={icon}/>
                <InstagramIcon sx={icon}/>
                <TwitterIcon sx={icon}/>
            </IconsWrapper>
            <Copyright>© Copyright 2023, All Rights Reserved</Copyright>
        </StyleFooter>
    )
}

export default Footer
import { SideBarNavType } from '@/globalTypes'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import RateReviewIcon from '@mui/icons-material/RateReview'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LogoutIcon from '@mui/icons-material/Logout'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { icon } from '@/re-usible/Footer/style.footer'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
export const sidebarNavItems: SideBarNavType[] = [
    {
        id: 0,
        display: 'Profile',
        icon: <AccountCircleIcon/>,
        to: '/profile',
    },
    {
        id: 1,
        display: 'Reviews',
        icon: <RateReviewIcon/>,
        to: '/profile/reviews',
    },
    {
        id: 2,
        display: 'My Favorites',
        icon: <FavoriteIcon/>,
        to: '/profile/favorites',
    },
    {
        id: 3,
        display: 'Log-out',
        icon: <LogoutIcon/>,
        to: '/',
    }
]

export const searchTitles = [
    {
        name: 'Name',
        value: 'name',
    },
    {
        name: 'Group name',
        value: 'groupName',
    },
    {
        name: 'latest',
        value: 'latest',
    },
]

export const Icons = [
    {
        icon: <LinkedInIcon sx={icon}/>,
        link: 'https://linkedin.com/in/arabboev'
    },
    {
        icon: <GitHubIcon sx={icon}/>,
        link: 'https://github.com/arabboyev01'
    },
    {
        icon: <InstagramIcon sx={icon}/>,
        link: 'https://www.instagram.com/a.arabboev_/'
    },
    {
        icon: <TwitterIcon sx={icon}/>,
        link: 'https://twitter.com/arabboyev_'
    },
]

export const steps = ['About', 'Photo', 'Tags'];
import { SideBarNavType } from '@/globalTypes'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import RateReviewIcon from '@mui/icons-material/RateReview'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LogoutIcon from '@mui/icons-material/Logout'

export const sidebarNavItems: SideBarNavType[] = [
    {
        id: 0,
        display: 'Profile',
        icon: <AccountCircleIcon />,
        to: '/profile',
    },
    {
        id: 1,
        display: 'Reviews',
        icon: <RateReviewIcon />,
        to: '/profile/reviews',
    },
    {
        id: 2,
        display: 'My Favorites',
        icon: <FavoriteIcon />,
        to: '/profile/favorites',
    },
    {
        id: 3,
        display: 'Log-out',
        icon: <LogoutIcon />,
        to: '/',
    }
]
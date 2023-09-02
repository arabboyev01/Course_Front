import { useState } from 'react'
import { useRouter } from 'next/router'
import DumbSidebar from '@/components/Profile/Sidebar/DumbSidebar'
import { SideBarNavType } from '@/globalTypes'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

const sidebarNavItems: SideBarNavType[] = [
    {
        id: 0,
        display: 'Profile',
        icon: <AccountCircleIcon />,
        to: '/profile/',
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
        to: '/profile/favorite',
    },
    {
        id: 3,
        display: 'Log-out',
        icon: <LogoutIcon />,
        to: '/profile/user',
    }
]

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    const handleActive = (id: number, route: string) => {
        setActiveIndex(id)
        router.push(route)
    }

    return <DumbSidebar
        activeIndex={activeIndex}
        sidebarNavItems={sidebarNavItems}
        handleActive={handleActive}
    />
}

export default Sidebar;
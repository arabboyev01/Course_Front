import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import RateReviewIcon from '@mui/icons-material/RateReview'
import LogoutIcon from '@mui/icons-material/Logout'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { icon } from '@/re-usible/Footer/style.footer'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { MainNavigatorTypes } from '@/globalTypes'

export function generateSidebarNavItems(userRole: string | null) {
    const commonItems = [
        {
            id: 0,
            display: 'Profile',
            icon: <AccountCircleIcon/>,
            to: '/profile',
        },
        {
            id: 5,
            display: 'Create Review',
            icon: <AddBoxIcon/>,
            to: '/review-creation/1',
        },
        {
            id: 1,
            display: 'Reviews',
            icon: <RateReviewIcon/>,
            to: '/profile/reviews',
        },
        {
            id: 2,
            display: `My favorites`,
            icon: <ThumbUpIcon/>,
            to: '/profile/single-user-like',
        },
        {
            id: 3,
            display: `Switch to ${userRole === 'ADMIN' ? 'User' : 'Admin'}`,
            icon: <ManageAccountsIcon/>,
            to: '/login',
        },

    ];

    const sidebarNavItems = [...commonItems,
        {
            id: 6,
            display: 'Log-out',
            icon: <LogoutIcon style={{color: '#bf0000', fontWeight: 900}}/>,
            to: '/',
        },
    ];

    if (userRole === 'ADMIN') {
        sidebarNavItems.splice(2, 0, {
            id: 3,
            display: `Users`,
            icon: <GroupIcon/>,
            to: '/profile/users',
        });
    }

    return sidebarNavItems;
}

import HomeIconPng from '../../public/home.svg'
import ExploreIcon from '../../public/compass.svg'
import MessageIcon from '../../public/email.svg'
import ProfileIcon from '../../public/users.svg'
import BookmarkSvg from '../../public/bookmark.svg'
import NotificationIcon from '../../public/notification.svg'
import AddIcon from '../../public/add.svg'


export const searchTitles = [
    {
        name: 'name',
        value: 'name',
    },
    {
        name: 'users',
        value: 'users',
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

export const groups: string[] = ['Movie', 'Book', 'Games']

export const options = [
    {label: 'Default', value: ''},
    {label: 'A->Z', value: 'asc'},
    {label: 'Z->A', value: 'desc'},
];
export const filters = [
    {label: 'Default', value: ''},
    {label: 'Today', value: 'today'},
    {label: 'Week', value: 'week'},
    {label: 'Month', value: 'month'}
];

export const Navigator = (username: string | undefined) => {
    const MainNavigator: MainNavigatorTypes[] = [
        {
            id: 0,
            name: 'Home',
            icon: HomeIconPng,
            route: '/'
        },
        {
            id: 6,
            name: 'Notification',
            icon: NotificationIcon,
            route: '/notification'
        },
        {
            id: 2,
            name: 'Explore',
            icon: ExploreIcon,
            route: '/explore'
        },
        {
            id: 3,
            name: 'Messages',
            icon: MessageIcon,
            route: '/messages'
        },
        {
            id: 1,
            name: 'Bookmark',
            icon: BookmarkSvg,
            route: '/bookmark'
        },
        {
            id: 4,
            name: 'Profile',
            icon: ProfileIcon,
            route: `/${username}`
        },
        {
            id: 5,
            name: 'Add Post',
            icon: AddIcon,
            route: '/review-creation/1'
        }
    ]

    return MainNavigator
}
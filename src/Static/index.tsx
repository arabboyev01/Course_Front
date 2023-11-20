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
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import Person3Icon from '@mui/icons-material/Person3';
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

export const searchTitles = [
    {
        name: 'name',
        value: 'name',
    },
    {
        name: 'groupname',
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

export const MainNavigator: MainNavigatorTypes[] = [
    {
        id: 0,
        name: "Home",
        icon: <HomeIcon />,
        route: "/"
    },
    {
        id: 0,
        name: "Explore",
        icon: <SearchIcon />,
        route: "/explore"
    },
    {
        id: 0,
        name: "Messages",
        icon: <EmailIcon />,
        route: "/messages"
    },
    {
        id: 0,
        name: "Profile",
        icon: <Person3Icon />,
        route: "/profile"
    }
]
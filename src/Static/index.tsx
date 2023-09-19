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
import { GridColDef } from '@mui/x-data-grid'
import { CustomInputCell, renderImageCell } from '@/components/Profile/Users/TableImage'

export function generateSidebarNavItems(userRole: string | null) {
    const commonItems = [
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
            id: 3,
            display: `Switch to ${userRole === 'ADMIN' ? 'User' : 'Admin'}`,
            icon: <ManageAccountsIcon/>,
            to: '/login',
        },

    ];

    const sidebarNavItems = [...commonItems,
        {
            id: 4,
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

export const groups: string[] = ['Movie', 'Book', 'Games']

export const usersTableColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'imageUrl', headerName: 'Image', width: 150, renderCell: renderImageCell},
    {field: 'firstName', headerName: 'First name', width: 130},
    {field: 'lastName', headerName: 'Last name', width: 130},
    {field: 'username', headerName: 'Username', width: 180},
    {field: 'userType', headerName: 'User Type', width: 180, editable: true}
];
import { useRouter } from 'next/router'
import DumbSidebar from '@/components/Profile/Sidebar/DumbSidebar'
import { useAlert } from 'react-alert'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateSidebarNavItems } from '@/Static'
import { SingleUser } from '@/store/Selector'
import { AppDispatch } from '@/store'
import { logOut, handleLiked } from '@/store/reducerSlice'

const Sidebar = () => {

    const router = useRouter();
    const pathname = router.pathname;
    const alert = useAlert()
    const [open, setOpen] = useState(true)
    const singleUser = useSelector(SingleUser)
    const dispatch = useDispatch<AppDispatch>()

    const handleActive = (route: string) => {
        if (route === '/') {
            dispatch(handleLiked())
            dispatch(logOut())
            alert.info('Logged out')
        }
        router.replace(route)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const sidebarDumb = generateSidebarNavItems(singleUser === null ? 'USER' : singleUser?.userType)

    return <DumbSidebar
        pathname={pathname}
        handleActive={handleActive}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        sidebarDumb={sidebarDumb}
    />
}

export default Sidebar;
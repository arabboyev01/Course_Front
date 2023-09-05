import { useRouter } from 'next/router'
import DumbSidebar from '@/components/Profile/Sidebar/DumbSidebar'
import { removeTokenFromCookie } from '@/utils/setCookie'
import { sidebarNavItems } from '@/Static'
import { useAlert } from 'react-alert'
import { useState } from 'react'

const Sidebar = () => {

    const router = useRouter();
    const pathname = router.pathname;
    const alert = useAlert()
    const [open, setOpen] = useState(true)
    const handleActive = (route: string) => {
        if (route === '/') {
            removeTokenFromCookie();
            alert.info("Logged out");
        }
        router.push(route)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return <DumbSidebar
        pathname={pathname}
        sidebarNavItems={sidebarNavItems}
        handleActive={handleActive}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
    />
}

export default Sidebar;
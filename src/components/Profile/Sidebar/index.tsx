import { useRouter } from 'next/router'
import DumbSidebar from '@/components/Profile/Sidebar/DumbSidebar'
import { removeTokenFromCookie } from '@/utils/setCookie'
import { useAlert } from 'react-alert'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateSidebarNavItems } from '@/Static'
import { api } from '@/config'
import { singleUser } from '@/store/reducerSlice'
import { usersType } from '@/globalTypes'

const Sidebar = () => {

    const router = useRouter();
    const pathname = router.pathname;
    const alert = useAlert()
    const [open, setOpen] = useState(true)
    const dispatch = useDispatch()
    const [single, setSingle] = useState<null|usersType>(null)

    useEffect(() => {
        api.SingleUser("api/single-user").then((data) => {
            setSingle(data)
            dispatch(singleUser(data))
        }).catch(err => console.log(err))
    }, [dispatch]);


    const handleActive = (route: string) => {
        if (route === '/') {
            removeTokenFromCookie();
            alert.info("Logged out")
        }
         router.replace(route)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const sidebarDumb = generateSidebarNavItems(single === null ? "USER" : single?.userType)

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
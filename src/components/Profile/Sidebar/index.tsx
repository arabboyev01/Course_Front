import { useRouter } from 'next/router'
import DumbSidebar from '@/components/Profile/Sidebar/DumbSidebar'
import { removeTokenFromCookie } from '@/utils/setCookie'
import { sidebarNavItems } from '@/Static'

const Sidebar = () => {

    const router = useRouter();
    const pathname = router.pathname;

    const handleActive = (route: string) => {
        if (route === '/') removeTokenFromCookie();
        router.push(route)
    }

    return <DumbSidebar
        pathname={pathname}
        sidebarNavItems={sidebarNavItems}
        handleActive={handleActive}
    />
}

export default Sidebar;
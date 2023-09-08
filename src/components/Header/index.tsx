import DumbHeader from '@/components/Header/DumbHeader'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Authorized } from '@/store/Selector'


const Header = () => {

    const router = useRouter();
    const Auth = useSelector(Authorized);
    const handleRouter = () => router.push("/login");
    const handleMain = () => router.push("/")

    return <DumbHeader handleRouter={handleRouter} Auth={Auth} handleMain={handleMain} />
}

export default Header;
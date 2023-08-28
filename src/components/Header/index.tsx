import DumbHeader from '@/components/Header/DumbHeader'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Authorized } from '@/store/Selector'

const Header = () => {

    const router = useRouter();
    const Auth = useSelector(Authorized);
    const handleRouter = () => router.push("/login");

    return <DumbHeader handleRouter={handleRouter} Auth={Auth}/>
}

export default Header;
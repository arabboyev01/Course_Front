import DumbHeader from '@/components/Header/DumbHeader'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter();
    const handleRouter = () => router.push("/login");

    return <DumbHeader handleRouter={handleRouter}/>
}

export default Header;
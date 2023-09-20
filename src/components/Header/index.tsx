import DumbHeader from '@/components/Header/DumbHeader'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Authorized } from '@/store/Selector'
import { useEffect } from 'react'
import { api } from '@/config'
import { singleUser } from '@/store/reducerSlice'


const Header = () => {

    const router = useRouter();
    const Auth = useSelector(Authorized);
    const dispatch = useDispatch()
    const handleRouter = () => router.push("/login");
    const handleMain = () => router.push("/")

    useEffect(() => {
        api.SingleUser("api/single-user").then((data) => dispatch(singleUser(data)))
            .catch(err => console.log(err))
    }, [dispatch]);

    return <DumbHeader handleRouter={handleRouter} Auth={Auth} handleMain={handleMain} />
}

export default Header;
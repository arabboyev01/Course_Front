import MainContent from '@/components/Profile/MainContent'
import { useSelector } from 'react-redux'
import { Authorized } from '@/store/Selector'
import Login from '@/components/Login'

export default function Profile() {

    const isAuth = useSelector(Authorized);

    return isAuth ? <MainContent/> : <Login/>
}
import DumbLogin from '@/components/Login/DumbLogin'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { LoginUsersType } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { setToken } from '@/store/reducerSlice'

const LoginComponent = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()

    const loginRoute = () => router.push('/sign-up')
    const handleLogin = (values: LoginUsersType) => {
        api.Users('api/login', values).then(data => {
            dispatch(setToken(data.token));
            router.push('/');
        })
            .catch(err => console.log(err))
    }

    return <DumbLogin handleLogin={handleLogin} loginRoute={loginRoute}/>
}
export default LoginComponent;
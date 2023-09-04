import DumbLogin from '@/components/Login/DumbLogin'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { LoginUsersType } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { setToken } from '@/store/reducerSlice'
import { useState } from 'react'
import { useAlert } from 'react-alert';

const LoginComponent = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const [loader, setLoader] = useState(false)
    const alert = useAlert();

    const loginRoute = () => router.push('/sign-up')
    const handleLogin = (values: LoginUsersType) => {
        setLoader(true)
        api.Users('api/login', values).then(data => {
            if (data?.error) throw new Error
            if (data) alert.success('Logged In!');
            dispatch(setToken(data.token));
            router.push('/');
        }).catch(() => {
            alert.error('username or password is wrong!')
        }).finally(() => setLoader(false))
    }

    const GithubSign = () => {
        const GITHUB_CLIENT_ID = 'aa74f754bd9f3616aaa2';
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
    }

    return <DumbLogin handleLogin={handleLogin} loginRoute={loginRoute} loader={loader} GithubSign={GithubSign}/>
}
export default LoginComponent;
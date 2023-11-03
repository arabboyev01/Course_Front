import DumbLogin from '@/components/Login/DumbLogin'
import { api } from '@/config'
import { LoginUsersType } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { setToken, verifyUser } from '@/store/reducerSlice'
import { useState } from 'react'
import { useAlert } from 'react-alert';
import { CustomError, userValidation } from '@/utils/errors'
import { Router } from '@/utils/router'

const LoginComponent = () => {

    const { handleRoute } = Router()
    const dispatch = useDispatch<AppDispatch>()
    const [loader, setLoader] = useState(false)
    const alert = useAlert();

    const loginRoute = () => handleRoute('/sign-up')
    const handleLogin = (values: LoginUsersType) => {
        setLoader(true)
        api.Users('api/login', values).then(data => {
            if(data === userValidation.blockedUser) throw new CustomError("CustomError")
            if (data?.error) throw new Error("Login error")
            if (data) alert.success('Logged In!');
            dispatch(setToken(data.token));
            dispatch(verifyUser())
            handleRoute('/');
        }).catch((err) => {
            if(err.name === "CustomError") alert.info(userValidation.blockedUser)
            else alert.error('username or password is wrong!')
        }).finally(() => setLoader(false))
    }

    const GithubSign = () => {
        const GITHUB_CLIENT_ID = 'aa74f754bd9f3616aaa2';
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
    }

    return <DumbLogin handleLogin={handleLogin} loginRoute={loginRoute} loader={loader} GithubSign={GithubSign}/>
}
export default LoginComponent;
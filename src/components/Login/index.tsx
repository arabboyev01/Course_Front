import DumbLogin from '@/components/Login/DumbLogin'
import { api } from '@/config'
import { LoginUsersType } from '@/globalTypes'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store'
import { setToken, verifyUser } from '@/store/reducerSlice'
import { useState } from 'react'
import { CustomError, userValidation } from '@/utils/errors'
import { Router } from '@/utils/router'
import { Toaster } from '@/re-usible/Toaster'
import { mode } from '@/store/Selector'

const LoginComponent = () => {

    const { handleRoute } = Router()
    const dispatch = useDispatch<AppDispatch>()
    const [loader, setLoader] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false)
    const theme = useSelector(mode)

    const loginRoute = () => handleRoute('/sign-up')
    const handleLogin = (values: LoginUsersType) => {
        setLoader(true)
        api.Users('api/login', values).then(data => {
            if(data === userValidation.blockedUser) throw new CustomError("CustomError")
            if (data?.error) throw new Error("Login error")
            if(data) Toaster('Logged in!', 'success', 'bottom-center', theme)
            dispatch(setToken(data.token));
            dispatch(verifyUser())
            handleRoute('/');
        }).catch((err) => {
            if(err.name === "CustomError") Toaster(userValidation.blockedUser, 'info', 'bottom-center', theme)
            else Toaster('username or password is wrong!!', 'error', 'bottom-center', theme)
        }).finally(() => setLoader(false))
    }

    const GithubSign = () => {
        const GITHUB_CLIENT_ID = 'aa74f754bd9f3616aaa2';
        window.location.assign(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
    }

    const togglePassword = () => setShowPassword(!showPassword)

    return <DumbLogin
        handleLogin={handleLogin}
        loginRoute={loginRoute}
        loader={loader}
        GithubSign={GithubSign}
        showPassword={showPassword}
        togglePassword={togglePassword}
        theme={theme}
    />
}
export default LoginComponent;
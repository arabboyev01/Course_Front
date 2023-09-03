import DumbSignUp from '@/components/SignUp/DumbSignUp'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { SignUpUsersTypes } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { setToken } from '@/store/reducerSlice'
import { useState } from 'react'
import { useAlert } from 'react-alert'

const SignUpComponent = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const [loader, setLoader] = useState(false)
    const alert = useAlert()
    const signUpRoute = () => router.push('/login');
    const handleSignUp = (values: SignUpUsersTypes) => {
        setLoader(true)
        api.Users('api/register', values).then(data => {
            if(data) alert.success("Account Created")
            dispatch(setToken(data.token))
            router.push('/');
        })
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }

    return <DumbSignUp handleSignUp={handleSignUp} signUpRoute={signUpRoute} loader={loader}/>
}

export default SignUpComponent;
import DumbSignUp from '@/components/SignUp/DumbSignUp'
import { useRouter } from 'next/router'
import { api } from '@/config'
import { SignUpUsersTypes } from '@/globalTypes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { setToken } from '@/store/reducerSlice'

const SignUpComponent = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const signUpRoute = () => router.push('/login');
    const handleSignUp = (values: SignUpUsersTypes) => {
        api.Users('api/register', values).then(data => {
            dispatch(setToken(data.token))
            router.push('/');
        })
            .catch(err => console.log(err))
    }

    return <DumbSignUp handleSignUp={handleSignUp} signUpRoute={signUpRoute}/>
}

export default SignUpComponent;
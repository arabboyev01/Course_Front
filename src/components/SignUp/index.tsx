import DumbSignUp from '@/components/SignUp/DumbSignUp'
import { useRouter } from 'next/router'

const SignUpComponent = () => {

    const router = useRouter();

    const signUpRoute = () => router.push("/login")
    const handleSignUp = (values: any) => {}


    return <DumbSignUp handleSignUp={handleSignUp} signUpRoute={signUpRoute}/>
}

export default SignUpComponent;
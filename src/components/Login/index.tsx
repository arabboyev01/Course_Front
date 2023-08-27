import DumbLogin from '@/components/Login/DumbLogin'
import { useRouter } from 'next/router'

const LoginComponent = () => {

    const router = useRouter();

    const loginRoute = () => router.push("/sign-up")
    const handleLogin = (values: any) => {
        console.log(values)
    }
    return <DumbLogin handleLogin={handleLogin} loginRoute={loginRoute}/>
}
export default LoginComponent;
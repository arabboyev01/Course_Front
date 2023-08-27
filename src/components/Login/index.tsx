import DumbLogin from '@/components/Login/DumbLogin'

const LoginComponent = () => {

    const handleLogin = (values: any) => {
        console.log(values)
    }
    return <DumbLogin handleLogin={handleLogin}/>
}
export default LoginComponent;
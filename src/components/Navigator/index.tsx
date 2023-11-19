import DumbNavigatorComponent from '@/components/Navigator/DumbNavigatorComponent'
import { useRouter } from 'next/router'
import { Router } from '@/utils/router'

const Navigator = () => {
    const router = useRouter()
    const { handleRoute } = Router()

    return <DumbNavigatorComponent pathname={router.pathname} handleRoute={handleRoute}/>
}

export default Navigator
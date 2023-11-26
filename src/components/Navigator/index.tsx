import DumbNavigatorComponent from '@/components/Navigator/DumbNavigatorComponent'
import { useRouter } from 'next/router'
import { Router } from '@/utils/router'
import { useSelector } from 'react-redux'
import { SingleUser } from '@/store/Selector'

const Navigator = () => {
    const router = useRouter()
    const { handleRoute } = Router()
    const singleUser = useSelector(SingleUser)

    return <DumbNavigatorComponent
        pathname={router.pathname}
        handleRoute={handleRoute}
        singleUser={singleUser}
    />
}

export default Navigator
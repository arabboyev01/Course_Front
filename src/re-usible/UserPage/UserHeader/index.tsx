import DumbUserHeader from '@/re-usible/UserPage/UserHeader/DumbUserHeader'
import { FC } from 'react'
import { UserHeaderProp } from '@/globalTypes'
import { setImageObjects } from '@/store/reducerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Router } from '@/utils/router'
import { SingleUser } from '@/store/Selector'

const UserHeader: FC<UserHeaderProp> = ({userData}) => {
    const dispatch = useDispatch()
    const { handleRoute , router} = Router()
     const singleUser = useSelector(SingleUser)
     const handleImageModal = (imageUrl: string|undefined) => {
        const payload: any = {open: true, imageUrl}
        dispatch(setImageObjects(payload))
    }

    return <DumbUserHeader
        userData={userData}
        handleImageModal={handleImageModal}
        handleRoute={handleRoute}
        route={router?.query?.username}
        singleUser={singleUser}
    />
}
export default UserHeader
import DumbUserCart from '@/re-usible/UsersCart/DumbUserCart'
import { FC } from 'react'
import { userCartProp } from '@/globalTypes'

const UsersCart: FC<userCartProp> = ({userData, handleRoute}) => {

    return <DumbUserCart userData={userData} handleRoute={handleRoute}/>
}

export default UsersCart
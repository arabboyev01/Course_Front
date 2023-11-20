import DumbUserCart from '@/re-usible/UsersCart/DumbUserCart'
import { FC } from 'react'
import { userCartProp } from '@/globalTypes'

const UsersCart: FC<userCartProp> = ({userData}) => {

    return <DumbUserCart userData={userData}/>
}

export default UsersCart
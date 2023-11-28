import DumbUserPostComponent from '@/re-usible/UserPage/UserPost/DumbUserPostComponent'
import { FC } from 'react'
import { UserHeaderProp } from '@/globalTypes'

const UserPostComponent: FC<UserHeaderProp> = ({userData}) => {

    return <DumbUserPostComponent userData={userData}/>
}
export default UserPostComponent
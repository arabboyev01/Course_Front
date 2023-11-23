import { ContentWrapper, FullName, StyleCart, Username } from '@/re-usible/UsersCart/style.cart'
import { FC } from 'react'
import { userCartProp } from '@/globalTypes'
import UserAvatar from '@/re-usible/Avatar'

const DumbUserCart: FC<userCartProp> = ({userData}) => (
    <StyleCart>
        <UserAvatar/>
        <ContentWrapper>
            <Username>{userData?.username}</Username>
            <FullName>{userData?.firstName}</FullName>
        </ContentWrapper>
    </StyleCart>
)

export default DumbUserCart
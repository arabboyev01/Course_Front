import { ContentWrapper, FullName, MainWrapper, StyleCart, Username } from '@/re-usible/UsersCart/style.cart'
import { FC } from 'react'
import { userCartProp } from '@/globalTypes'

const DumbUserCart: FC<userCartProp> = ({userData}) => (
    <StyleCart>
        <MainWrapper src={userData?.imageUrl}  />
        <ContentWrapper>
            <Username>{userData?.username}</Username>
            <FullName>{userData?.firstName} {userData?.lastName}</FullName>
        </ContentWrapper>
    </StyleCart>
)

export default DumbUserCart
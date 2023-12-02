import { CartHeader, Name, RatingText, User, UserInfo, UserName } from '@/components/ReviewCart/style.cart'
import Avatar from '@mui/material/Avatar'
import RatingComponent from '@/re-usible/Rating'
import React, { FC } from 'react'
import { UserCartProp } from '@/globalTypes'

const CartUser: FC<UserCartProp> = ({user, grade}) => (
    <CartHeader>
        <User>
            <Avatar src={user?.imageUrl || '/broken-image.jpg'}/>
            <UserInfo>
                <Name>{user?.firstName}</Name>
                <UserName>@{user?.username}</UserName>
            </UserInfo>
        </User>
        <User>
            <RatingComponent value={grade} size="small"/>
            <RatingText>({grade})</RatingText>
        </User>
    </CartHeader>
)

export default CartUser
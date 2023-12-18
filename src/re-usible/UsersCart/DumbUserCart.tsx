import { FC } from 'react'
import * as S from '@/re-usible/UsersCart/style.cart'
import { userCartProp } from '@/globalTypes'
import UserAvatar from '@/re-usible/Avatar'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const DumbUserCart: FC<userCartProp> = ({userData, handleRoute}) => (
    <S.StyleCart onClick={() => handleRoute('/profile')}>
        <S.ContentWrapper>
            <UserAvatar/>
            <S.HeaderWrapper>
                <S.Username>{userData?.username}</S.Username>
                <S.FullName>{userData?.firstName}</S.FullName>
            </S.HeaderWrapper>
        </S.ContentWrapper>
        <S.IconWrapper>
            <NavigateNextIcon />
        </S.IconWrapper>
    </S.StyleCart>
)

export default DumbUserCart
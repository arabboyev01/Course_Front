import {
    CartDetail, CartFooter,
    CartHeader,
    CartWrapper, Images,
    StyleCart, Tags, Text,
    User,
    UserImage,
    UserName
} from '@/components/ReviewCart/style.cart'
import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import userImg from '../../../public/user.svg'
import { handleUserName } from '@/utils'
import RatingComponent from '@/re-usible/Rating'

const DumbReview: React.FC<ReviewPropsType> = ({ReviewsData, users}) => (
    <StyleCart>
        {ReviewsData?.map(({id, name, groupName, reviewText, imageUrl, grade, tags}: ReviewType) =>
            <CartWrapper key={id} color={id % 2 !== 0}>
                <CartHeader>
                    <User>
                        <UserImage src={userImg.src}/>
                        <UserName>@ {handleUserName(id, users)}</UserName>
                    </User>
                    <RatingComponent value={grade}/>
                </CartHeader>
                <CartDetail>
                    <Text>{reviewText}</Text>
                    <Images src={imageUrl.src}/>
                </CartDetail>
                <CartFooter>
                    <Tags>{tags}</Tags>
                </CartFooter>
            </CartWrapper>
        )}
    </StyleCart>
);

export default DumbReview

// < div className = "search-box" >
//     <button
// className = "btn-search" > < i
// className = "fas fa-search" > < /i></
// button >
// < input
// type = "text"
// className = "input-search"
// placeholder = "Type to Search..." >
//     < /div>

import {
    CartDetail, CartFooter,
    CartHeader,
    CartWrapper, Center, Images, MainCartWrapper, RatingText, ReadMoreButton, ReviewName,
    StyleCart, Tags, Text,
    User,
    UserName
} from '@/components/ReviewCart/style.cart'
import React from 'react'
import { ReviewPropsType, ReviewType } from '@/globalTypes'
import RatingComponent from '@/re-usible/Rating'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import Avatar from '@mui/material/Avatar'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const DumbReview: React.FC<ReviewPropsType> = ({ReviewsData, loading}) => (
    <StyleCart>
        {!ReviewsData || loading ? (<Center><MainLoader/></Center>) :
            <MainCartWrapper>

                {ReviewsData?.map(({id, name, groupName, reviewText, imageUrl, grade, tags, user}: ReviewType) =>
                    <CartWrapper key={id}>
                        <Images src={imageUrl.src} alt="images" />
                        <ReviewName>{name}</ReviewName>
                        <CartHeader>
                            <User>
                                <Avatar src={user?.imageUrl || "/broken-image.jpg"} />
                                <UserName>@{user?.username}</UserName>
                            </User>
                            <User>
                                <RatingText>({grade}.0)</RatingText>
                                <RatingComponent value={grade}/>
                            </User>
                        </CartHeader>
                        <CartDetail>
                            <Text>{reviewText}</Text>
                        </CartDetail>
                        <CartFooter>
                            {tags.map(({name, id}: any ) =>
                                <Tags key={id}>#{name}</Tags>
                            )}
                        </CartFooter>
                        <ReadMoreButton>Read more <TrendingFlatIcon /> </ReadMoreButton>
                    </CartWrapper>
                )}
            </MainCartWrapper>
        }
    </StyleCart>
);

export default DumbReview


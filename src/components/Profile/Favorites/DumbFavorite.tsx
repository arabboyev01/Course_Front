import { StyleFavorites } from '@/components/Profile/Favorites/style.favorites'
import DumbReview from '@/components/ReviewCart/DumbReview'
import React from 'react'

const DumbFavorite: React.FC<any> = ({ReviewsData, navigateSinglePage}) => (
    <StyleFavorites>
        <DumbReview ReviewsData={ReviewsData} navigateSinglePage={navigateSinglePage}/>
    </StyleFavorites>
)

export default DumbFavorite
import { GridItem, PostGrid, StyleUserPost } from '@/re-usible/UserPage/UserPost/style.user.post'
import { FC } from 'react'
import { UserHeaderProp } from '@/globalTypes'

const DumbUserPostComponent: FC<UserHeaderProp> = ({userData}) => (
    <StyleUserPost>
        <PostGrid>
            {userData?.reviews?.map(({imageUrl, id}) =>
                <GridItem src={imageUrl} key={id} alt={imageUrl}/>
            )}
        </PostGrid>
    </StyleUserPost>
)
export default DumbUserPostComponent
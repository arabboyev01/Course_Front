import { GridItem, PostGrid, StyleUserPost } from '@/re-usible/UserPage/UserPost/style.user.post'
import React, { FC } from 'react'
import { UserHeaderProp } from '@/globalTypes'
import NoData from '@/re-usible/NoData'

const DumbUserPostComponent: FC<UserHeaderProp> = ({userData}) => (
    <StyleUserPost>
        <PostGrid>
            {!userData?.reviews?.length && <NoData  str='No reviews created yet'/> }
            {userData?.reviews?.map(({imageUrl, id}) =>
                <GridItem src={imageUrl} key={id} alt={imageUrl}/>
            )}
        </PostGrid>
    </StyleUserPost>
)
export default DumbUserPostComponent
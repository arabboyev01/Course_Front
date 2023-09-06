import { StyleTags, Subtitle, TagsText, TagsWrapper, Text } from '@/re-usible/Tags/style.tags'
import { TagsType } from '@/globalTypes'
import React from 'react'

const DumbTags: React.FC<TagsType[] | null | any> = ({existingTags}) => (
    <StyleTags>
        <Subtitle>About</Subtitle>
        <Text>An awesome star-rating movie review Tumblr theme made by Impetus Themes. Go ahead! Start a film review blog today!</Text>
        <Subtitle>Featured tags</Subtitle>
        <TagsWrapper>
            {existingTags?.map(({name, id}: TagsType) =>
             <TagsText key={id}>
                 #{name}
             </TagsText>
            )}
        </TagsWrapper>
    </StyleTags>
)

export default DumbTags
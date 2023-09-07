import React from 'react'
import { StyleTags, Subtitle, TagsText, TagsWrapper, Text } from '@/re-usible/Tags/style.tags'
import { TagsType } from '@/globalTypes'

const DumbTags: React.FC<TagsType[] | null | any> = ({existingTags, handleSelectedTags, selectedTags}) => (
    <StyleTags>
        <Subtitle>About</Subtitle>
        <Text>An awesome star-rating movie review Tumblr theme made by Impetus Themes. Go ahead! Start a film review blog today!</Text>
        <Subtitle>Featured tags</Subtitle>
        <TagsWrapper>
            {existingTags ? existingTags?.map(({name, id}: TagsType) =>// @ts-ignore
             <TagsText active={selectedTags.includes(name)} key={id} onClick={() => handleSelectedTags(name)}>#{name}</TagsText>
            ) : null}
        </TagsWrapper>
    </StyleTags>
)

export default DumbTags
import React from 'react'
import { StyleTags, Subtitle, TagsText, TagsWrapper } from '@/re-usible/Tags/style.tags'
import { TagsType } from '@/globalTypes'
import { LoaderCenter } from '@/components/Hero/slider'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import UsersCart from '@/re-usible/UsersCart'

const DumbTags: React.FC<TagsType[] | null | any> = ({existingTags, handleSelectedTags, selectedTags, singleUser}) => (
    <StyleTags>
        <UsersCart userData={singleUser}/>
        <Subtitle>Featured tags</Subtitle>
        <TagsWrapper>
            {existingTags === null || existingTags?.error ?
                (<LoaderCenter>
                    <MainLoader/>
                </LoaderCenter>) :
                (existingTags?.map(({name, id}: TagsType) =>
                        <TagsText active={selectedTags.includes(name)}
                                  key={id}
                                  onClick={() => handleSelectedTags(name)}>
                            #{name.substring(0, 10)}
                        </TagsText>)
                )}
        </TagsWrapper>
    </StyleTags>
)

export default DumbTags
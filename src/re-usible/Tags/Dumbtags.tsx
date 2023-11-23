import React from 'react'
import { StyleTags, Subtitle, SumPost, TagsText, TagsTitle, TagsWrapper } from '@/re-usible/Tags/style.tags'
import { TagsType } from '@/globalTypes'
import { LoaderCenter } from '@/components/Hero/slider'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import UsersCart from '@/re-usible/UsersCart'
import SearchFiled from '@/re-usible/SearchFiled'

const DumbTags: React.FC<TagsType[] | null | any> = ({existingTags, handleSelectedTags, selectedTags, singleUser}) => (
    <StyleTags>
        {!singleUser?.error && <UsersCart userData={singleUser}/>}
        <Subtitle>Search</Subtitle>
        <SearchFiled/>
        <Subtitle>Featured tags</Subtitle>
        <TagsWrapper>
            {existingTags === null || existingTags?.error ?
                <LoaderCenter> <MainLoader/></LoaderCenter> :
                existingTags?.map(({name, id, reviews}: TagsType) =>
                        <TagsText active={selectedTags.includes(name)} key={id}
                                  onClick={() => handleSelectedTags(name)}
                        >
                           <TagsTitle>#{name}</TagsTitle>
                            <SumPost>{reviews.length}posts</SumPost>
                        </TagsText>
                )}
        </TagsWrapper>
    </StyleTags>
)

export default DumbTags
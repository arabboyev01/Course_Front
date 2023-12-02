import React from 'react'
import {
    CheckImage, Line,
    StyleTags,
    Subtitle,
    SumPost,
    TagsText,
    TagsTitle,
    TagsWrapper
} from '@/re-usible/Tags/style.tags'
import { TagsType } from '@/globalTypes'
import { LoaderCenter } from '@/components/Hero/slider'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import UsersCart from '@/re-usible/UsersCart'
import SearchFiled from '@/re-usible/SearchFiled'
import checkIcon from '../../../public/check.svg'
import checkedIcon from '../../../public/checked.svg'

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
                    <TagsText key={id} onClick={() => handleSelectedTags(name)}>
                        <div>
                            <TagsTitle active={selectedTags.includes(name)}>{name}</TagsTitle>
                            <SumPost active={selectedTags.includes(name)}>{reviews.length}posts</SumPost>
                        </div>
                        <Line active={selectedTags.includes(name)}></Line>
                        <CheckImage src={selectedTags.includes(name) ? checkedIcon.src : checkIcon.src} alt="check_icon"/>
                    </TagsText>
                )}
        </TagsWrapper>
    </StyleTags>
)

export default DumbTags
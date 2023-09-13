import { searchTitles } from '@/Static'
import React from 'react'
import { PropsDumbSearch } from '@/globalTypes'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import { GroupName, LoaderWrapper, ReviewItem, ReviewName, SingleReview, StyleSearch, Title, TitleWrapper } from '@/re-usible/Search/style.search'
import { highlightSearchTerm } from '@/re-usible/highlighting'

const DumbSearch: React.FC<PropsDumbSearch> = ({active, makeActive, inputValue, searchData, handleDirect}) => (
    <StyleSearch>
        <TitleWrapper>
            {searchData !== null ? searchTitles.map((res: any) =>
                <Title key={res} active={active === res.value}
                       onClick={() => makeActive(res.value, inputValue)}>{res.name}</Title>
            ) : null}
        </TitleWrapper>
        <SingleReview>
            {searchData || searchData !== null ? searchData?.map(({id, name, groupName}: any) =>
                    <ReviewItem key={id} onClick={() => handleDirect(id)}>
                        <ReviewName>{highlightSearchTerm(inputValue, name)}</ReviewName>
                        <GroupName>{groupName}</GroupName>
                    </ReviewItem>)
                :
                (<LoaderWrapper>
                    <MainLoader/>
                </LoaderWrapper>)
            }
        </SingleReview>
    </StyleSearch>
)

export default DumbSearch
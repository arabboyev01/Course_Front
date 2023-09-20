import { searchTitles } from '@/Static'
import React from 'react'
import { PropsDumbSearch } from '@/globalTypes'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import {
    GroupName, Image,
    LoaderWrapper,
    ReviewItem,
    ReviewName,
    SearchHeader,
    SingleReview,
    StyleSearch,
    Title,
    TitleWrapper
} from '@/re-usible/Search/style.search'
import { highlightSearchTerm } from '@/re-usible/highlighting'

const DumbSearch: React.FC<PropsDumbSearch> = ({active, makeActive, inputValue, searchData, handleDirect}) => (
    <StyleSearch>
        <TitleWrapper>
            {searchData !== null ? searchTitles.map((res: any) =>
                <Title key={res} active={active === res.value} onClick={() => makeActive(res.value, inputValue)}>{res.name}</Title>
            ) : null}
        </TitleWrapper>
        <SingleReview>
            {searchData || searchData !== null ? searchData.length ? searchData?.map(({id, name, groupName, imageUrl}: any) =>
                    <ReviewItem key={id} onClick={() => handleDirect(id)}>
                        <SearchHeader>
                            <Image src={imageUrl} alt={imageUrl}/>
                            <ReviewName>{highlightSearchTerm(inputValue, name.substring(0, 60))}...</ReviewName>
                        </SearchHeader>
                        <GroupName>{groupName}</GroupName>
                    </ReviewItem>) : <p style={{margin: "20px", textAlign: "center"}}>No option</p>
                :
                (<LoaderWrapper>
                    <MainLoader/>
                </LoaderWrapper>)
            }
        </SingleReview>
    </StyleSearch>
)

export default DumbSearch
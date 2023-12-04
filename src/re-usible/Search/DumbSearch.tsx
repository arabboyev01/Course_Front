import { searchTitles } from '@/Static'
import React from 'react'
import { PropsDumbSearch } from '@/globalTypes'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import * as S from '@/re-usible/Search/style.search'
import { highlightSearchTerm } from '@/re-usible/highlighting'

const DumbSearch: React.FC<PropsDumbSearch> = ({active, makeActive, inputValue, searchData, handleDirect}) => (
    <S.StyleSearch>
        <S.TitleWrapper>
            {searchData !== null ? searchTitles.map((res: any) =>
                <S.Title key={res} active={active === res.value}
                         onClick={() => makeActive(res.value, inputValue)}>{res.name}</S.Title>
            ) : null}
        </S.TitleWrapper>
        <S.SingleReview>
            {searchData || searchData !== null ? searchData?.length ? searchData?.map((
                    {id, name, groupName, imageUrl}: { id: number, name: string, groupName: string, imageUrl: string }) =>
                    <S.ReviewItem key={id} onClick={() => handleDirect(id)}>
                        <S.SearchHeader>
                            <S.Image src={imageUrl} alt={imageUrl}/>
                            <S.ReviewName>{highlightSearchTerm(inputValue, name.substring(0, 60))}...</S.ReviewName>
                        </S.SearchHeader>
                        <S.GroupName>{groupName}</S.GroupName>
                    </S.ReviewItem>) : <p style={{margin: '20px', textAlign: 'center'}}>No option</p>
                :
                (<S.LoaderWrapper>
                    <MainLoader/>
                </S.LoaderWrapper>)
            }
        </S.SingleReview>
    </S.StyleSearch>
)

export default DumbSearch
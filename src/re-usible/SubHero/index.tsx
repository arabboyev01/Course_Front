import { SearchText, StyledHero } from '@/re-usible/SubHero/style'
import SearchFiled from '@/re-usible/SearchFiled'

const SubHero = () => {

    return (
        <StyledHero>
            <SearchText>Search here</SearchText>
            <SearchFiled />
        </StyledHero>
    )
}

export default SubHero
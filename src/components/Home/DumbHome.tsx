import { BodyWrapper, HomeStyle } from '@/components/Home/home.style'
import Header from '@/components/Header'
import Sorting from '@/components/Sorting'
import ReviewCart from '@/components/ReviewCart'
import Tags from '@/re-usible/Tags'

const DumbHome = () => (
    <HomeStyle>
        <Header />
        <Sorting />
        <BodyWrapper>
             <ReviewCart />
            <Tags />
        </BodyWrapper>
    </HomeStyle>
)
export default DumbHome;
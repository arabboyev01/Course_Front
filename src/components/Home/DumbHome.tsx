import { HomeStyle } from '@/components/Home/home.style'
import Header from '@/components/Header'
import Sorting from '@/components/Sorting'
import ReviewCart from '@/components/ReviewCart'

const DumbHome = () => (
    <HomeStyle>
        <Header />
        <Sorting />
        <ReviewCart />
    </HomeStyle>
)
export default DumbHome;
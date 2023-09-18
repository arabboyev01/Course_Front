import { useRouter } from 'next/router'
import Sidebar from '@/components/Profile/Sidebar'
import ProfileLayout from '@/components/Profile/ProfileLayout'
import { Routes } from '@/components/Profile/MainContent/utils'
import PersonalData from '@/components/Profile/PersonalPage'
import { Left, Right } from '@/components/Profile/MainContent/style.main'
import MyReview from '@/components/Profile/MyReview'
import Users from '@/components/Profile/Users'

const MainContent = () => {
    const router = useRouter()
    const {pathname} = router;

    return (
        <ProfileLayout>
            <Left>
                <Sidebar/>
            </Left>
            <Right>
                {pathname === Routes.main && <PersonalData/>}
                {pathname === Routes.review && <MyReview/>}
                {pathname === Routes.users && <Users/>}
            </Right>
        </ProfileLayout>
    )
}
export default MainContent
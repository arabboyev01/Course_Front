import Sidebar from '@/components/Profile/Sidebar'
import ProfileLayout from '@/components/Profile/ProfileLayout'
import PersonalData from "@/pages/profile"
export default function Profile() {

    return (
        <ProfileLayout>
            <Sidebar/>
            <PersonalData />
        </ProfileLayout>
    )
}
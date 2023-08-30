import { GoHome, StyleSuccess, SuccessImage } from '@/components/ReviewForm/SuccessMessage/style.success'
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useRouter } from 'next/router'

export const SuccessMessage = () => {

    const router = useRouter()
    const handleRoute = () => router.push("/")

    return (
        <StyleSuccess>
            <GppGoodIcon style={{fontSize: '5rem', color: 'green'}}/>
            <SuccessImage>You successfully created a review</SuccessImage>
            <GoHome onClick={handleRoute}>Go Main page</GoHome>
        </StyleSuccess>
    )
}
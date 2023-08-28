import HomeComponent from "@/components/Home"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { useEffect } from 'react'
import { verifyUser } from '@/store/reducerSlice'
export default function Home() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(verifyUser())
    }, [dispatch])

    return <HomeComponent />
}

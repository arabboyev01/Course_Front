import BookmarkComponent from '@/components/Bookmark'
import TransitionPage from '@/re-usible/Animation/TransitionPage'
import { useSelector } from 'react-redux'
import { Authorized } from '@/store/Selector'
import Login from '@/components/Login'

export default function Bookmark() {
    const isAuth = useSelector(Authorized)
    if(!isAuth) return <Login />

    return (
        <TransitionPage>
            <BookmarkComponent/>
        </TransitionPage>
    )
}
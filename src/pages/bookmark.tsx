import BookmarkComponent from '@/components/Bookmark'
import TransitionPage from '@/re-usible/Animation/TransitionPage'

export default function Bookmark() {
    return (
        <TransitionPage>
            <BookmarkComponent/>
        </TransitionPage>
    )
}
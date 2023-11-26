import HomeComponent from '@/components/Home'
import TransitionPage from '@/re-usible/Animation/TransitionPage'

export default function Home() {

    return (
        <TransitionPage>
            <HomeComponent/>
        </TransitionPage>
    )
}

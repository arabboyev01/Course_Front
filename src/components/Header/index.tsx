import DumbHeader from '@/components/Header/DumbHeader'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Authorized, isLiked } from '@/store/Selector'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { singleUser, setUserReviewId, setTotalLike } from '@/store/reducerSlice'
import { usersType } from '@/globalTypes'

const Header = () => {
    const router = useRouter();
    const Auth = useSelector(Authorized);
    const liked = useSelector(isLiked)
    const dispatch = useDispatch()
    const [single, setSingle] = useState<usersType | null>(null)
    const handleRouter = () => router.push('/login');
    const handleMain = () => router.push('/')

    useEffect(() => {
        api.SingleUser('api/single-user').then((data) => {
            setSingle(data)
            dispatch(singleUser(data))
        }).catch(err => console.log(err))
    }, [dispatch, router.pathname]);

    useEffect(() => {
        if (single !== null) {
            api.getUsers(`api/user-like-reviewid?userId=${single.id}`).then(data => {
                dispatch(setUserReviewId(data))
            }).catch(err => console.log(err))
        }
    }, [dispatch, router.pathname, single, liked])

    useEffect(() => {
        api.getUsers(`api/like-sum`).then(data => dispatch(setTotalLike(data)))
            .catch(err => console.log(err))
    }, [dispatch, router.pathname, liked])

    return <DumbHeader handleRouter={handleRouter} Auth={Auth} handleMain={handleMain}/>
}

export default Header;
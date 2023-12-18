import DumbHeader from '@/components/Header/DumbHeader'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Authorized, isLiked, mode } from '@/store/Selector'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { singleUser, setUserReviewId, setTotalLike, setBookmarkReviewId } from '@/store/reducerSlice'
import { usersType } from '@/globalTypes'
import { Router } from '@/utils/router'
import { Themes } from '@pubnub/react-chat-components'

const Header = () => {
    const router = useRouter();
    const Auth = useSelector(Authorized);
    const liked = useSelector(isLiked)
    const theme: Themes | undefined = useSelector(mode) as Themes | undefined
    const {handleRoute} = Router()

    const dispatch = useDispatch()
    const [single, setSingle] = useState<usersType | null>(null)
    const handleRouter = () => handleRoute('/login');
    const handleMain = () => handleRoute('/');

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
        if (single !== null) {
            api.getUsers(`api/get-bookmarkId?userId=${single.id}`).then(data => {
                dispatch(setBookmarkReviewId(data))
            }).catch(err => console.log(err))
        }
    }, [dispatch, router.pathname, single, liked])

    useEffect(() => {
        api.getUsers(`api/like-sum`).then(data => dispatch(setTotalLike(data)))
            .catch(err => console.log(err))
    }, [dispatch, router.pathname, liked])

    return <DumbHeader
        handleRouter={handleRouter}
        auth={Auth} handleMain={handleMain}
        theme={theme}
    />
}

export default Header;
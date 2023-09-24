import { useCallback, useEffect, useState } from 'react'
import { api } from '@/config'
import { AccessToken } from '@/utils/AccessToken'
import { useRouter } from 'next/router'
import { useAlert } from 'react-alert'
import { setToken } from '@/store/reducerSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import { CustomError, userValidation } from '@/utils/errors'

export default function AccessTokenComponent() {

    const [githubData, setGithubData] = useState<any>(null)
    const router = useRouter();
    const alert = useAlert();
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParams = urlParams.get('code');
        if (codeParams) AccessToken(codeParams)
    }, [])

    useEffect(() => {
        api.ThirdPartAPI('getGithubUserData').then((data) => {
            setGithubData(data)
        }).catch((err) => console.log(err))
    }, [])

    const handleGithubSign = useCallback(() => {
        if (githubData !== null) {
            const {company, login, name}: any = githubData;

            const extractedInfo = {
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1],
                username: login,
                email: githubData?.email,
                password: company,
                imageUrl: null
            };

            api.Users('api/get-auth', extractedInfo).then(data => {
                if(data === userValidation.blockedUser) throw new CustomError("CustomError")
                if (data.message === userValidation.internalServer) throw new Error
                dispatch(setToken(data.token))
                if (data) alert.success('Logged In!');
                router.push('/');
            }).catch((err) => {
                router.push('/');
                if(err.name === "CustomError") alert.info(userValidation.blockedUser)
            })
        }
    }, [githubData, alert, router, dispatch])

    useEffect(() => {
        handleGithubSign()
    }, [handleGithubSign])

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh'
    }}>
        <p style={{margin: '3rem'}}>You are being redirected</p>
        <MainLoader/>
    </div>
}
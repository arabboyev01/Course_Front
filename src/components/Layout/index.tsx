import React, { useEffect } from 'react'
import { ChildrenProps } from '@/globalTypes'
import Header from '@/components/Header'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { verifyUser } from '@/store/reducerSlice'
import Footer from '@/re-usible/Footer'

const Layout: React.FC<ChildrenProps> = ({children}) => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(verifyUser())
    }, [dispatch])

    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout
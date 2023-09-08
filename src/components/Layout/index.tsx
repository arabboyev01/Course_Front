import React from 'react'
import { ChildrenProps } from '@/globalTypes'
import Header from '@/components/Header'

const Layout:React.FC<ChildrenProps> = ({children}) => {


    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}

export default Layout
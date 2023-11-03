import { useAlert } from 'react-alert'
import React, { FC, useCallback, useEffect } from 'react'
import { ChildrenProps } from '@/globalTypes'

const Offline: FC<ChildrenProps> = ({children}) => {

    const alert = useAlert();

    const offline  = useCallback(() => {
         return setInterval(() => {
            alert.info("no internet")
        }, 7000);
    }, [])

    useEffect(() => {
        window.addEventListener('offline', offline)
        return () => {
            window.removeEventListener('offline', offline)
            clearInterval(offline());
        }
    }, [offline])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Offline
import { toast, ToastPosition } from 'react-toastify'
import { Themes } from '@pubnub/react-chat-components'

export const Toaster = (message: string, type: 'success' | 'error' | 'info', position: string, theme: Themes | undefined) => {
    toast[type](message, {
        position: position as ToastPosition|undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
        draggable: true,
    })
};
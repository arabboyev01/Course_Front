import { toast, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Toaster = (message: string, type: 'success' | 'error' | 'info', position: string, theme: string) => {
    toast[type](message, {
        position: position as ToastPosition|undefined,
        theme: theme === 'dark' ? 'dark' : 'light',
        draggable: true,
    })
};
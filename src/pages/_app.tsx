import { Provider as ReduxProvider } from 'react-redux';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import type { AppProps } from 'next/app'
import store from '@/store'
import '@/main.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const options = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT,
    transition: transitions.SCALE,
    containerStyle: {
        maxWidth: '350px'
    }
};

export default function App({Component, pageProps}: AppProps) {

    return (
        <GoogleOAuthProvider clientId="915688630240-ncpe3p2ifr0uirapiige1406j3lp0g5b.apps.googleusercontent.com">
            <ReduxProvider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Component {...pageProps} />
                </AlertProvider>
            </ReduxProvider>
        </GoogleOAuthProvider>
    )
}
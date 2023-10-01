import { Provider as ReduxProvider } from 'react-redux';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from '@/components/Layout'
import React from 'react'
import ThemeProviderValue from '@/Theme/Provider'
import store from '@/store'
import '@/main.css'

const options = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT,
    transition: transitions.SCALE,
    containerStyle: {
        maxWidth: '350px'
    },
    zIndex: 1000
};
const clientId = "915688630240-ncpe3p2ifr0uirapiige1406j3lp0g5b.apps.googleusercontent.com"

export default function App({Component, pageProps}: AppProps) {

    return (
        <ReduxProvider store={store}>
            <ThemeProviderValue>
                <GoogleOAuthProvider clientId={clientId}>
                    <AlertProvider template={AlertTemplate} {...options}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </AlertProvider>
                </GoogleOAuthProvider>
            </ThemeProviderValue>
        </ReduxProvider>

    )
}
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
import Offline from '@/re-usible/Offline'
import { AnimatePresence } from 'framer-motion';
import '@/re-usible/Toaster/style.css'
import { PubNubProvider } from 'pubnub-react';
import PubNub from 'pubnub';

const options = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT,
    transition: transitions.SCALE,
    containerStyle: {
        maxWidth: '350px'
    },
    zIndex: 1000
};

const pubnub = new PubNub({
  publishKey: "pub-c-a311f985-d745-4175-b170-441491fe8cc2",
  subscribeKey: "sub-c-6604036e-3b5d-4051-b40c-9e03d3edcb42",
  userId: "sec-c-MTllYjdjYTctOWM0Zi00MjEwLWFkYWUtMzUyNjU5YjFjMTU0",
})

const clientId = '915688630240-ncpe3p2ifr0uirapiige1406j3lp0g5b.apps.googleusercontent.com'
import { ToastContainer } from 'react-toastify';

export default function App({Component, pageProps}: AppProps) {

    return (
        <ReduxProvider store={store}>
            <ThemeProviderValue>
                <GoogleOAuthProvider clientId={clientId}>
                    <AlertProvider template={AlertTemplate} {...options}>
                        <Layout>
                            <Offline>
                                <PubNubProvider client={pubnub}>
                                    <AnimatePresence>
                                        <Component {...pageProps} />
                                        <ToastContainer autoClose={5000}/>
                                    </AnimatePresence>
                                </PubNubProvider>
                            </Offline>
                        </Layout>
                    </AlertProvider>
                </GoogleOAuthProvider>
            </ThemeProviderValue>
        </ReduxProvider>

    )
}
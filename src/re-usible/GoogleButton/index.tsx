import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleLoginResponse } from '@/globalTypes'
import jwt from 'jwt-decode'
import { api } from '@/config'
import { setToken } from '@/store/reducerSlice'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { useAlert } from 'react-alert'

const GoogleLoginButton = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const alert = useAlert();
    const responseGoogle = (response: GoogleLoginResponse) => {
        if (response.error) {
            console.error('Google login error:', response.error);
            alert.error('Google login error!')
        } else { //@ts-ignore
            const decoded = jwt(response.credential)
            const {name, email, family_name, given_name, picture, sub}: any = decoded;

            const extractedData = {
                firstName: given_name,
                lastName: family_name,
                username: name,
                email,
                password: sub,
                imageUrl: picture,
            };
            api.Users('api/get-auth', extractedData).then(data => {
                if (data.message === 'Internal server error') throw new Error
                if (data?.error) throw new Error
                if (data) alert.success('Account Created')
                dispatch(setToken(data.token))
                router.push('/');
            }).catch(() => alert.error('username or password is wrong!'))
        }
    };


    return (
        <GoogleLogin
            buttonText="Login with Google" //@ts-ignore
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleLoginButton;

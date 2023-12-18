import * as S from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import { Form } from 'react-final-form';
import { FOUNDATION_FORM_VALUES, schema } from '@/components/Login/LoginConfig'
import React from 'react'
import { HandleLoginType } from '@/globalTypes'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'
import { makeValidate } from 'mui-rff';
import GoogleButton from '@/re-usible/GoogleButton'
import { GithubLoginButton } from 'react-social-login-buttons';

const validate: any = makeValidate(schema);

const DumbLogin: React.FC<HandleLoginType> =
    ({
         handleLogin,
         loginRoute,
         loader,
         GithubSign,
         showPassword,
         togglePassword, theme
     }) => (
        <S.StyleLogin>
            <S.LoginWrapper>
                <S.Title>Login into account</S.Title>
                <Form
                    onSubmit={handleLogin}
                    validate={validate}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <S.InputWrapper>
                                <CssTextField {...FOUNDATION_FORM_VALUES.username}/>
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.ShowPassword onClick={togglePassword}>
                                    {showPassword ? 'Hide' : 'Show'}
                                </S.ShowPassword>
                                <CssTextField {...FOUNDATION_FORM_VALUES.password}
                                              type={showPassword ? 'text' : 'password'}/>
                            </S.InputWrapper>
                            <S.SignUpWrapper>
                                <S.SignUp>Do not have an account ?</S.SignUp>
                                <S.SignUpLinks onClick={loginRoute}>Sig-nup</S.SignUpLinks>
                            </S.SignUpWrapper>
                            <S.InputWrapper>
                                <S.SubmitButton type="submit">
                                    {loader ? <ButtonLoader/> : 'Login'}
                                </S.SubmitButton>
                            </S.InputWrapper>
                        </form>
                    )}
                />
                <S.Lines>
                    <S.Line></S.Line><S.Paragraph>or</S.Paragraph><S.Line></S.Line>
                </S.Lines>
                <S.SocialMediaWrapper>
                    <GoogleButton/>
                    <GithubLoginButton
                        onClick={GithubSign}
                        style={{
                            fontSize: '14px',
                            height: '40px',
                            background: `${theme === 'dark' ? '#333' : '#333'}`,
                            color: `${theme === 'dark' ? '#000' : '#fff'}`
                        }}
                    />
                </S.SocialMediaWrapper>
            </S.LoginWrapper>
        </S.StyleLogin>
    )

export default DumbLogin
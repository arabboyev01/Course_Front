import { LoginWrapper, Seperated, SignUpInputs, SignUpWrapper } from '@/components/SignUp/style.signUp'
import {
    IconsGithub,
    Line, Lines, LoginButton,
    Paragraph,
    SignUp,
    SignUpLinks, SocialMediaWrapper,
    StyleLogin,
    SubmitButton,
    Title
} from '@/components/Login/style.login'
import { Form } from 'react-final-form'
import { CssTextField } from '@/re-usible/form-style'
import { FOUNDATION_FORM_VALUES } from '@/components/SignUp/config'
import GitHubIcon from '@mui/icons-material/GitHub'
import { makeValidate } from 'mui-rff'
import { schema } from '@/components/SignUp/config'
import React from 'react'
import { HandleSignUpTypes } from '@/globalTypes'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'
import GoogleButton from '@/re-usible/GoogleButton'

const validate: any = makeValidate(schema)

const DumbSignUp: React.FC<HandleSignUpTypes> = ({handleSignUp, signUpRoute, loader, GithubSign}) => (
    <StyleLogin>
        <SignUpWrapper>
            <Title>Create an account</Title>
            <Form
                onSubmit={handleSignUp}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <SignUpInputs>
                            <CssTextField {...FOUNDATION_FORM_VALUES.firstName}/>
                            <CssTextField {...FOUNDATION_FORM_VALUES.lastName}/>
                        </SignUpInputs>
                        <SignUpInputs>
                            <CssTextField {...FOUNDATION_FORM_VALUES.email}/>
                            <CssTextField {...FOUNDATION_FORM_VALUES.username}/>
                        </SignUpInputs>
                        <Seperated>
                            <CssTextField {...FOUNDATION_FORM_VALUES.password}/>
                        </Seperated>
                        <LoginWrapper>
                            <SignUp>Do you have an account ?</SignUp>
                            <SignUpLinks onClick={signUpRoute}>Login</SignUpLinks>
                        </LoginWrapper>
                        <Seperated>
                            <SubmitButton type="submit">
                                {loader ? <ButtonLoader /> : "Sign Up"}
                            </SubmitButton>
                        </Seperated>
                    </form>
                )}
            />
            <Lines>
                <Line></Line><Paragraph>or</Paragraph><Line></Line>
            </Lines>
            <SocialMediaWrapper>
                <GoogleButton />
                <LoginButton onClick={GithubSign}>
                   Signup with Github <GitHubIcon style={IconsGithub}/>
                </LoginButton>
            </SocialMediaWrapper>
        </SignUpWrapper>
    </StyleLogin>
);
export default DumbSignUp;
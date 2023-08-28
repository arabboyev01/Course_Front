import {
    Icon,
    InputWrapper,
    Line,
    Lines,
    LoginWrapper, Paragraph, SignUp, SignUpLinks, SignUpWrapper, SocialMediaWrapper,
    StyleLogin,
    SubmitButton,
    Title
} from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import { Form } from 'react-final-form';
import { FOUNDATION_FORM_VALUES, schema } from '@/components/Login/LoginConfig'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import { HandleLoginType } from '@/globalTypes'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'
import { makeValidate } from 'mui-rff';
const validate: any = makeValidate(schema);

const DumbLogin: React.FC<HandleLoginType> = ({handleLogin, loginRoute, loader}) => (
    <StyleLogin>
        <LoginWrapper>
            <Title>Login in to account</Title>
            <Form
                onSubmit={handleLogin}
                validate={validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <InputWrapper>
                            <CssTextField {...FOUNDATION_FORM_VALUES.username}/>
                        </InputWrapper>
                        <InputWrapper>
                            <CssTextField {...FOUNDATION_FORM_VALUES.password}/>
                        </InputWrapper>
                        <SignUpWrapper>
                            <SignUp>Do not have an account ?</SignUp>
                            <SignUpLinks onClick={loginRoute}>Sign Up</SignUpLinks>
                        </SignUpWrapper>
                        <InputWrapper>
                            <SubmitButton type="submit">
                                {loader ? <ButtonLoader /> : "Login"}</SubmitButton>
                        </InputWrapper>
                    </form>
                )}
            />
            <Lines>
                <Line></Line><Paragraph>or</Paragraph><Line></Line>
            </Lines>
            <SocialMediaWrapper>
                <GitHubIcon style={Icon}/>
                <LinkedInIcon style={Icon}/>
            </SocialMediaWrapper>
        </LoginWrapper>
    </StyleLogin>
)

export default DumbLogin
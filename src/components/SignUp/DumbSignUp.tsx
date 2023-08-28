import { LoginWrapper, Seperated, SignUpInputs, SignUpWrapper } from '@/components/SignUp/style.signUp'
import {
    Icon,
    Line, Lines,
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
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { makeValidate } from 'mui-rff'
import { schema } from '@/components/SignUp/config'

const validate = makeValidate(schema)

const DumbSignUp = ({handleSignUp, signUpRoute}: any) => (
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
                            <SubmitButton type="submit">Login</SubmitButton>
                        </Seperated>
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
        </SignUpWrapper>
    </StyleLogin>
);

export default DumbSignUp;
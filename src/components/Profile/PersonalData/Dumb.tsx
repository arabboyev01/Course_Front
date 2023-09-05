import React from 'react'
import { PERSONAL_DATA } from './config'
import { Form } from 'react-final-form'
import { CssTextField } from '@/re-usible/form-style'
import {
    MainWrapper,
    Title,
    MainData,
    SingleField,
    Sub,
    SubTitle,
    AdditionalBox,
    CodeField,
    Button,
    SaveButton,
} from './main.style'

const Dumb = ({ onSubmit }: any) => (
    <MainWrapper>

        <Title>Shaxsiy ma&apos;lumotlar</Title>

        <Form onSubmit={onSubmit} render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                <MainData>
                    <SingleField>
                        <Sub>{PERSONAL_DATA.firstName.header}</Sub>
                        <CssTextField {...PERSONAL_DATA.firstName} placeholder="Firstname" type="text"/>
                    </SingleField>
                    <SingleField>
                        <Sub>{PERSONAL_DATA.lastName.header}</Sub>
                        <CssTextField {...PERSONAL_DATA.lastName} placeholder="Lastname"/>
                    </SingleField>
                </MainData>

                <SubTitle>Parolni yangilash</SubTitle>
                <MainData>
                    <SingleField>
                        <Sub>{PERSONAL_DATA.email.header}</Sub>
                        <CssTextField {...PERSONAL_DATA.email} placeholder="*****@gmail.com" type="text"/>
                    </SingleField>
                </MainData>

                <MainData>
                    <SingleField>
                        <Sub>{PERSONAL_DATA.new_password.header}</Sub>
                        <CssTextField {...PERSONAL_DATA.new_password} placeholder="Password" type="password"/>
                    </SingleField>
                    <AdditionalBox>
                        <CodeField>
                            <Sub>{PERSONAL_DATA.code.header}</Sub>
                            <CssTextField {...PERSONAL_DATA.code} placeholder="Sms-code" type="text"/>
                        </CodeField>
                    </AdditionalBox>
                </MainData>

                <SaveButton>
                    <Button>Save</Button>
                </SaveButton>
            </form>
        )}/>
    </MainWrapper>
)
export default Dumb;

import React from 'react'
import { PERSONAL_DATA } from './config'
import { Form } from 'react-final-form';
import { CssTextField } from '@/re-usible/form-style'
import { makeValidate } from 'mui-rff'
import { schema } from './config'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import {
    MainWrapper,
    Title,
    MainData,
    SingleField,
    Sub,
    SubTitle,
    Submit,
    AvatarDiv,
    EditIcons,
    EditDiv,
} from './main.style'
import SpringModal from '@/re-usible/Modal'

const validate: any = makeValidate(schema);

const DumbPersonalPage = ({handleChange, user, loading, open, setOpen}: any) => (
    <MainWrapper>
        <AvatarDiv>
            <Avatar alt={user?.firstName} src={user?.imageUrl || '/broken-image.jpg'} sx={{width: 66, height: 66}}/>
            <EditDiv>
                <EditIcon sx={EditIcons} onClick={() => setOpen(true)}/>
            </EditDiv>
            <SpringModal open={open} setOpen={setOpen}/>
        </AvatarDiv>
        <Title>Personal data</Title>
        <Form
            onSubmit={handleChange}
            validate={validate}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                    <MainData>
                        <SingleField>
                            <Sub>{PERSONAL_DATA.firstName.header}</Sub>
                            <CssTextField {...PERSONAL_DATA.firstName} placeholder={user?.firstName}/>
                        </SingleField>
                        <SingleField>
                            <Sub>{PERSONAL_DATA.lastName.header}</Sub>
                            <CssTextField {...PERSONAL_DATA.lastName} placeholder={user?.lastName}/>
                        </SingleField>
                    </MainData>
                    <SubTitle>Required fields *</SubTitle>
                    <MainData>
                        <SingleField>
                            <Sub>{PERSONAL_DATA.email.header}</Sub>
                            <CssTextField {...PERSONAL_DATA.email} placeholder={user?.email} type="text"/>
                        </SingleField>
                        <SingleField>
                            <Sub>{PERSONAL_DATA.username.header}</Sub>
                            <CssTextField {...PERSONAL_DATA.username} placeholder={user?.username} type="text"/>
                        </SingleField>
                    </MainData>
                    <MainData>
                        <SingleField>
                            <Sub>{PERSONAL_DATA.hashPassword.header}</Sub>
                            <CssTextField {...PERSONAL_DATA.hashPassword} type="password"/>
                        </SingleField>
                        <SingleField>
                            <Submit type="submit">{loading ? <ButtonLoader/> : 'Save'}</Submit>
                        </SingleField>
                    </MainData>
                </form>
            )}/>
    </MainWrapper>
)
export default DumbPersonalPage;

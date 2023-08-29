import { Form } from 'react-final-form'
import { InputWrapper, SignUp, SignUpLinks, SignUpWrapper, SubmitButton } from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'
import { REVIEW_FORM, schema } from './config'
import React from 'react'
import { makeValidate } from 'mui-rff'
import ImageForm from '@/re-usible/ImageForm'

const validate: any = makeValidate(schema);
const Forms = ({handleReview, loader, current}: any) => (
    <Form
        onSubmit={handleReview}
        validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} noValidate>
                {current === 1 ? (
                    <>
                        <InputWrapper>
                            <CssTextField {...REVIEW_FORM.name}/>
                        </InputWrapper>
                        <InputWrapper>
                            <CssTextField {...REVIEW_FORM.text} multiline minRows={3} maxRows={6}/>
                        </InputWrapper>
                    </>
                ) : null}
                {current === 2 ? <ImageForm/> : null}
            </form>
        )}
    />
)

export default Forms;
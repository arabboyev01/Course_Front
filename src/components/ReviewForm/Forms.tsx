import { Form } from 'react-final-form'
import { InputWrapper } from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM, schema } from './config'
import React from 'react'
import { makeValidate } from 'mui-rff'
import ImageForm from '@/re-usible/ImageForm'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm'

const validate: any = makeValidate(schema);
const Forms = ({handleReview, current}: any) => (
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
                {current === 3 ? <DumbThirdForm /> : null}
            </form>
        )}
    />
)

export default Forms;
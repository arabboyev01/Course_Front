import { InputWrapper } from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import React from 'react'

const FirstForm = () => (
    <React.Fragment>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.name}/>
        </InputWrapper>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.text} multiline minRows={3} maxRows={6}/>
        </InputWrapper>
    </React.Fragment>
)
export default FirstForm
import { InputWrapper } from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import React from 'react'
import { FormsWrapper } from '@/components/ReviewForm/FirstForm/style.first'

const FirstForm = () => (
    <FormsWrapper>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.name}/>
        </InputWrapper>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.reviewText} multiline minRows={4} maxRows={6}/>
        </InputWrapper>
    </FormsWrapper>
)
export default FirstForm
import { InputWrapper } from '@/components/Login/style.login'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { FormsWrapper } from '@/components/ReviewForm/FirstForm/style.first'

const FirstForm = () => (
    <FormsWrapper>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.name} required/>
        </InputWrapper>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.reviewText} multiline minRows={4} maxRows={4} required/>
        </InputWrapper>
    </FormsWrapper>
)
export default FirstForm
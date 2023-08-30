import React from 'react'
import { StyledFileInput } from '@/re-usible/ImageForm/style.foms'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { InputWrapper } from '@/components/Login/style.login'

const DumbImageForm = ({handleDrop, handleDragOver}: any) => (
    <React.Fragment>
        <StyledFileInput
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <CloudUploadIcon style={{fontSize: "2rem", color: "rgba(0, 0, 0, 0.4)"}}/>
            Choose a file or drag it down
            <input type="file"/>
        </StyledFileInput>
        <InputWrapper>
            <CssTextField {...REVIEW_FORM.groupName} multiline minRows={3} maxRows={6}/>
        </InputWrapper>
    </React.Fragment>
)

export default DumbImageForm
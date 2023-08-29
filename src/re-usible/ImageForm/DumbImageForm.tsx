import React from 'react'
import { StyledFileInput } from '@/re-usible/ImageForm/style.foms'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DumbImageForm = ({handleDrop, handleDragOver}: any) => (
    <React.Fragment>
        <StyledFileInput
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <CloudUploadIcon />
            Choose a file or drag it down
            <input type="file"/>
        </StyledFileInput>
    </React.Fragment>
)

export default DumbImageForm
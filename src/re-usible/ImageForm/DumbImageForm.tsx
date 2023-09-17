import React from 'react'
import { ImageFormStyle, InputSpace, StyledFileInput } from '@/re-usible/ImageForm/style.foms'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputLists from '@/re-usible/InputLists/GroupList'

const DumbImageForm: React.FC<any> = ({handleDrop, handleDragOver, handleFileInputChange, imageValue, image}) => (
        <ImageFormStyle>
            <StyledFileInput
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{backgroundImage: `url(${image})`}}
            >
                <CloudUploadIcon style={{fontSize: '2rem', color: 'rgba(0, 0, 0, 0.4)'}}/>
                {imageValue}
                <input type="file" onChange={handleFileInputChange} />
            </StyledFileInput>
            <InputSpace>
                <InputLists/>
            </InputSpace>
        </ImageFormStyle>
    )

export default DumbImageForm
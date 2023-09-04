import React from 'react'
import { FileWrapper, StyledFileInput } from '@/re-usible/ImageForm/style.foms'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { InputWrapper } from '@/components/Login/style.login'
import { ListItem, ListWrapper, TagsSuggested } from '@/components/ReviewForm/style.review'

const DumbImageForm =
    ({
         handleDrop,
         handleDragOver,
         handleFileInputChange,
         handleInputFocus,
         handleInputBlur,
         open,
         groups, handleTagSelect, value
     }: any) => (
        <React.Fragment>
            <StyledFileInput
                onDrop={handleDrop}
                onDragOver={handleDragOver}>
                <CloudUploadIcon style={{fontSize: '2rem', color: 'rgba(0, 0, 0, 0.4)'}}/>
                Choose a file or drag it down *
                <input type="file" onChange={handleFileInputChange}/>
            </StyledFileInput>
            <FileWrapper>
                <InputWrapper>
                    <CssTextField
                        {...REVIEW_FORM.groupName}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        value={value}
                    />
                </InputWrapper>
                <TagsSuggested>
                    {open && (
                        <ListWrapper>
                            {groups.map((name: string) => (
                                <ListItem onMouseDown={() => handleTagSelect(name)} key={name}>{name}</ListItem>
                            ))}
                        </ListWrapper>
                    )}
                </TagsSuggested>
            </FileWrapper>
        </React.Fragment>
    )

export default DumbImageForm
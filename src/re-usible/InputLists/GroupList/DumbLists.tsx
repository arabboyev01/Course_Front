import { InputWrapper } from '@/components/Edits/style.edit'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { ListItem, ListWrapper, TagsSuggested } from '@/components/ReviewForm/style.review'
import { groups } from '@/Static'
import { FileWrapper } from '@/re-usible/ImageForm/style.foms'
import React from 'react'

const DumbLists: React.FC<any> = ({open, handleInputFocus, handleInputBlur, groupVal, handleTagSelect}) => (
    <FileWrapper>
        <InputWrapper>
            <CssTextField
                {...REVIEW_FORM.groupName}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={groupVal}
            />
        </InputWrapper>
        <TagsSuggested>
            {open && (
                <ListWrapper>
                    {groups.map((name: string) => (
                        <ListItem onMouseDown={() => handleTagSelect(name)}
                                  key={name}>{name}</ListItem>
                    ))}
                </ListWrapper>
            )}
        </TagsSuggested>
    </FileWrapper>
)

export default DumbLists
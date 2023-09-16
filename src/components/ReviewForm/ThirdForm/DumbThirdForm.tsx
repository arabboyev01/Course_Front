import React from 'react'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { InputWrapper } from '@/components/Login/style.login'
import { ThirdFormTypes } from '@/globalTypes'
import {
    FormWrapper,
    ListItem,
    ListWrapper,
    Selected,
    TagsSuggested,
    SelectedWrapper
} from '@/components/ReviewForm/style.review'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const DumbThirdForm:
    React.FC<ThirdFormTypes> =
    ({
         values,
         inputValue,
         handleInputChange,
         suggestedTags,
         handleTagSelect,
         open,
         handleInputFocus,
         handleInputBlur
     }) =>
        (
            <FormWrapper>
                <SelectedWrapper>
                    {values ? values.map((items: string, i: number) =>
                        <Selected key={i}>#{items}</Selected>
                    ) : null}
                </SelectedWrapper>
                <InputWrapper
                >
                    <CssTextField
                        {...REVIEW_FORM.tags}
                        value={inputValue}
                        onChange={handleInputChange}
                        id="drops"
                        autoComplete="off"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </InputWrapper>
                <TagsSuggested>
                    {open && (
                        <ListWrapper>
                            {suggestedTags?.length ? (
                                suggestedTags.map(({name, id}: any) => (
                                    <ListItem onMouseDown={() => handleTagSelect(name)} key={id}>#{name}</ListItem>
                                ))
                            ) : (
                                <ListItem onMouseDown={() => handleTagSelect(inputValue || '')}>
                                    {inputValue && <PlaylistAddIcon style={{color: '#555555'}}/>} {inputValue}
                                </ListItem>
                            )}
                        </ListWrapper>
                    )}
                </TagsSuggested>
            </FormWrapper>
        )

export default DumbThirdForm
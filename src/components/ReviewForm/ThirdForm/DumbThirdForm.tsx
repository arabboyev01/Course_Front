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
import { Button } from '@/components/ReviewStepper/style.review'


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
                    />
                </InputWrapper>
                <TagsSuggested>
                    {open ? (
                        <ListWrapper>
                            {suggestedTags?.map((tag: string) => (
                                <ListItem onClick={() => handleTagSelect(tag)} key={tag}>
                                    #{tag}
                                </ListItem>
                            ))}
                        </ListWrapper>
                    ) : null}
                </TagsSuggested>
                <Button type="submit" form="myForm">Submit</Button>
            </FormWrapper>
        )

export default DumbThirdForm
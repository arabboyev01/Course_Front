import React from 'react'
import { FileWrapper } from '@/re-usible/ImageForm/style.foms'
import { InputWrapper } from '@/components/Edits/style.edit'
import { CssTextField } from '@/re-usible/form-style'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { Center, ListItem, ListWrapper, TagsSuggested } from '@/components/ReviewForm/style.review'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import { usersType } from '@/globalTypes'

const DumbUserLists: React.FC<any> = ({open, handleInputFocus, handleInputBlur, groupVal, handleTagSelect, users}) => (
    <FileWrapper>
        <InputWrapper>
            <CssTextField
                {...REVIEW_FORM.users}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={groupVal}
                autocomplete="off"
            />
        </InputWrapper>
        <TagsSuggested>
            {open && (
                <ListWrapper>
                    {users !== null ? users.map((user: usersType) => (
                        <ListItem onMouseDown={() => handleTagSelect(user?.username)} key={user.id}>{user.username}
                            <span>{user.userType === "ADMIN"? "it's you": null}</span>
                        </ListItem>
                    )) : <Center><MainLoader/></Center>}
                </ListWrapper>
            )}
        </TagsSuggested>
    </FileWrapper>
)

export default DumbUserLists
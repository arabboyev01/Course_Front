import {
    CommentButton, CommentText,
    CommentWrapper,
    InputWrapper,
    sendStyle, SingleComment,
    StyleComment
} from '@/re-usible/Comments/style.comment'
import React from 'react'
import { CommentsType } from '@/globalTypes'
import { Form } from 'react-final-form'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { CssTextField } from '@/re-usible/form-style'
import Avatar from '@mui/material/Avatar'
import SendIcon from '@mui/icons-material/Send';

const DumbComment: React.FC<CommentsType> = ({postComment, user, comments}) => (
    <StyleComment>
        <Form
            onSubmit={postComment}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <InputWrapper>
                        <Avatar src={user?.imageUrl || '/broken-image.jpg'}/>
                        <CssTextField {...REVIEW_FORM.comment} multiline minRows={2} maxRows={6}/>
                        <CommentButton type="submit">
                            <SendIcon style={sendStyle}/>
                        </CommentButton>
                    </InputWrapper>
                    <CommentWrapper>
                        {comments?.length ? comments.map((comment: any) =>
                            <SingleComment key={comment.id}>
                                <Avatar src='/broken-image.jpg' />
                                <CommentText>{comment?.text}</CommentText>
                            </SingleComment>
                        ) : null}
                    </CommentWrapper>
                </form>
            )}
        />
    </StyleComment>
)
export default DumbComment
import {
    CommentButton, CommentText,
    CommentWrapper, Dates, EmojiHandlers, EmojiWrapper,
    InputWrapper,
    sendStyle, SingleComment,
    StyleComment, UsernameText
} from '@/re-usible/Comments/style.comment'
import React from 'react'
import { CommentsType } from '@/globalTypes'
import { Form } from 'react-final-form'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { CssTextField } from '@/re-usible/form-style'
import Avatar from '@mui/material/Avatar'
import SendIcon from '@mui/icons-material/Send';
import { formatted } from '@/re-usible/FormattedDate'
import DumbEmojiPicker from '@/re-usible/Emojies/DumbEmojiPicker'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CancelIcon from '@mui/icons-material/Cancel';

const DumbComment: React.FC<CommentsType> = ({postComment, comments, setShowEmoji, showEmoji}) => (
    <StyleComment>
        <Form
            onSubmit={postComment}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate>
                    {comments?.length ? comments.map((comment: any) =>
                        <CommentWrapper key={comment.id}>
                            <Avatar src={comment?.user?.imageUrl || '/broken-image.jpg'}/>
                            <SingleComment>
                                <UsernameText>{comment?.user?.username}</UsernameText>
                                <Dates>{formatted(comment?.createdAt)}</Dates>
                                <CommentText>{comment?.text}</CommentText>
                            </SingleComment>
                        </CommentWrapper>
                    ) : 'No comment'}
                    <InputWrapper>
                        <EmojiWrapper onClick={() => setShowEmoji(!showEmoji)}>
                            {!showEmoji ? <EmojiEmotionsIcon/> : <CancelIcon/>}
                        </EmojiWrapper>
                        <CssTextField {...REVIEW_FORM.comment} multiline minRows={2} maxRows={6}/>
                        <CommentButton type="submit">
                            <SendIcon style={sendStyle}/>
                        </CommentButton>
                        {showEmoji ? <EmojiHandlers><DumbEmojiPicker/></EmojiHandlers> : null}
                    </InputWrapper>
                </form>
            )}
        />
    </StyleComment>
)
export default DumbComment
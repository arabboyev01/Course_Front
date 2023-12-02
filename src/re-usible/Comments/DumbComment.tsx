import * as S from '@/re-usible/Comments/style.comment'
import React from 'react'
import { CommentsType } from '@/globalTypes'
import { Form } from 'react-final-form'
import { REVIEW_FORM } from '@/components/ReviewForm/config'
import { CssTextField } from '@/re-usible/form-style'
import Avatar from '@mui/material/Avatar'
import { formatted } from '@/re-usible/FormattedDate'
import DumbEmojiPicker from '@/re-usible/Emojies/DumbEmojiPicker'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CancelIcon from '@mui/icons-material/Cancel';
import sendIcon from '../../../public/send.svg'

const DumbComment: React.FC<CommentsType> = ({postComment, comments, setShowEmoji, showEmoji}) => (
    <S.StyleComment>
        <Form
            onSubmit={postComment}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate>
                    {comments?.length ? comments.map((comment: any) =>
                        <S.CommentWrapper key={comment.id}>
                            <Avatar src={comment?.user?.imageUrl || '/broken-image.jpg'}/>
                            <S.SingleComment>
                                <S.UsernameText>{comment?.user?.username}</S.UsernameText>
                                <S.Dates>{formatted(comment?.createdAt)}</S.Dates>
                                <S.CommentText>{comment?.text}</S.CommentText>
                            </S.SingleComment>
                        </S.CommentWrapper>
                    ) : 'No comment'}
                    <S.InputWrapper>
                        <S.EmojiWrapper onClick={() => setShowEmoji(!showEmoji)}>
                            {!showEmoji ? <EmojiEmotionsIcon/> : <CancelIcon/>}
                        </S.EmojiWrapper>
                        <CssTextField {...REVIEW_FORM.comment} multiline minRows={2} maxRows={6}/>
                        <S.CommentButton type="submit">
                            <S.SendIconImage src={sendIcon.src}/>
                        </S.CommentButton>
                        {showEmoji ? <S.EmojiHandlers><DumbEmojiPicker/></S.EmojiHandlers> : null}
                    </S.InputWrapper>
                </form>
            )}
        />
    </S.StyleComment>
)
export default DumbComment
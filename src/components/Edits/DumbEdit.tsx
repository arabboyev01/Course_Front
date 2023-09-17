import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { EditIcons } from '@/components/Profile/PersonalPage/main.style'
import { MODAL_REVIEW_DATA } from '@/components/Edits/config'
import { CssTextField } from '@/re-usible/form-style'
import { Form } from 'react-final-form'
import {
    HeaderWrapper,
    ImageSec,
    StyleEdit,
    EditDiv,
    ImageWrapper,
    InputWrapper,
    Inputs, MultiRow, Span
} from '@/components/Edits/style.edit'
import SpringModal from '@/re-usible/Modal'
import InputLists from '@/re-usible/InputLists/GroupList'
import ThirdForm from '@/components/ReviewForm/ThirdForm'
import { SubmitButton } from '@/components/Login/style.login'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'

const DumbEdit: React.FC<any> = ({singleReview, setOpen, open, handleChanges, loader}) => (
    <StyleEdit>
        {singleReview || singleReview !== null ?
            <HeaderWrapper>
                <ImageWrapper>
                    <ImageSec style={{backgroundImage: `url(${singleReview.imageUrl})`}}></ImageSec>
                    <EditDiv>
                        <EditIcon sx={EditIcons} onClick={() => setOpen(true)}/>
                    </EditDiv>
                    <SpringModal open={open} setOpen={setOpen} reviewId={singleReview.id} reviewReq="reviewReq"/>
                </ImageWrapper>
                <InputWrapper>
                    <Form
                        onSubmit={handleChanges}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <Inputs>
                                    <Span>{MODAL_REVIEW_DATA.name.span}</Span>
                                    <CssTextField {...MODAL_REVIEW_DATA.name} placeholder={singleReview?.name}/>
                                </Inputs>
                                <MultiRow>
                                    <Span>{MODAL_REVIEW_DATA.reviewText.span}</Span>
                                    <CssTextField {...MODAL_REVIEW_DATA.reviewText} placeholder={singleReview.reviewText} multiline minRows={4} maxRows={6}/>
                                </MultiRow>
                                <Inputs>
                                    <Span>{MODAL_REVIEW_DATA.group.span}</Span>
                                <InputLists/>
                                </Inputs>
                                <Inputs>
                                     <Span>{MODAL_REVIEW_DATA.tags.span}</Span>
                                     <ThirdForm/>
                                </Inputs>
                                <Inputs>
                                    <SubmitButton type="submit">
                                        {loader ? <ButtonLoader/> : 'Update'}
                                    </SubmitButton>
                                </Inputs>
                            </form>
                        )}
                    />
                </InputWrapper>
            </HeaderWrapper> : null
        }
    </StyleEdit>
)

export default DumbEdit
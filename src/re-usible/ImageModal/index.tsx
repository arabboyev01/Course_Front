import * as React from 'react'
import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { ImageModal } from '@/store/Selector'
import { setImageObjects } from '@/store/reducerSlice'
import * as S from '@/re-usible/ImageModal/style.modal'
import DownloadImage from '../../../public/download.svg'
import closeIconPng from '../../../public/closeIcon.svg'

const ImageModalComponent: React.FC = () => {
    const modalProp = useSelector(ImageModal);
    const dispatch = useDispatch();
    const {open, imageUrl} = modalProp;

    const handleClose = () => {
        const payload: any = {open: false, imageUrl: ''}
        dispatch(setImageObjects(payload))
    }

    return <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={S.modal}
        disableAutoFocus={true}
    >
        <S.ModalWrapper>
            <S.IconsDev>
                <S.ATag href={imageUrl} download="myImage.jpg" target="_blank">
                    <S.CloseIcon src={DownloadImage.src} alt="download_icon"/>
                </S.ATag>
                <S.ATag onClick={handleClose}>
                    <S.CloseIcon src={closeIconPng.src} alt='close_icon'/>
                </S.ATag>
            </S.IconsDev>
            <S.ModalImage src={imageUrl} alt="image-url"/>
        </S.ModalWrapper>
    </Modal>
}

export default ImageModalComponent
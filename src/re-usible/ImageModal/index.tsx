import * as React from 'react'
import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { ImageModal } from '@/store/Selector'
import { setImageObjects } from '@/store/reducerSlice'
import { CloseIcon, Icon, ModalImage, ModalWrapper } from '@/re-usible/ImageModal/style.modal'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const ImageModalComponent: React.FC = () => {
    const modalProp = useSelector(ImageModal);
    const dispatch = useDispatch();
    const {open, imageUrl} = modalProp;

    const handleClose = () => {
        const payload = {open: false, imageUrl: ''}//@ts-ignore
        dispatch(setImageObjects(payload))
    }

    return <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
    >
        <ModalWrapper>
            <CloseIcon onClick={handleClose}>
                <CloseFullscreenIcon sx={Icon}/>
            </CloseIcon>
            <ModalImage src={imageUrl} alt="image-url"/>
        </ModalWrapper>
    </Modal>
}

export default ImageModalComponent
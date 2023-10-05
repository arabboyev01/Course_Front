import * as React from 'react'
import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { ImageModal } from '@/store/Selector'
import { setImageObjects } from '@/store/reducerSlice'
import { ATag, CloseIcon, Icon, IconsDev, modal, ModalImage, ModalWrapper } from '@/re-usible/ImageModal/style.modal'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import DownloadIcon from '@mui/icons-material/Download';

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
        sx={modal}
        disableAutoFocus={true}
    >
        <ModalWrapper>
            <IconsDev>
                <ATag href={imageUrl} download="myImage.jpg" target="_blank">
                    <DownloadIcon sx={Icon}/>
                </ATag>
                <CloseIcon onClick={handleClose}>
                    <CloseFullscreenIcon sx={Icon}/>
                </CloseIcon>
            </IconsDev>
            <ModalImage src={imageUrl} alt="image-url"/>
        </ModalWrapper>
    </Modal>
}

export default ImageModalComponent
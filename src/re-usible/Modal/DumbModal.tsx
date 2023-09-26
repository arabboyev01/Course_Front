import Modal from '@mui/material/Modal'
import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Fade from './Fade'
import { UploadContainer, FileInput, UploadButton, FileName, ContentWrapper } from './style.modal'
import { ModalProps } from '@/globalTypes'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'

const DumbModal: React.FC<ModalProps> =
    ({
         handleClose,
         open,
         selectedFile,
         handleFileChange,
         handleUploadImage,
         loader
     }) => (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <ContentWrapper>
                        <UploadContainer style={{ backgroundImage: `url(${selectedFile})` }}>
                            <FileInput type="file" id="file" accept="image/*" onChange={handleFileChange}/>
                            {selectedFile ?
                                <UploadButton onClick={handleUploadImage}>
                                    {loader ? <ButtonLoader/> : 'Upload Image'}
                                </UploadButton> :
                                <UploadButton htmlFor="file">Choose Image</UploadButton>
                            }
                            {selectedFile && <FileName>Selected File: {selectedFile.name}</FileName>}
                        </UploadContainer>
                    </ContentWrapper>
                </Fade>
            </Modal>
        </div>
    )

export default DumbModal
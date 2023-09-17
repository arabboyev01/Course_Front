import * as React from 'react';
import DumbModal from '@/re-usible/Modal/DumbModal'
import { api } from '@/config'
import { useAlert } from 'react-alert'

export default function SpringModal({open, setOpen, reviewId, reviewReq}: any) {
    const handleClose = () => setOpen(false);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [loader, setLoader] = React.useState(false)
    const alert = useAlert();
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const baseUrl = typeof reviewReq === 'undefined' ? 'api/update-image' : 'api/update-image-review'
    const handleUploadImage = () => {
        setLoader(true)
        api.UpdateUserImage(baseUrl, selectedFile, reviewId).then(() => {
            alert.success('Image updated')
            setOpen(false)
        }).catch(() => {
            alert.error('Something went wrong')
        }).finally(() => setLoader(false))
    }

    return <DumbModal
        handleClose={handleClose}
        open={open} selectedFile={selectedFile}
        handleFileChange={handleFileChange}
        handleUploadImage={handleUploadImage}
        loader={loader}
    />
}
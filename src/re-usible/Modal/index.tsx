import * as React from 'react';
import DumbModal from '@/re-usible/Modal/DumbModal'
import { api } from '@/config'
import { useAlert } from 'react-alert'

export default function SpringModal({open, setOpen}: any) {
  const handleClose = () => setOpen(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
const alert = useAlert();
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadImage = () => {
    api.UpdateUserImage("api/update-image", selectedFile).then(() => {
      alert.success("Image updated")
      setOpen(false)
    }).catch(() => {
      alert.error("Something went wrong")
    })
  }

  return <DumbModal
      handleClose={handleClose}
      open={open} selectedFile={selectedFile}
      handleFileChange={handleFileChange}
      handleUploadImage={handleUploadImage}
  />
}
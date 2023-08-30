import DumbImageForm from '@/re-usible/ImageForm/DumbImageForm'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleImage } from '@/store/reducerSlice'

const ImageForm = () => {

    const [image, setImage] = useState<string | null>()
    const dispatch = useDispatch<AppDispatch>()

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<any>) => {
            setImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };
    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const base64Data = e.target.result;
                setImage(base64Data);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    useEffect(() => {// @ts-ignore
        dispatch(handleImage(image))
    }, [dispatch, image])

    return <DumbImageForm handleDrop={handleDrop} handleDragOver={handleDragOver}
                          handleFileInputChange={handleFileInputChange}/>
}

export default ImageForm
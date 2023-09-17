import DumbImageForm from '@/re-usible/ImageForm/DumbImageForm'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleImage } from '@/store/reducerSlice'

const ImageForm = () => {

    const [image, setImage] = useState<string | null>()
    const dispatch = useDispatch<AppDispatch>()
    const [imageValue, setImageValue] = useState('Choose a file or drag and drop image')
    const [imageUrl, setImageUrl] = useState('/')

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file: any = event.dataTransfer.files[0];
        const imageURL = URL.createObjectURL(file);
        setImageValue(file.name)
        setImage(file)
        setImageUrl(imageURL)
    };
    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => { //@ts-ignore
        const file: any = event?.target?.files[0];
        const imageURL = URL.createObjectURL(file);
        setImageValue(file.name)
        setImage(file)
        setImageUrl(imageURL)
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    useEffect(() => {// @ts-ignore
        dispatch(handleImage(image))
    }, [dispatch, image])

    return <DumbImageForm
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleFileInputChange={handleFileInputChange}
        imageValue={imageValue}
        image={imageUrl}
    />
}

export default ImageForm
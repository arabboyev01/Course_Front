import DumbImageForm from '@/re-usible/ImageForm/DumbImageForm'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleGroupName, handleImage } from '@/store/reducerSlice'

const ImageForm = () => {

    const [image, setImage] = useState<string | null>()
    const dispatch = useDispatch<AppDispatch>()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('')
    const [imageValue, setImageValue] = useState('Choose a file or drag and drop image')

    const groups: string[] = ['Movie', 'Book', 'Games']
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file: any = event.dataTransfer.files[0];
        setImageValue(file.name)
        setImage(file)
    };
    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => { //@ts-ignore
        const file: any = event?.target?.files[0];
        setImageValue(file.name)
        setImage(file)
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    useEffect(() => {// @ts-ignore
        dispatch(handleImage(image))
    }, [dispatch, image])

    const handleTagSelect = (name: string) => {
        setValue(name) // @ts-ignore
        dispatch(handleGroupName(name))
    }

    const handleInputFocus = (): void => setOpen(true);
    const handleInputBlur = () => setOpen(false)

    return <DumbImageForm
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleFileInputChange={handleFileInputChange}
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        open={open}
        groups={groups}
        handleTagSelect={handleTagSelect}
        value={value}
        imageValue={imageValue}
    />
}

export default ImageForm
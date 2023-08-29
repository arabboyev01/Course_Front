import DumbImageForm from '@/re-usible/ImageForm/DumbImageForm'
import React, { useState } from 'react'
const ImageForm = () => {

    const [image, setImage] = useState<string | null>()

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<any>) => {
            setImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return <DumbImageForm handleDrop={handleDrop} handleDragOver={handleDragOver}/>
}

export default ImageForm
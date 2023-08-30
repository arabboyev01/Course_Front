import React, { useState } from 'react'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm/DumbThirdForm'

const ThirdForm = () => {

    const existingTags: string[] = ['react', 'javascript', 'node.js', 'css', 'html'];

    const [inputValue, setInputValue] = useState<string>('');
    const [suggestedTags, setSuggestedTags] = useState<string[]>(existingTags);
    const [values, setValues] = useState<any>([])
    const [open, setOpen] = useState(false);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filteredTags = existingTags.filter((tag) =>
            tag.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestedTags(filteredTags);
    };

    const handleTagSelect = function(tag: string){
        setInputValue(tag);
        setSuggestedTags([]);
        setValues([...values, tag])
    };

    const handleInputFocus = (): void => setOpen(true);

    return (
        <DumbThirdForm
            values={values}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            suggestedTags={suggestedTags}
            handleTagSelect={handleTagSelect}
            open={open}
            existingTags={existingTags}
            handleInputFocus={handleInputFocus}
        />
    )
}

export default ThirdForm;
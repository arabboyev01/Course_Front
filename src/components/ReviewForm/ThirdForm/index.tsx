import React, { useState } from 'react'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm/DumbThirdForm'

const ThirdForm = () => {

    const existingTags: string[] = ['react', 'javascript', 'node.js', 'css', 'html'];

    const [inputValue, setInputValue] = useState<string>('');
    const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
    const [values, setValues] = useState<any>([])
    const [open, setOpen] = useState(false)


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpen(true)
        const value = event.target.value;
        setInputValue(value);

        const filteredTags = existingTags.filter((tag) =>
            tag.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestedTags(filteredTags);
    };

    const inputClicked = () => {
        setOpen(true)
        // console.log("input clicked")
    }

    console.log(open)

    const handleTagSelect = (tag: string) => {
        setInputValue(tag);
        setSuggestedTags([]);
        setValues([...values, suggestedTags[0]])
    };

    return (
        <DumbThirdForm
            values={values}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            suggestedTags={suggestedTags}
            handleTagSelect={handleTagSelect}
            open={open}
            inputClicked={inputClicked}
        />
    )
}

export default ThirdForm
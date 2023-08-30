import React, { useEffect, useState } from 'react'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm/DumbThirdForm'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleTags } from '@/store/reducerSlice'

const ThirdForm = () => {

    const existingTags: string[] = ['react', 'javascript', 'node.js', 'css', 'html'];
    const dispatch = useDispatch<AppDispatch>()
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
    useEffect(() => {
        dispatch(handleTags(values))
    }, [dispatch, values])

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
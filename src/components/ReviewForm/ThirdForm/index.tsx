import React, { useEffect, useState } from 'react'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm/DumbThirdForm'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleTags } from '@/store/reducerSlice'
import { api } from '@/config'
import { TagsType } from '@/globalTypes'

const ThirdForm = () => {

    const [existingTags, setExistingTags] = useState<TagsType[] | null>(null);

    useEffect(() => {
        api.getUsers('api/tags').then(data => {
            setExistingTags(data)
        }).catch(err => console.log(err))
    }, [])


    const dispatch = useDispatch<AppDispatch>()
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestedTags, setSuggestedTags] = useState<object | any>(existingTags);
    const [values, setValues] = useState<any>([])
    const [open, setOpen] = useState(false);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filteredTags = existingTags?.filter(({name}: any) =>
            name.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestedTags(filteredTags);
    };

    const handleTagSelect = function (tag: string) {
        setInputValue('');
        setSuggestedTags([]);
        setValues([...values, tag])
    };
    useEffect(() => {
        dispatch(handleTags(values))
    }, [dispatch, values])

    const handleInputFocus = (): void => setOpen(true);
    const handleInputBlur = () => setOpen(false)

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
            handleInputBlur={handleInputBlur}
        />
    )
}

export default ThirdForm;
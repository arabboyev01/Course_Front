import React, { useEffect, useState } from 'react'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm/DumbThirdForm'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleTags } from '@/store/reducerSlice'
import { api } from '@/config'
import { TagsType } from '@/globalTypes'
import { SingleUser } from '@/store/Selector'
import { user } from '@/utils/errors'

const ThirdForm: React.FC = () => {

    const [existingTags, setExistingTags] = useState<TagsType[] | null>(null);

    const dispatch = useDispatch<AppDispatch>()
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestedTags, setSuggestedTags] = useState<TagsType[] | undefined| null>(existingTags);
    const [values, setValues] = useState<any>([])
    const [open, setOpen] = useState(false);
    const singleUser = useSelector(SingleUser)

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

    const handleInputFocus = (): void => {
        setOpen(true);
        api.getUsers('api/tags').then(data => {
            setExistingTags(data)
            setSuggestedTags(data)
        }).catch(err => console.log(err))
    }
    const handleInputBlur = () => setOpen(false)
    const userType = singleUser?.userType === user.isAdmin

    return (
        <DumbThirdForm
            values={values}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            suggestedTags={suggestedTags}
            handleTagSelect={handleTagSelect}
            open={open}
            handleInputFocus={handleInputFocus}
            handleInputBlur={handleInputBlur}
            userType={userType}
        />
    )
}

export default ThirdForm;
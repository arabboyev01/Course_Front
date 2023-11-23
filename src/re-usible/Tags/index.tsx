import DumbTags from '@/re-usible/Tags/Dumbtags'
import { useEffect, useState } from 'react'
import { TagsType } from '@/globalTypes'
import { api } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleSelectedTags } from '@/store/reducerSlice'
import { SingleUser } from '@/store/Selector'

const Tags = () => {
    const [existingTags, setExistingTags] = useState<TagsType[] | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[] | any>([])
    const dispatch = useDispatch<AppDispatch>()
    const singleUser = useSelector(SingleUser)

    useEffect(() => {
        api.getUsers('api/tags').then(data => {
            setExistingTags(data)
        }).catch(err => console.log(err))
    }, [])
    const handleSelect = (value: string) => {
        if (selectedTags?.includes(value)) {
            setSelectedTags(selectedTags.filter((tag: any) => tag !== value));
            return;
        }
        setSelectedTags([...selectedTags, value])
    }

    useEffect(() => {
        dispatch(handleSelectedTags(selectedTags))
    }, [dispatch, selectedTags])
    console.log(existingTags)

    return (
        <DumbTags
            existingTags={existingTags}
            handleSelectedTags={handleSelect}
            selectedTags={selectedTags}
            singleUser={singleUser}
        />
    )
}

export default Tags
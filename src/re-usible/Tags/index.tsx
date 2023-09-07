import DumbTags from '@/re-usible/Tags/Dumbtags'
import { useEffect, useState } from 'react'
import { TagsType } from '@/globalTypes'
import { api } from '@/config'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleSelectedTags } from '@/store/reducerSlice'

const Tags = () => {
    const [existingTags, setExistingTags] = useState<TagsType[] | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        api.getUsers('api/tags').then(data => {
            setExistingTags(data)
        }).catch(err => console.log(err))
    }, [])
    const handleSelect = (value: string) => {
        if (selectedTags?.includes(value)) {
            setSelectedTags(selectedTags.filter(tag => tag !== value));// @ts-ignore
            return;
        }
        setSelectedTags([...selectedTags, value])
    }
    useEffect(() => {// @ts-ignore
        dispatch(handleSelectedTags(selectedTags))
    }, [dispatch, selectedTags])

    return <DumbTags existingTags={existingTags} handleSelectedTags={handleSelect} selectedTags={selectedTags}/>
}

export default Tags
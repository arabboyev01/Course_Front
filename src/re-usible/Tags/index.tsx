import DumbTags from '@/re-usible/Tags/Dumbtags'
import { useEffect, useState } from 'react'
import { TagsType } from '@/globalTypes'
import { api } from '@/config'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store'
import { handleSelectedTags } from '@/store/reducerSlice'
import { SingleUser } from '@/store/Selector'
import { Router } from '@/utils/router'

const Tags = () => {
    const [existingTags, setExistingTags] = useState<TagsType[] | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[] | any>([])
    const dispatch = useDispatch<AppDispatch>()
    const singleUser = useSelector(SingleUser)
    const { handleRoute } = Router()

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

    return (
        <DumbTags
            existingTags={existingTags}
            handleSelectedTags={handleSelect}
            selectedTags={selectedTags}
            singleUser={singleUser}
            handleRoute={handleRoute}
        />
    )
}

export default Tags
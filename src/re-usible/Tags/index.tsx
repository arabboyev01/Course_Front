import DumbTags from '@/re-usible/Tags/Dumbtags'
import { useEffect, useState } from 'react'
import { TagsType } from '@/globalTypes'
import { api } from '@/config'

const Tags = () => {
    const [existingTags, setExistingTags] = useState<TagsType[] | null>(null);

    useEffect(() => {
        api.getUsers('api/tags').then(data => {
            setExistingTags(data)
        }).catch(err => console.log(err))
    }, [])

    return <DumbTags existingTags={existingTags}/>
}

export default Tags
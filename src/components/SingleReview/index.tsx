import DumbSingle from '@/components/SingleReview/DumbSingle'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { useRouter } from 'next/router'
import { ReviewType } from '@/globalTypes'
import { isObjectEmpty } from '@/utils'
import { setImageObjects } from '@/store/reducerSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

const SingleReview = () => {
    const [single, setSingle] = useState<ReviewType | null>(null)
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if(!isObjectEmpty(router.query)){
            const { id }: any = router.query;
            api.getUsers(`api/single-review?id=${id}`).then((data) => setSingle(data))
                .catch(err => console.log(err))
        }
    }, [router.query])

     const handleImageModal = (imageUrl: string) => {
        const payload: any = {open: true, imageUrl}
        dispatch(setImageObjects(payload))
    }

    return <DumbSingle single={single} handleImageModal={handleImageModal}/>
}

export default SingleReview
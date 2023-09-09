import DumbSingle from '@/components/SingleReview/DumbSingle'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { useRouter } from 'next/router'
import { ReviewType } from '@/globalTypes'
import { isObjectEmpty } from '@/utils'

const SingleReview = () => {
    const [single, setSingle] = useState<ReviewType | null>(null)
    const router = useRouter();

    useEffect(() => {
        if(!isObjectEmpty(router.query)){
            const {id}: any = router.query;
            api.getUsers(`api/single-review?id=${id}`).then((data) => setSingle(data))
                .catch(err => console.log(err))
        }
    }, [router.query])

    return <DumbSingle single={single}/>
}

export default SingleReview
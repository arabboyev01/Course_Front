import DumbSingle from '@/components/SingleReview/DumbSingle'
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { useRouter } from 'next/router'
import { ReviewType } from '@/globalTypes'

const SingleReview = () => {
    const router = useRouter();
    const {id}: any = router.query;
    const parsedId = parseInt(id);
    console.log(parsedId)

    const [single, setSingle] = useState<null | ReviewType>(null)

    useEffect(() => {
        api.getUsers(`api/single-review?id=${parsedId}`).then((data) => setSingle(data))
            .catch(err => console.log(err))
    }, [parsedId])
    console.log(single)

    return <DumbSingle single={single}/>
}

export default SingleReview
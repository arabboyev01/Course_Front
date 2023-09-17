import DumbEdit from '@/components/Edits/DumbEdit'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isObjectEmpty } from '@/utils'
import { ReviewType } from '@/globalTypes'
import { api } from '@/config'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { groupName } from '@/store/Selector'

const Edits = () => {

    const [singleReview, setSingleReview] = useState<ReviewType | null>(null)
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [loader, setLoader] = useState(false)
    const GroupName = useSelector(groupName)

    useEffect(() => {
        if (!isObjectEmpty(router.query)) {
            const {id}: any = router.query;
            api.getUsers(`api/single-review?id=${id}`).then((data) => setSingleReview(data))
                .catch(err => console.log(err))
        }
    }, [router.query])

    const handleChanges = (values: object) => {
        setLoader(true)
    }
    console.log(singleReview)
    return (
        <DumbEdit
            singleReview={singleReview}
            setOpen={setOpen}
            open={open}
            handleChanges={handleChanges}
            loader={loader}
        />
    )
}

export default Edits
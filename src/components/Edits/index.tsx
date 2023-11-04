import DumbEdit from '@/components/Edits/DumbEdit'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isObjectEmpty } from '@/utils'
import { EditInputTypes, ReviewType } from '@/globalTypes'
import { api } from '@/config'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { groupName, tags } from '@/store/Selector'
import { handleChanges } from '@/components/Edits/utils'
import { useAlert } from 'react-alert'
import { ParsedUrlQuery } from 'querystring'

const Edits = () => {

    const [singleReview, setSingleReview] = useState<ReviewType | null>(null)
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [loader, setLoader] = useState(false)
    const group_name = useSelector(groupName)
    const tag = useSelector(tags)
    const alert = useAlert();

    useEffect(() => {
        if (!isObjectEmpty(router.query)) {
            const { id }: ParsedUrlQuery = router.query;
            api.getUsers(`api/single-review?id=${id}`).then((data) => setSingleReview(data))
                .catch(err => console.log(err))
        }
    }, [router.query])

    const handleReviewChanges = (values: EditInputTypes) => {
        handleChanges(values, setLoader, singleReview, group_name, tag, alert)
    }

    return (
        <DumbEdit
            singleReview={singleReview}
            setOpen={setOpen}
            open={open}
            handleChanges={handleReviewChanges}
            loader={loader}
        />
    )
}

export default Edits
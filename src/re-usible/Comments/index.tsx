import DumbComment from '@/re-usible/Comments/DumbComment'
import { api } from '@/config'
import { useAlert } from 'react-alert'
import React, { useEffect, useState } from 'react'
import { isObjectEmpty } from '@/utils'
import { userValidation } from '@/utils/errors'

const Comments: React.FC<any> = ({reviewId}) => {

    const alert = useAlert();
    const [data, setData] = useState()

    useEffect(() => {
        if (reviewId !== undefined) {
            api.getUsers(`api/all-comments?reviewId=${reviewId}`).then((data) => {
                setData(data)
            }).catch(err => console.log(err))
        }
    }, [reviewId])

    const postComment = (values: object | any, form: any) => {
        const text = values.text
        const payload = {reviewId, text}
        api.PostAuth('api/comments', payload).then((data) => {
            if (data?.name === userValidation.prsimaValidationError) throw new Error
            if (!isObjectEmpty(data)) {
                alert.success('You have commented')
            }
            throw new Error
        }).catch(() => alert.error('Please sign in'))
        form.reset();
    }

    return <DumbComment postComment={postComment} comments={data}/>
}

export default Comments
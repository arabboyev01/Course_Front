import DumbComment from '@/re-usible/Comments/DumbComment'
import { api } from '@/config'
import { useAlert } from 'react-alert'
import React, { useEffect, useState } from 'react'
import { isObjectEmpty } from '@/utils'
import { userValidation } from '@/utils/errors'

const Comments: React.FC<any> = ({reviewId}) => {

    const alert = useAlert();
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (reviewId !== undefined) {
            api.getUsers(`api/all-comments?reviewId=${reviewId}`).then((data) => {
                setData(data)
            }).catch(err => console.log(err))
        }
    }, [reviewId, load])

    const postComment = (values: object | any, form: any) => {
        const text = values.text
        const payload = {reviewId, text}
        api.PostAuth('api/comments', payload).then((data) => {
            console.log(data)
            if (data?.name === userValidation.prsimaValidationError) throw new Error
            if (!isObjectEmpty(data) && data?.id) {
                alert.success('You have commented')
                setLoad(!load)
            }
        }).catch(() => alert.error('Please sign in'))
        form.reset();
    }

    return <DumbComment postComment={postComment} comments={data}/>
}

export default Comments
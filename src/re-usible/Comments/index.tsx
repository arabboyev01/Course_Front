import DumbComment from '@/re-usible/Comments/DumbComment'
import { api } from '@/config'
import { useAlert } from 'react-alert'
import React, { useEffect, useState } from 'react'
import { usersType } from '@/globalTypes'
import { isObjectEmpty } from '@/utils'

const Comments: React.FC<any> = ({reviewId, comments}) => {

    const alert = useAlert();
    const [user, setUser] = useState<usersType | null | any>(null);

    useEffect(() => {
        api.SingleUser('api/single-user').then((data) => setUser(data))
            .catch(err => console.log(err))
    }, []);
    const postComment = (values: object | any, form: any) => {
        const text = values.text
        const payload = {reviewId, text}
        api.PostAuth('api/comments', payload).then((data) => {
            console.log(data)
            if (!isObjectEmpty(data)) {
                alert.success('You have commented')
            }
            throw new Error
        }).catch(() => alert.error('Something went wrong!'))
        form.reset();
    }

    return <DumbComment postComment={postComment} user={user} comments={comments}/>
}

export default Comments
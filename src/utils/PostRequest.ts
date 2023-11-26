import { api } from '@/config'
import { userValidation } from '@/utils/errors'
import { handleLiked } from '@/store/reducerSlice'
import { Toaster } from '@/re-usible/Toaster'

export const handleLikeReq = (reviewId: number, alert: any, dispatch: any) => {
    const payload = {reviewId}
    api.PostAuth('api/likes', payload).then((res) => {
        if (res.error === userValidation.validation) throw new Error
        if (res) dispatch(handleLiked())
    }).catch(() => alert.error('Please sign in'))
}

export const PostBookmarks = (reviewId: number, dispatch: any, theme: string) => {
    const payload = {reviewId}
    api.PostAuth('api/post-bookmark', payload).then((res) => {
        if (res) dispatch(handleLiked())
        if(res) Toaster(res, 'info', 'bottom-center', theme)
    }).catch(err => console.log(err))
}
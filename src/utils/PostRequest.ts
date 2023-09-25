import { api } from '@/config'
import { userValidation } from '@/utils/errors'
import { handleLiked } from '@/store/reducerSlice'

export const handleLikeReq = (reviewId: number, alert: any, dispatch: any) => {
    const payload = {reviewId}
    api.PostAuth('api/likes', payload).then((res) => {
        if (res === userValidation.validationUserId) throw new Error
        if(res) dispatch(handleLiked())
    }).catch(() => alert.info('Please login'))
}
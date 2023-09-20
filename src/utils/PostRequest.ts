import { api } from '@/config'
import { userValidation } from '@/utils/errors'

export const handleLikeReq = (reviewId: number, alert: any) => {
    const payload = {reviewId}
    api.PostAuth('api/likes', payload).then((res) => {
        if (res === userValidation.validationUserId) throw new Error
    }).catch(() => alert.info('Please login'))
}
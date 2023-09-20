import { api } from '@/config'

export const handleReview = (values: any, setLoading: any, Tags: any, GroupName: string, router: any, alert: any, Image: any, userId: number|null) => {
    setLoading(true)
    api.Review('api/review', values, Image, Tags, GroupName, userId).then((data) => {
        if (Object.keys(data).length === 0) throw new Error
        else {
            alert.success('Review Created');
            router.push('/')
        }
    }).catch(() => {
        alert.error('Something went wrong!')
    }).finally(() => setLoading(false))
}
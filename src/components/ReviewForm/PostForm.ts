import { api } from '@/config'
import { Toaster } from '@/re-usible/Toaster'

export const handleReview = (values: any, setLoading: any, Tags: any, GroupName: string, router: any, theme: any, Image: any, userId: number|null) => {
    setLoading(true)
    api.Review('api/review', values, Image, Tags, GroupName, userId).then((data) => {
        if (Object.keys(data).length === 0) throw new Error
        else if(data?.id) {
            Toaster('Review created!', 'success', 'bottom-center', theme)
            router.push('/')
        }
    }).catch(() => {
        Toaster('Something went wrong!', 'error', 'bottom-center', theme)
    }).finally(() => setLoading(false))
}
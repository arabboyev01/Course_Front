import { api } from '@/config'

export const handleReview = (values: any, setLoading: any, Tags: any, GroupName: string, router: any, alert: any, Image: any) => {
    setLoading(true)
    api.Review('api/review', values, Image, Tags, GroupName).then((data) => {
        if (Object.keys(data).length === 0) throw new Error
        else {
            alert.success('Review Created');
            router.push('/')
        }
    }).catch(() => {
        alert.error('Something went wrong!')
    }).finally(() => setLoading(false))
}


// const handleReview = (values: any) => {
//     setLoading(true)
//     api.Review('api/review', values, Image, Tags, GroupName).then((data) => {
//         if (Object.keys(data).length === 0) throw new Error
//         else {
//             alert.success('Review Created');
//             router.push('/')
//         }
//     }).catch(() => {
//         alert.error('Something went wrong!')
//     }).finally(() => setLoading(false))
// }
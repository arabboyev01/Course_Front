import { api } from '@/config'
import { Toaster } from '@/re-usible/Toaster'

export const handleChanges = (values: object | any, setLoader: any, singleReview: any, group_name: string, tag: string[] | null, theme: any) => {
    setLoader(true)
    const tagName = singleReview?.tags?.map((item: any) => item.name)
    const name = !values.name ? singleReview?.name : values.name
    const reviewText = !values.reviewText ? singleReview?.reviewText : values.reviewText
    const groupName = !group_name ? singleReview?.groupName : group_name
    const tags = !tag ? tagName : tag
    const payload = {name, reviewText, groupName, tags, reviewId: singleReview?.id}

    api.updateReview(`api/review-update`, payload).then(data => {
        if(data.id) Toaster('Review data updated', 'info', 'bottom-center', theme)
    }).catch(() => Toaster('Something went wrong', 'error', 'bottom-center', theme)).finally(() => setLoader(false))
}
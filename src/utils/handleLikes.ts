export const handleLikesCounts = (data: any, id: number) => {
    return data?.map((data: any) => {
        if(data.reviewId === id) return data.likeCount
    })
}

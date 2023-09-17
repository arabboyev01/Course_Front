export const handleLikes = (data: any) => {
    const userLikedReview = data?.map((data: any) => data.isLiked)
    return !!userLikedReview;
}

import NoData from '@/re-usible/NoData'
import SkeletonComponent from '@/re-usible/Skeleton'
import React, { FC } from 'react'
import { ReviewLoadsProp } from '@/globalTypes'
import PaginationRounded from '@/re-usible/Pagination'
import { useSelector } from 'react-redux'
import { reviewLength } from '@/store/Selector'

const ReviewLoads: FC<ReviewLoadsProp> = ({children, ReviewsData, loading, totalLike, count, handlePaginateData}) => {
    const totalReview = useSelector(reviewLength)
    return <>
        {ReviewsData === undefined && <NoData str="No reviews created yet"/>}
        {ReviewsData === null || loading || !totalLike ?
            Array.from(new Array(2)).map((_, index: number) => <SkeletonComponent key={index}/>) :
            <>{children}</>
        }
        {totalReview > 4 && <PaginationRounded count={count} handlePaginateData={handlePaginateData}/>}
    </>
}
export default ReviewLoads
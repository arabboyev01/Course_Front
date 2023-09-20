import { useEffect, useState } from 'react'
import { api } from '@/config'
import DumbReview from '@/components/ReviewCart/DumbReview'
import { ReviewType } from '@/globalTypes'
import * as React from 'react'
import { useRouter } from 'next/router'
import { quantity } from '@/components/ReviewCart/utils'
import { StyleReview } from '@/components/Profile/MyReview/style.review'
import Sorting from '@/components/Sorting'
import { useDispatch, useSelector } from 'react-redux'
import { reviewDataLength } from '@/store/reducerSlice'
import { filterName, sortName } from '@/store/Selector'

const MyReview = () => {

    const router = useRouter()
    const [review, setReview] = useState<ReviewType[] | null | any>(null)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const FilterName = useSelector(filterName);
    const SortName = useSelector(sortName)
    const checkId = (id: number) => {
        window.localStorage.setItem('reviewId', id.toString())
    }
    const setId = (id: number) => {
        router.push(`/edit-review/${id}`)
    }

    const count = quantity(review)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedReview = Array.isArray(review) ? review.slice(indexOfFirstPost, indexOfLastPost) : null
    const handlePaginateData = (number: any) => setCurrentPage(number)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        setLoading(true)
        api.SingleUser(`api/user-review?selectedTags=${null}&filterName=${FilterName}&&sortName=${SortName}`).then((data) => {
            setReview(data)
            dispatch(reviewDataLength(data.length))
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }, [dispatch, FilterName, SortName]);
    const navigateSinglePage = (id: number) => router.push(`/single-review/${id}`)


    return (
        <StyleReview>
            <Sorting />
            <DumbReview
                ReviewsData={slicedReview}
                anchorEl={anchorEl}
                handleClick={handleClick}
                setAnchorEl={setAnchorEl}
                loading={loading}
                setId={setId}
                checkId={checkId}
                edit={true}
                navigateSinglePage={navigateSinglePage}
                count={count}
                handlePaginateData={handlePaginateData}
            />
        </StyleReview>
    )
}

export default MyReview
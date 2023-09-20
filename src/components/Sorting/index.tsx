import DumbSorting from '@/components/Sorting/DumbSorting'
import { useDispatch, useSelector } from 'react-redux'
import { reviewLength } from '@/store/Selector'
import { sortName, filterName } from '@/store/reducerSlice'
import { selectedObjectsTypes } from '@/globalTypes'

const Sorting = () => {

    const totalReview = useSelector(reviewLength)
    const dispatch = useDispatch() //@ts-ignore
    const handleSort = (option: selectedObjectsTypes) => dispatch(sortName(option.value))//@ts-ignore
    const handleFilter = (option: selectedObjectsTypes) => dispatch(filterName(option.value))

    return <DumbSorting totalReview={totalReview} handleSort={handleSort} handleFilter={handleFilter}/>
}

export default Sorting
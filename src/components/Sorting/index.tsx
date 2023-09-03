import DumbSorting from '@/components/Sorting/DumbSorting'
import { useSelector } from 'react-redux'
import { reviewLength } from '@/store/Selector'

const Sorting = () => {

    const options = ['Movie', 'Book', 'Genre'];
    const filters = ['Option', 'Option', 'Option'];
    const totalReview = useSelector(reviewLength)

    return <DumbSorting options={options} filters={filters} totalReview={totalReview}/>
}

export default Sorting
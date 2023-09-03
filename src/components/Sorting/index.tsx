import DumbSorting from '@/components/Sorting/DumbSorting'

const Sorting = () => {

    const options = ['Movie', 'Book', 'Genre'];
    const filters = ['Option', 'Option', 'Option'];

    return <DumbSorting options={options} filters={filters} />
}

export default Sorting
import DumbSorting from '@/components/Sorting/DumbSorting'

const Sorting = () => {

    const options = ['Option 1', 'Option 2', 'Option 3'];
    const filters = ['Option 1', 'Option 2', 'Option 3'];

    return <DumbSorting options={options} filters={filters} firstOption="Options" />
}

export default Sorting
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { usersType } from '@/globalTypes'
import EditableDataGrid from '@/components/Profile/Users/EditableDataGrid'
import { useAlert } from 'react-alert'

const Users = () => {
    const [users, setUsers] = useState<usersType[] | null | { error: string }>(null)
    const [tableData, setTableData] = useState<usersType[] | null | { error: string } | any>(users)
    const alert = useAlert();


    useEffect(() => {
        api.SingleUser('api/users').then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setTableData(users)
    }, [users])

    const [editableIndex, setEditableIndex] = useState(null);
    const [editedValue, setEditedValue] = useState('');

    const handleUpdate = (index: number) => {
        const payload = {userId: index, updatedStatus: editedValue}
        api.PostAuth('api/update-user-status', payload).then(() => {
            alert.success("User data updated")
        }).catch(err => console.log(err))
    };

    return <EditableDataGrid
        users={tableData}
        handleUpdate={handleUpdate}
        editableIndex={editableIndex}
        setEditedValue={setEditedValue}
        setEditableIndex={setEditableIndex}
    />
}

export default Users
import { useEffect, useState } from 'react'
import { api } from '@/config'
import { usersType } from '@/globalTypes'
import DumbUsers from '@/components/Profile/Users/DumbUsers'

const Users = () => {
    const [users, setUsers] = useState<usersType[] | []>([])

    useEffect(() => {
        api.SingleUser('api/users').then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    const handleCellValueChange = (params: any) => {
    const { id, value } = params;
    const field = params.field;

    const rowIndex = users.findIndex((row) => row.id === id);

    if (rowIndex !== -1) {
      let newRows: any = [...users];

      newRows[rowIndex][field] = value;

      setUsers(newRows);
      console.log(`Changed ID: ${id}, Field: ${field}, New Value: ${value}`);
    }
  };
    console.log(users)

    return <DumbUsers rows={users} handleSelectionChange={handleCellValueChange} />
}

export default Users
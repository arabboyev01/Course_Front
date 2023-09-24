import React from 'react'
import { Center, StyleUser } from '@/components/Profile/Users/style.user'
import { EditableDataGridProps } from '@/globalTypes'
import MainLoader from '@/re-usible/Loaders/MainLoader'
import { userValidation } from '@/utils/errors'
import DumbTable from '@/components/Profile/Users/DumbTable'

const EditableDataGrid: React.FC<EditableDataGridProps> =
    ({users, editableIndex, setEditedValue, handleUpdate, setEditableIndex}) => (
        <StyleUser>
            {users === null ? <Center><MainLoader/></Center> :
                users.error === userValidation.validation ?
                    <Center>You don&apos;t have permission</Center> :
                    <DumbTable
                        data={users}
                        handleUpdate={handleUpdate}
                        editableIndex={editableIndex}
                        setEditedValue={setEditedValue}
                        setEditableIndex={setEditableIndex}
                    />
            }
        </StyleUser>
    )

export default EditableDataGrid
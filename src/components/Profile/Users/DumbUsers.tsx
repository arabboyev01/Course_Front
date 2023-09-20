import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MainLoader from '@/re-usible/Loaders/MainLoader'
import { usersTableColumns } from '@/Static'
import { Center, StyleUser, TableWrapper } from '@/components/Profile/Users/style.user'
import { userValidation } from '@/utils/errors'

const DumbUsers: React.FC<any> = ({rows, handleSelectionChange}) => (
    <StyleUser>
        <TableWrapper>
            {!rows.length ? <Center><MainLoader/></Center> :
                rows === userValidation.unAuthorizedUser ? <Center>You do&apos;nt have a permission</Center> :
                <DataGrid
                    rows={rows}
                    columns={usersTableColumns}
                    initialState={{pagination: {paginationModel: {page: 0, pageSize: 5}}}}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    onRowSelectionModelChange={handleSelectionChange}
                />
            }
        </TableWrapper>
    </StyleUser>
)

export default DumbUsers
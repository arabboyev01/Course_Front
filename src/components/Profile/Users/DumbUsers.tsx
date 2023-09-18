import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MainLoader from '@/re-usible/Loaders/MainLoader'
import { usersTableColumns } from '@/Static'
import { Center, StyleUser, TableWrapper } from '@/components/Profile/Users/style.user'

const DumbUsers: React.FC<any> = ({rows}) => (
    <StyleUser>
        <TableWrapper>
            {rows === null ? <Center><MainLoader/></Center> :
                <DataGrid
                    rows={rows}
                    columns={usersTableColumns}
                    initialState={{pagination: {paginationModel: {page: 0, pageSize: 5} } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            }
        </TableWrapper>
    </StyleUser>
)

export default DumbUsers
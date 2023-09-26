import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { StylePagination } from '@/re-usible/Pagination/style.pagination'
import { useStyles } from './style.pagination'

export default function PaginationRounded({count, handlePaginateData}: any) {
    const classes = useStyles();
    return (
        <StylePagination>
            <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                onChange={(e: any, index: number) => handlePaginateData(index)}
                classes={{
                    root: classes.root,
                }}
            />
        </StylePagination>
    );
}
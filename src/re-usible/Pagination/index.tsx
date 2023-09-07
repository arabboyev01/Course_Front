import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { StylePagination } from '@/re-usible/Pagination/style.pagination'

export default function PaginationRounded({count, handlePaginateData}: any) {
    return (
        <StylePagination>
            <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                onChange={(e: any, index: number) => handlePaginateData(index)}
            />
        </StylePagination>
    );
}
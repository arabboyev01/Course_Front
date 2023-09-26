import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { StylePagination } from '@/re-usible/Pagination/style.pagination'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiPaginationItem-root': {
            color: '#000',
            border: `1px solid #000`,
        },
    },
}));

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
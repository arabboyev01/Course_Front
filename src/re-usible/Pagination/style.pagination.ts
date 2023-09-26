import styled from "styled-components";
import { makeStyles } from '@mui/styles'

export const StylePagination = styled.div`
 margin: 22px 0;
`

export const useStyles = makeStyles(() => ({
    root: {
        '& .MuiPaginationItem-root': {
            color: '#8f8f8f',
            border: `1px solid #8f8f8f`,
        },
    },
}));
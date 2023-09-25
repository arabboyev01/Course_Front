import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { api } from '@/config'
import { useAlert } from 'react-alert'
import { userValidation } from '@/utils/errors'

export default function BasicRating({reviewId, grade}: number | any) {
    const [value, setValue] = React.useState<number | any>(grade);

    const alert = useAlert();
    const handleRating = (rating: any) => {
        setValue(rating);
        const payload = { reviewId, rating}
        api.PostAuth('api/grade-rate', payload).then((res) => {
            if(res.error === userValidation.validation) throw new Error
                alert.info(res.message)
            }).catch(() => alert.error("Please sign in"))
    }

    return (
        <Box sx={{'& > legend': {mt: 2}}}>
            <Rating
                name="simple-controlled"
                value={value}
                size="large"
                onChange={(event, newValue) => handleRating(newValue)}
            />
        </Box>
    );
}
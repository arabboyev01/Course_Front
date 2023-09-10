import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { api } from '@/config'
import { useAlert } from 'react-alert'

export default function BasicRating({reviewId, grade}: number | any) {
    const [value, setValue] = React.useState<number | any>(grade);

    const alert = useAlert();
    const handleRating = (rating: any) => {
        setValue(rating);
        const payload = { reviewId, rating}
        api.PostAuth('api/grade-rate', payload).then(() => {
                alert.info('Thank you for rating!')
            }).catch(err => console.log(err))
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
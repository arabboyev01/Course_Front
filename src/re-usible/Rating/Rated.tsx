import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { api } from '@/config'

export default function BasicRating({reviewId, userId, grade}: number | any) {
    const [value, setValue] = React.useState<number | any>(grade);

    const handleRating = (newVal: any) => {
        setValue(newVal);
        api.PostLikesGrades('api/grade-rate', userId, reviewId, newVal)
            .then(data => console.log(data))
            .catch(err => console.log(err))
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
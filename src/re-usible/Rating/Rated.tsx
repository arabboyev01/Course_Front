import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { api } from '@/config'
import { userValidation } from '@/utils/errors'
import { RatingText } from '@/components/SingleReview/style.single'
import { useSelector } from 'react-redux'
import { mode } from '@/store/Selector'
import { Toaster } from '@/re-usible/Toaster'

export default function BasicRating({reviewId, grade}: { reviewId: number, grade: number }) {
    const [value, setValue] = React.useState<number>(grade);
    const theme = useSelector(mode)

    const handleRating = (rating: any) => {
        setValue(rating);
        const payload = {reviewId, rating}
        api.PostAuth('api/grade-rate', payload).then((res) => {
            if (res.error === userValidation.validation) throw new Error
            Toaster(res.message, 'info', 'bottom-center', theme)
        }).catch(() => Toaster('Please sign in', 'info', 'bottom-center', theme))
    }

    return (
        <Box style={{marginTop: '2px', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Rating
                name="simple-controlled"
                value={value}
                size="large"
                onChange={(_, newValue) => handleRating(newValue)}
            />
            <RatingText>({value})</RatingText>
        </Box>
    );
}
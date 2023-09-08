import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const RatingComponent = ({value, size}: any) => (
    <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        size={size}
        emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
    />
)
export default RatingComponent;
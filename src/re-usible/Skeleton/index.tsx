import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';


const SkeletonComponent = () => (
    <Grid container sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '40px 0'}}>
        <Skeleton variant="rectangular" sx={{width: '100%', height: '400px',background: "#ddd"}}/>
        <Skeleton sx={{width: '25%', height: '20px', marginTop: '20px', background: "#ddd"}}/>
        <Skeleton variant="circular" sx={{width: '50px', height: '50px', paddingTop: '20px', background: "#ddd"}}/>
        <Skeleton sx={{width: '80%', height: '30px', paddingTop: '20px', background: "#ddd"}}/>
        <Skeleton sx={{width: '80%', height: '80px', paddingTop: '20px', background: "#ddd"}}/>
    </Grid>
)

export default SkeletonComponent

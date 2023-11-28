import { CameraStyle, Circle, Data, DataImage, Paragraph, StyleNoData } from '@/re-usible/NoData/style.noData'
import RateReviewIcon from '@mui/icons-material/RateReview';
const NoData = () => (
    <StyleNoData>
        <Data>
            <Circle>
                <RateReviewIcon style={CameraStyle}/>
            </Circle>
            <Paragraph> No Posts Yet! </Paragraph>
        </Data>
    </StyleNoData>
)

export default NoData
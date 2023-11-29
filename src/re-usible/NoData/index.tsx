import { CameraStyle, Circle, Data, Paragraph, StyleNoData } from '@/re-usible/NoData/style.noData'
import RateReviewIcon from '@mui/icons-material/RateReview';
import { FC } from 'react'

interface Prop {
    str: string
}
const NoData: FC<Prop> = ({ str }) => (
    <StyleNoData>
        <Data>
            <Circle>
                <RateReviewIcon style={CameraStyle}/>
            </Circle>
            <Paragraph> {str} </Paragraph>
        </Data>
    </StyleNoData>
)

export default NoData
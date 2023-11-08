import { Data, DataImage, Paragraph, StyleNoData } from '@/re-usible/NoData/style.noData'
import EmptyImage from '../../../public/no-data.png'
const NoData = () => (
    <StyleNoData>
        <Data>
            <DataImage src={EmptyImage.src} alt='no-data'/>
            <Paragraph>No data created yet! </Paragraph>
        </Data>
    </StyleNoData>
)

export default NoData
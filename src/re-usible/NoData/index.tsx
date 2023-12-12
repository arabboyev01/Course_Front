import { StyleNoData } from '@/re-usible/NoData/style.noData'
import { FC } from 'react'
import { Empty } from 'antd';

interface Prop { str: string }

const NoData: FC<Prop> = ({str}) => (
    <StyleNoData>
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{height: 60}}
            description={ <a href="">{str}</a>}
        >
        </Empty>
    </StyleNoData>
)

export default NoData
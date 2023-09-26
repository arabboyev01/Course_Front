import { Ring } from '@uiball/loaders'
import { useSelector } from 'react-redux'
import { mode } from '@/store/Selector'

const MainLoader = () => {

    const theme = useSelector(mode);

    return <Ring size={40}  lineWeight={5}  speed={2} color={theme === "light" ? "rgba(22, 95, 199)": "#fff"} />
}

export default MainLoader
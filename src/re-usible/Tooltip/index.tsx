import Tooltip from '@mui/material/Tooltip';
import React, { FC } from 'react'
import { TooltipProp } from '@/globalTypes'
import { useMediaQuery } from '@mui/material';

const TooltipComponent: FC<TooltipProp> = ({children, title}) => {
    const isSmallScreen = useMediaQuery('(max-width: 1200px)');

    return (
        <React.Fragment>
            {isSmallScreen ?
                <Tooltip title={title} placement="top"><div>{children}</div></Tooltip> : <>{children}</>
            }
        </React.Fragment>
    );
}

export default TooltipComponent
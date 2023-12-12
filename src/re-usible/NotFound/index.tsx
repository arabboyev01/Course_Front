import React from 'react';
import { Button, Result } from 'antd';
import { Router } from '@/utils/router'
import { NotFoundStyle } from '@/re-usible/NotFound/Not.Found.style'

const NotFound: React.FC<{username: string | string[] | undefined}> = ({username}) => {
    const {handleRoute} = Router()
    return (
        <NotFoundStyle>
            <Result
                status="404"
                title="404"
                subTitle={`Sorry, the user ${username} does not exist`}
                extra={<Button type="primary" onClick={() => handleRoute('/')}>Back Home</Button>}
            />
        </NotFoundStyle>
    );
}

export default NotFound;
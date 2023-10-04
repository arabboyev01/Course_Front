import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { SingleUser } from '@/store/Selector'

const UserAvatar = () => {
    const router = useRouter();
    const handleProfile = () => router.push('/profile')
    const user = useSelector(SingleUser)

    return (
        <Stack direction="row" spacing={2} style={{position: 'relative', cursor: 'pointer'}}>
            <Avatar src={user?.imageUrl || '/broken-image.jpg'} onClick={handleProfile}/>
        </Stack>
    );
}

export default UserAvatar
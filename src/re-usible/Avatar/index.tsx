import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AddReviewButton } from '@/re-usible/Avatar/style.avatar'
import { useRouter } from 'next/router'

const UserAvatar = () => {
    const router = useRouter();
    const handleRoute = () => router.push('/create-review')
    const handleProfile = () => router.push('/profile')

    return (
        <Stack direction="row" spacing={2} style={{position: 'relative', cursor: 'pointer'}}>
            <AddReviewButton onClick={handleRoute}>Create Review</AddReviewButton>
            <Avatar src="/broken-image.jpg" onClick={handleProfile}/>
        </Stack>
    );
}
export default UserAvatar
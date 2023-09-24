import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AddReviewButton } from '@/re-usible/Avatar/style.avatar'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { SingleUser } from '@/store/Selector'

const UserAvatar = () => {
    const router = useRouter();
    const handleRoute = () => router.push('/review-creation/1')
    const handleProfile = () => router.push('/profile')
    const user = useSelector(SingleUser)

    return (
        <Stack direction="row" spacing={2} style={{position: 'relative', cursor: 'pointer'}}>
            <AddReviewButton onClick={handleRoute}>Create Review</AddReviewButton>
            <Avatar src={user?.imageUrl || '/broken-image.jpg'} onClick={handleProfile}/>
        </Stack>
    );
}
export default UserAvatar
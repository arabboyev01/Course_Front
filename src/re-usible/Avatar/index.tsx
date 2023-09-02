import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AddReviewButton, LogOut, StyleAvatar, Text } from '@/re-usible/Avatar/style.avatar'
import { useRouter } from 'next/router'

const UserAvatar = () => {
    const [open, setOpen] = React.useState(false)
    const router = useRouter();
    const handleRoute = () => router.push("/create-review")
    return (
        <Stack direction="row" spacing={2} style={{position: 'relative', cursor: 'pointer'}}>
            <AddReviewButton onClick={handleRoute}>Add Review</AddReviewButton>
            <Avatar src="/broken-image.jpg" onClick={() => setOpen(!open)}/>
            {open ?
                <StyleAvatar>
                    <Text>Profile</Text>
                    <LogOut>Log out</LogOut>
                </StyleAvatar> : null
            }
        </Stack>
    );
}
export default UserAvatar
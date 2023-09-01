import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { LogOut, StyleAvatar, Text } from '@/re-usible/Avatar/style.avatar'

const UserAvatar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <Stack direction="row" spacing={2} style={{position: 'relative', cursor: 'pointer'}}>
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
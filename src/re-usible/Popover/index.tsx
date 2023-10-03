import * as React from 'react';
import Popover from '@mui/material/Popover';
import { PopoverProp } from '@/globalTypes'
import EditIcon from '@mui/icons-material/Edit';
import { Editor, Lists } from '@/re-usible/Popover/style.popover'
import DeleteIcon from '@mui/icons-material/Delete';
import { api } from '@/config'
import { useAlert } from 'react-alert'

const BasicPopover: React.FC<PopoverProp> = ({anchorEl, setAnchorEl, setId}) => {

    const handleClose = () => {
        setAnchorEl(null);
    };
    const alert = useAlert();
    const id: any = typeof window !== "undefined" ? window.localStorage.getItem('reviewId') : null
    const handleDelete = () => {
        const payload = {id: parseInt(id)}
        api.DeleteMethod('api/delete-review', payload).then(() => {
            alert.info("Review deleted")
        }).catch(err => console.log(err))
    }

    const open = Boolean(anchorEl);

    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Editor>
                    <Lists onClick={() => setId(id)}>
                         <EditIcon/> Edit
                    </Lists>
                    <Lists onClick={handleDelete}>
                        <DeleteIcon/> Delete
                    </Lists>
                </Editor>
            </Popover>
        </div>
    );
}

export default BasicPopover
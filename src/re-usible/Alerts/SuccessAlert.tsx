import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const SuccessAlert: React.FC<any> = ({successMessage}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box style={{ width: '300px', position: "absolute",top: 0 }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
            {successMessage}
        </Alert>
      </Collapse>
    </Box>
  );
}
export default SuccessAlert
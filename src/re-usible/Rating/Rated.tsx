import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({id}: any) {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box sx={{'& > legend': { mt: 2 }}}>
      <Rating
        name="simple-controlled"
        value={value}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
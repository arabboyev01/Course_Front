import { styled } from '@mui/material'
import { TextField } from 'mui-rff'
export const CssTextField = styled(TextField)(({}) => ({
    width: 'cal(100%-10px)',
    height: '40px',
    '& label.Mui-focused': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& input.MuiOutlinedInput-input': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        color: 'rgba(0, 0, 0, 0.4)',
        '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        },
    },
    'input[type=number]::-webkit-inner-spin-button': {'-webkit-appearance: none;margin': 0},
    'input[type=number]::-webkit-outer-spin-button': { '-webkit-appearance: none;margin': 0 }
}));
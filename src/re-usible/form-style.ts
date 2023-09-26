import { styled } from '@mui/material'
import { TextField } from 'mui-rff'
export const CssTextField: any = styled(TextField)(({}) => ({
    width: 'cal(100%-10px)',
    height: '35px',
    '& label.Mui-focused': {
        color: '#8f8f8f',
    },
    '& input.MuiOutlinedInput-input': {
        color: '#8f8f8f',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#8f8f8f',
    },
    '& .MuiInputLabel-root': {
        color: '#8f8f8f',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '5px',
        color: '#8f8f8f',
        '& fieldset': {
            borderColor: '#8f8f8f',
        },
        '&:hover fieldset': {
            borderColor: '#8f8f8f',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#8f8f8f',
        },
    },
    'input[type=number]::-webkit-inner-spin-button': {'-webkit-appearance: none;margin': 0},
    'input[type=number]::-webkit-outer-spin-button': { '-webkit-appearance: none;margin': 0 }
}));


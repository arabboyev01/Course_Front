import * as Yup from 'yup'
import { FOUNDATION_FORM_VALUES } from '@/components/Login/LoginConfig'

export const PERSONAL_DATA = {
    firstName: {
        name: 'firstName',
        require: true,
        header: 'Firstname',
    },
    lastName: {
        name: 'lastName',
        require: true,
        header: 'Lastname',
    },
    email: {
        name: 'email',
        require: true,
        header: 'E-mail',
    },
    hashPassword: {
        name: 'hashPassword',
        label: "Enter your password",
        require: true,
        header: 'Password',
    },
    username: {
        name: 'username',
        require: true,
        header: 'Username',
    },
}

export const schema = Yup.object().shape({
    hashPassword: Yup.string().required(`${FOUNDATION_FORM_VALUES.password.label} is required.`),
});
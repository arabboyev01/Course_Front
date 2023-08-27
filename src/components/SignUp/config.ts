import * as Yup from 'yup';
export const FOUNDATION_FORM_VALUES = {
    firstName: {
        name: 'firstName',
        label: 'Firstname',
        required: true
    },
    lastName: {
        name: 'lastName',
        label: 'Lastname',
        required: true
    },
    username: {
        name: 'username',
        label: 'Username',
        required: true
    },
    email: {
        name: 'email',
        label: 'E mail',
        required: true
    },

    password: {
        name: 'password',
        label: 'Password',
        required: true
    },
}
export const schema = Yup.object().shape({
    firstName: Yup.string().required(`${FOUNDATION_FORM_VALUES.firstName.label} is required.`),
    lastName: Yup.string().required(`${FOUNDATION_FORM_VALUES.lastName.label} is required.`),
    email: Yup.string().email(`Please write valid email.`).required(`${FOUNDATION_FORM_VALUES.email.label} is required.`),
    username: Yup.string().required(`${FOUNDATION_FORM_VALUES.username.label} is required.`),
    password: Yup.string().required(`${FOUNDATION_FORM_VALUES.password.label} is required.`),
});
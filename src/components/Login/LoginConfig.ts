import * as Yup from 'yup';
export const FOUNDATION_FORM_VALUES = {
    username: {
        name: 'username',
        label: 'Username',
        required: true
    },

    password: {
        name: 'password',
        label: 'Password',
        required: true
    },

    search: {
        name: "search",
        label: "type here to search..."
    }
}
export const schema = Yup.object().shape({
    username: Yup.string().required(`${FOUNDATION_FORM_VALUES.username.label} is required.`),
    password: Yup.string().required(`${FOUNDATION_FORM_VALUES.password.label} is required.`),
});

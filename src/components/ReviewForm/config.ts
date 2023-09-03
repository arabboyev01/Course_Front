// import * as Yup from 'yup';
export const REVIEW_FORM = {
    name: {
        name: 'name',
        label: 'Name of the review',
        required: true
    },

    text: {
        name: 'reviewText',
        label: 'What is review about',
        required: true
    },
    groupName: {
        name: "groupName",
        label: "Choose a group name. For example: Movie",
        required: true
    },
    tags: {
        name: "tags",
        label: "Choose tags",
        required: true
    },
}
// export const schema = Yup.object().shape({
//     name: Yup.string().required(`${REVIEW_FORM.name.label} is required.`),
//     text: Yup.string().required(`${REVIEW_FORM.text.label} is required.`),
//     groupName: Yup.string().required(`${REVIEW_FORM.groupName.label} is required.`),
// });
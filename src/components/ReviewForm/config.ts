import * as Yup from 'yup';
export const REVIEW_FORM = {
    name: {
        name: 'name',
        label: 'Name of the review',
        required: true
    },

    reviewText: {
        name: 'reviewText',
        label: 'What is review about',
        required: true
    },
    groupName: {
        name: "groupName",
        label: "Choose a group name",
        required: true
    },
    tags: {
        name: "tags",
        label: "Choose tags",
        required: true
    },
    comment: {
        name: "text",
        label: "Leave a comment",
    }
}
export const schema = Yup.object().shape({
    name: Yup.string().required(`${REVIEW_FORM.name.label} is required.`),
    reviewText: Yup.string().required(`${REVIEW_FORM.reviewText.label} is required.`),
});
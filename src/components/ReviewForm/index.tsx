import React from 'react'
import DumbForm from './DumbForm'

const MyCustomComponent = () => {
    return <p>This is a custom component.</p>;
};
const ReviewForm = () => {


    return <DumbForm MyCustomComponent={MyCustomComponent}/>
}
export default ReviewForm;
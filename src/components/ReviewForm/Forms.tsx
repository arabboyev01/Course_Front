import { Form } from 'react-final-form'
// import { schema } from './config'
import React from 'react'
// import { makeValidate } from 'mui-rff'
import ImageForm from '@/re-usible/ImageForm'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm'
import FirstForm from '@/components/ReviewForm/FirstForm'
import { SuccessMessage } from '@/components/ReviewForm/SuccessMessage'

// const validate: any = makeValidate(schema);
const Forms = ({handleReview, current, loading, success}: any) => (
    <Form
        onSubmit={handleReview}
        render={({handleSubmit}) => (
            <form id="myForm" onSubmit={handleSubmit} noValidate>
                {current === 1 ? <FirstForm/> : null}
                {current === 2 ? <ImageForm/> : null}
                {current === 3 ? <DumbThirdForm loading={loading}/> : null}
                {success && <SuccessMessage/>}
            </form>
        )}
    />
)

export default Forms;
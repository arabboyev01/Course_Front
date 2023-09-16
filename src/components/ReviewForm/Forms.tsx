import { Form } from 'react-final-form'
import React from 'react'
import ImageForm from '@/re-usible/ImageForm'
import DumbThirdForm from '@/components/ReviewForm/ThirdForm'
import FirstForm from '@/components/ReviewForm/FirstForm'
import validateFunction from '@/components/ReviewForm/validation'
import { Button } from '@/components/ReviewStepper/style.review'
import { ButtonWrapper, FormStyle } from '@/components/ReviewForm/style.review'
import ButtonLoader from '@/re-usible/Loaders/ButtonLoader'

const Forms = ({handleReview, loading, setChanges, id}: any) => (
    <React.Fragment>
        <Form
            onSubmit={handleReview}
            validate={validateFunction}
            render={({handleSubmit}) => (
                <form id="myForm" onSubmit={handleSubmit} noValidate>
                    <FormStyle>
                        {id == 1 ? <FirstForm/> : null}
                        {id == 2 ? <ImageForm/> : null}
                        {id == 3 ? <DumbThirdForm /> : null}
                    </FormStyle>
                </form>
            )}
        />
        <ButtonWrapper>
            <Button onClick={() => setChanges(+id - 1)} disabled={id == 1}>Back</Button>
            {id == 3 ?
                <Button type="submit" form="myForm">{loading ? <ButtonLoader/> : 'Submit'}</Button> :
                <Button onClick={() => setChanges(+id + 1)}>Next</Button>
            }
        </ButtonWrapper>
    </React.Fragment>
)

export default Forms;
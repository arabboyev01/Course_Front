import React from 'react'
import { StepperProps } from '@/globalTypes'
import { TiTick } from 'react-icons/ti';
import { Button, ChildrenComponent, Step, StepName, StepsSpace, StepsText, StyleReview } from '@/components/ReviewStepper/style.review'

const DumbReview: React.FC<StepperProps> = ({steps, currentStep, complete, setComplete, setCurrentStep, children, setChanges}) => (
    <StyleReview>
        <StepsSpace>
            {steps?.map((step: string, i: number) =>
                <StepsText key={i} currentStep={currentStep} index={i} complete={complete}>
                    <Step>
                        {i + 1 < currentStep || complete ? <TiTick size={24}/> : i + 1}
                    </Step>
                    <StepName>{step}</StepName>
                </StepsText>
            )}
        </StepsSpace>
        <ChildrenComponent>
            {children}
        </ChildrenComponent>
            {currentStep < 4 ? <Button onClick={() => setChanges(currentStep, steps, setComplete, setCurrentStep)}>Next</Button> : null}
    </StyleReview>
)

export default DumbReview;
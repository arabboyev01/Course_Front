import React from 'react'
import { StepperProps } from '@/globalTypes'
import { TiTick } from 'react-icons/ti';
import { ChildrenComponent, Step, StepName, StepsSpace, StepsText, StyleReview } from '@/components/ReviewStepper/style.review'
import { steps } from '@/Static'

const DumbReview: React.FC<StepperProps> = ({children, currentStep}) => (
    <StyleReview>
        <StepsSpace>
            {steps?.map((step: string, i: number) =>
                <StepsText key={i} currentStep={currentStep} index={i}>
                    <Step>
                        {i + 1 < currentStep ? <TiTick size={24}/> : i + 1}
                    </Step>
                    <StepName>{step}</StepName>
                </StepsText>
            )}
        </StepsSpace>
        <ChildrenComponent>
            {children}
        </ChildrenComponent>
    </StyleReview>
)

export default DumbReview;
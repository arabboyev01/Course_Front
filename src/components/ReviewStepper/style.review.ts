import styled from 'styled-components';

export const StyleReview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 88vh;
`
export const StepsSpace = styled.div`
  display: flex;
  align-items: center;
  max-width: 330px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 375px) {
    max-width: 320px;
  }
`
export const ChildrenComponent = styled.div`
  margin: 30px 0;
`
export const StepsText: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  background:  ${({theme}) => theme.primary};
  ${(props: any) => props.currentStep <= props.index + 1  && `
    background: rgb(62, 40, 222);
  `}

  ${(props: any) => (props.index + 1 < props.currentStep || props.complete) && `
    background: rgb(28, 150, 57);
  `}
`

export const Step = styled.div`
  margin-top: 30px;
`

export const StepName = styled.p`
  font-size: 15px;
  margin-top: 10px;
  color: ${({theme}) => theme.text};
  font-weight: 400;
`

export const Button = styled.button`
  max-width: 350px;
  width: 100%;
  height: 40px;
  background: ${(props: any) => props.disabled ? '#333' : 'rgb(62, 40, 222)'};
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 50px;
  font-size: 18px;
  font-weight: 400;
`
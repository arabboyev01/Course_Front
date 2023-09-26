import styled from 'styled-components'

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  border-radius: 8px;
  border: .1px solid #575656;
  padding: 30px 20px;
  @media(max-width: 500px){
    width: 400px;
  }
   @media(max-width: 400px){
    width: 360px;
  }
`
export const SignUpInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  height: 60px;
  @media(max-width: 500px){
   flex-direction: column;
    width: 380px;
    height: 100px;
    justify-content: space-between;
  }
  @media(max-width: 400px){
    width: 350px;
  }
`

export const Seperated = styled.div`
  margin: 30px 0 20px 0;
  height: 60px;
`
export const LoginWrapper = styled.div`
 display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
  padding-left: 20px;
`
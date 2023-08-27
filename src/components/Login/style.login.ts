import styled from 'styled-components'

export const StyleLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const LoginWrapper = styled.div`
  width: 400px;
  border: .1px solid #575656;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  border-radius: 8px;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    max-width: 350px;
    width: 100%;
    margin: 0 20px;
  }
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 300;
`

export const InputWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 400px) {
    width: 320px;
  }
`
export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background: rgba(22, 95, 199);
  color: #fff;
  border: none;
  border-radius: 8px;
`

export const Lines = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  gap: 20px;
`

export const Line = styled.div`
  width: 100px;
  height: 1px;
  background-color: #565454;
`

export const Paragraph = styled.p`
  text-transform: uppercase;
  color: #565454;
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`
export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
`
export const SignUp = styled.p`
  color: #565454;
  font-size: 14px;
  font-weight: 300;
  padding-top: 10px;
`
export const SignUpLinks = styled.p`
  color: rgba(22, 95, 199);
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`

export const Icon = {
    fontSize: "2rem",
}
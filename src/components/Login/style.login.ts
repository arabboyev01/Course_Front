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
  font-size: 22px;
  font-weight: 400;
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
  background: rgb(62, 40, 222);
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`
export const LoginButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 10px;
  width: 240px;
  height: 35px;
  border: .1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  cursor: pointer;
  padding-right: 8px;
  font-weight: 200;
  background: #fff;
  font-size: 15px;
  &:hover{
    border: .5px solid rgba(0, 0, 0, 0.8);
  }
`
export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
  padding-left: 20px;
`
export const SignUp = styled.p`
  color: #565454;
  font-size: 14px;
  font-weight: 300;
  padding-top: 10px;
`
export const SignUpLinks = styled.p`
  color: rgb(62, 40, 222);
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
`

export const IconsGithub = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#181717",
    marginLeft: "22px"
}
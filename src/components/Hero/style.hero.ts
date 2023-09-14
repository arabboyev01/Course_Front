import styled from 'styled-components'

export const StyleHero = styled.div`
  width: 100%;
  background-image: url("https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png");
  background-size: contain;
  background-position: center;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  max-width: 1330px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 1330px){
    padding: 0 20px;
  }
`

export const MainText = styled.h1`
  text-align: center;
  font-weight: 900;
  max-width: 500px;
  @media(max-width: 1330px){
    font-size: 28px;
  }
`

export const Description = styled.p`
  color: #8f8f8f;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin-top: 40px;
  position: relative;
`

export const Forms = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  @media(max-width: 620px){
    flex-direction: column;
  }
`

export const SubmitButton = styled.button`
  height: 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  padding: 10px 5px;
  background: rgb(62, 40, 222);
  color: #fff;
  width: 200px;
  border-radius: 8px;
`
export const News = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  margin-top: 40px;
  gap: 20px;
`
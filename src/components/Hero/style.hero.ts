import styled from 'styled-components'

export const StyleHero = styled.div`
  width: 100%;
  background-image: ${({ theme }) =>
    theme.name === 'light'
      ? 'url("https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png")'
      : 'none'};
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
  @media (max-width: 1330px) {
    padding: 0 15px;
  }
`

export const MainText = styled.h1`
  text-align: center;
  font-weight: 500;
  max-width: 800px;
  font-size: 52px;
  @media(max-width: 650px){
    font-size: 22px;
  }
`

export const Description = styled.p`
  color: #8f8f8f;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin-top: 20px;
`

export const DoneIconStyle = {
    color: "green"
}
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 550px;
  width: 100%;
  margin-top: 40px;
  position: relative;
`
export const News = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  margin-top: 40px;
  gap: 15px;
  
  @media(max-width: 650px){
    gap: 10px;
  }
`
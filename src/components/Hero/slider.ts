import styled from "styled-components"

export const SliderStyled = styled.div`
  margin: 60px 5px 0 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important
  }
  
  @media (max-width: 650px) {
    margin: 40px 0 0 0;
    justify-content: start;
  }
`

export const LoaderCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SliderCart = styled.div`
  display: flex;
  max-width: 400px;
  height: 150px;
  border: ${({theme}) => theme.borderTheme};
  padding: 20px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  
  &:hover{
    border: ${({theme}) => theme.borderTheme};
  }
  
  @media(max-width: 650px){
    justify-content: start;
    width: 360px;
    margin: 0 auto 0 5px;
  }
`

export const Images = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
`

export const Content = styled.div`
  width: 250px;
`

export const Title = styled.h3`
  font-weight: 500;
  margin-top: 5px;
  
   @media(max-width: 440px){
    font-size: 16px;
  }
`
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-style: italic;
  margin-top: 5px;
`
export const Grade = styled.p`
  font-size: 14px;
`

export const Time = styled.p`
color: #8f8f8f`
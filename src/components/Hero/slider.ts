import styled from "styled-components"

export const SliderStyled = styled.div`
  width: 100%;
  padding: 60px 40px 20px 40px;
  display: flex;
  justify-content: center;
  overflow: scroll;
  gap: 20px;
  margin: 0 5px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0 !important
  }
  
  @media (max-width: 650px) {
    margin: 50px 20px;
    gap: 20px;
  }
`

export const LoaderCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SliderCart = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  border: .5px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  
  &:hover{
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  
  @media(max-width: 650px){
    justify-content: start;
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
`

export const Time = styled.p`
color: #8f8f8f`
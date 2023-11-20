import styled from 'styled-components'

export const StyleSorting = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: ${({theme}) => theme.borderTheme};
  @media(max-width: 1330px){
    margin: 80px 20px 0 20px;
  }
  @media(max-width: 650px){
    margin: 80px 20px 0 20px;
    flex-direction: column;
    align-items: start;
  }
`
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 650px) {
    margin-top: 12px;
  }
`

export const Times = styled.div`

`

export const SubText = styled.p`
  font-size: 15px;
  color: #8f8f8f;
  font-weight: 800;
`


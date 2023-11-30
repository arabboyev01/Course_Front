import styled from 'styled-components'

export const StyleNoData =  styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Data = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border: ${({theme}) => theme.borderTheme};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
`

export const CameraStyle = {
    fontSize: "4rem",
    color: '#686868'
}

export const Paragraph = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-top: 30px;
`
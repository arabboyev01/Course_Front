import styled from "styled-components"

export const StyleFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${({theme}) => theme.borderTheme};
  padding: 10px 0;
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const Copyright = styled.h4`
  margin: 20px 0;
  font-weight: 400;
`


export const icon = {
    color: "#8f8f8f",
    cursor: "pointer",
    '&:hover': {
        color: "#000"
    }
}
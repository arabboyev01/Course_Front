import styled from "styled-components"

export const StyleFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: .5px solid rgba(0, 0, 0, 0.3);
  padding: 20px 0;
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const Copyright = styled.h4`
  margin: 20px 0;
  font-weight: 700;
`


export const icon = {
    color: "#8f8f8f",
    cursor: "pointer",
    '&:hover': {
        color: "#000"
    }
}
import styled from "styled-components";

export const HomeStyle = styled.div`
   width: 100%;
  position: fixed;
`
export const BodyWrapper = styled.div`
  display: flex;
  max-width: 1330px;
  margin: 50px auto;
  width: 100%;
  height: 80vh;
  column-gap: 20px;
  justify-content: space-between;
  @media(max-width: 820px){
    margin: 50px 10px;
  }
  @media(max-width: 540px){
   flex-direction: column;
    row-gap: 50px;
    column-gap: 10px;
  }
`

import styled from "styled-components";

export const StyleHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
`

export const HeaderContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1299px){
    margin: 0 10px;
  }
`
export const LoginButton = styled.button`
  width: 80px;
  height: 30px;
  background: rgb(239, 245, 248);
  border: none;

  &:hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`
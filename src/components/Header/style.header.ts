import styled from "styled-components";

export const StyleHeader = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1000;
  border: .1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
`

export const HeaderContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1299px){
    margin: 0 10px;
  }
`
export const LoginButton = styled.button`
  width: 100px;
  height: 40px;
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
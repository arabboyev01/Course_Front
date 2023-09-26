import styled from "styled-components";

export const StyleHeader: any = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: ${({theme}) => theme.borderTheme};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background: ${({theme}) => theme.body}
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
export const Aligned = styled.div`
 display: flex;
  align-items: center;
  gap: 20px;
`
export const LoginButton = styled.button`
  width: 150px;
  height: 40px;
  background: ${({theme}) => theme.primary};
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;

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
  cursor: pointer;
`
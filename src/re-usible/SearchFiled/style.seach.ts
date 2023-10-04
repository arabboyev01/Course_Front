import styled from "styled-components"

export const StyleSearch = styled.div`
  width: 100%;
  padding: 0 25px;
`

export const Forms = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  @media(max-width: 620px){
    flex-direction: column;
    gap: 0;
  }
`

export const SearchInput = styled.input`
  max-width: 450px;
  width: 100%;
  height: 50px;
  border: ${({theme}) => theme.borderTheme};
  margin-top: 20px;
  border-radius: 8px;
  padding-left: 12px;
  font-size: 16px;
  color: #8f8f8f;
  background: transparent;
`

export const SubmitButton = styled.button`
  height: 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  padding: 10px 5px;
  background: ${({theme}) => theme.primary};
  color: #fff;
  width: 200px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #000;
  }

  @media (max-width: 620px) {
    height: auto;
    padding: 5px 10px;
    width: auto;
    border-radius: 3px;
    font-size: 14px;
  }
`
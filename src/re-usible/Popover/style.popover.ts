import styled from 'styled-components'

export const Editor = styled.div`
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
`

export const Lists: any = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 120px;
  padding: 10px 15px;
  text-align: start;

  &:hover {
    background-color: ${({theme}) => theme.mainHover};
    cursor: pointer;
  }
`
import styled from 'styled-components'

export const StyleCart = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
  padding: 10px 10px;
  
  &:hover {
    background: ${({theme}) => theme.iconHover};
    border-radius: 5px;
    cursor: pointer;
    
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderWrapper = styled.div``

export const Username = styled.p`
  color: ${({theme}) => theme.text};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const FullName = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
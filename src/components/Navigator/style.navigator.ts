import styled from 'styled-components'

export const StyleNavigator = styled.div`
  max-width: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100vh;
  border-right: ${({theme}) => theme.borderTheme};
  padding-top: 20px;
  @media(max-width: 1200px){
    max-width: 60px;
  }
`
export const NavigateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const SingleRoute = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 8px;
  gap: 10px;

  &:hover {
    background-color: ${({theme}) => theme.mainHover};
    cursor: pointer;
    color: #5b5b5b;
  }
  
  @media(max-width: 1200px){
    max-width: 50px;
    padding: 12px 14px;
    margin-left: 3px;
  }
`

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`

interface TitleProp {
    active: boolean
}

export const Title = styled.p<TitleProp>`
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 700 : 500)};
  font-style: normal;
  line-height: normal;
  color: ${({theme}) => theme.navigatorColor};
  color: ${(props) => (props.active && '#5b5b5b')};
  
  @media(max-width: 1200px){
    display: none;
  }
`

export const NewPostButton = styled.button`
  width: 102px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({theme}) => theme.primary};
  border: none;
  color: #fff;
  margin-left: 20px;
  cursor: pointer;
  
  &:hover{
    opacity: 0.8;
  }
`
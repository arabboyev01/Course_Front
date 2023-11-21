import styled from 'styled-components'

export const StyleNavigator = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100vh;
  border-right:  ${({theme}) => theme.borderTheme};
  padding-top: 30px;
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
  padding: 10px 20px;
  border-radius: 8px;
  gap: 10px;
  &:hover {
    background-color: ${({theme}) => theme.mainHover};
    cursor: pointer;
  }
`
interface TitleProp {
    active: boolean
}
export const Title = styled.p<TitleProp>`
  font-size: 22px;
  font-weight: ${(props) => (props.active ? 700 : 500)};

`
import styled, { css } from 'styled-components'

export const StyleTags = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  @media (max-width: 820px) {
    max-width: 300px;
  }
  border-left: ${({theme}) => theme.borderTheme};
  padding-left: 20px;
`
export const Subtitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({theme}) => theme.text};
  margin-top: 20px;
  margin-left: 10px;
`

export const TagsWrapper = styled.div`
  margin: 20px 0;
  max-width: 300px;
  height: 300px;
  border: ${({theme}) => theme.borderTheme};
  border-radius: 8px;
  overflow: hidden;
  overflow-y: scroll;

`
interface TitleProp {
    active: boolean
}
export const TagsText: any = styled.div<TitleProp>`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 30px;
  color: #8f8f8f;

  ${({active}: any) => active && css`
    color: #308efe;
    background-color: ${({theme}) => theme.mainHover};
    border-bottom: ${({theme}) => theme.borderTheme};
    border-top: ${({theme}) => theme.borderTheme};
  `}
  &:hover {
    background: ${({theme}) => theme.mainHover};
  }
`
export const TagsTitle = styled.p`
  text-transform: capitalize;
  color: #303030;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const SumPost = styled.p`
  font-style: italic;
  color: #686868;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`
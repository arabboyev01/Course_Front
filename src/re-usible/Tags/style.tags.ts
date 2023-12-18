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
  min-height: 300px;
  max-height: 450px;
  border: ${({theme}) => theme.borderTheme};
  border-radius: 8px;
  overflow: hidden;
  overflow-y: scroll;

`
export const TagsText: any = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 30px;
  color: #8f8f8f;

  &:hover {
    background: ${({theme}) => theme.mainHover};
  }
`

interface TitleProp {
    active: boolean
}

export const TagsTitle = styled.p<TitleProp>`
  text-transform: capitalize;
  color: ${({theme}) => theme.navigatorColor};;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  ${({active}: any) => active && css`
    color: #008ABF;
  `}
`

export const SumPost = styled.p<TitleProp>`
  font-style: italic;
  color: #686868;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  ${({active}: any) => active && css`
    color: #008ABF;
  `}
`
export const Line = styled.div<TitleProp>`
  height: 0.3px;
  width: 130px;
  background: #686868;

  ${({active}: any) => active && css`
    background: #008ABF;
  `}
`
export const CheckImage = styled.img`
  object-fit: contain;
`

export const user = {
    display: 'block',
    width: '100%',
    padding: 'var(--mantine-spacing-md)',
    color: 'light-dark(var(--mantine-color-black), var(--mantine-color-dark-0))',
    '@mixin hover': {
        backgroundColor: `light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))`
    }
}
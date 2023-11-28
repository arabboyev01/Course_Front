import styled from 'styled-components'

export const StyleUserPost = styled.div`
  max-width: 850px;
  margin: 80px auto 0 auto;
  border-top: ${({theme}) => theme.borderTheme};
`

export const PostGrid = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 20px;
  gap: 3px;
`

export const GridItem = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`
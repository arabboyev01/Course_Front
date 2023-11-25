import styled from 'styled-components'

export const BookmarkWrapper = styled.div`
  width: 100%;
  position: fixed;
  @media (max-width: 820px) {
    margin: 50px 10px;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    row-gap: 50px;
    column-gap: 10px;
  }
`

export const BodyBookmark = styled.div`
  display: flex;
  max-width: 1330px;
  margin: 80px auto 0 auto;
  column-gap: 30px;
  justify-content: space-between;
  height: 80vh;
  width: 100%;
`
export const StyleBookmark = styled.div`
 width: 100%;
`
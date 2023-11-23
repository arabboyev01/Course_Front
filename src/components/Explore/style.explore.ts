import styled from 'styled-components'

export const StyleExplore = styled.div`
  width: 100%;
  position: fixed;
  padding-top: 100px;
  top: -20px;
  height: 100%;
`
export const ExploreBody = styled.div`
  display: flex;
  max-width: 1330px;
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  column-gap: 30px;
  justify-content: space-between;
  @media (max-width: 820px) {
    margin: 50px 10px;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    row-gap: 50px;
    column-gap: 10px;
  }
`

export const ExploreContent = styled.div`
  width: 80%;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
  padding-top: 30px;
`
export const LoaderContent = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ExploreItem = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border: 1px solid #ddd;
  overflow: hidden;
`
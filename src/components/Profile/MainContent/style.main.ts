import styled from 'styled-components'

export const Left = styled.div`
  width: auto;
`

export const Right = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`
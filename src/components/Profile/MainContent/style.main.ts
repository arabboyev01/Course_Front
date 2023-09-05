import styled from 'styled-components'

export const Left = styled.div`
  width: 300px;
`

export const Right = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`
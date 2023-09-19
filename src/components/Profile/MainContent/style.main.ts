import styled from 'styled-components'

export const Left = styled.div`
  width: auto;
`

export const Right = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 85vh;
  display: flex;
  margin: 30px auto 0 auto;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
  @media (max-width: 650px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
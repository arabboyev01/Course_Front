import styled from 'styled-components';

export const HomeStyle = styled.div`
  width: 100%;
  position: fixed;
  margin-top: 100px;
`
export const BodyWrapper = styled.div`
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

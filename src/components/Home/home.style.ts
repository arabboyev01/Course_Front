import styled from 'styled-components';

export const HomeStyle = styled.div`
  width: 100%;
  position: fixed;
  padding-top: 60px;
   @media (max-width: 440px) {
    padding-top: 0;
  }
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
  @media (max-width: 440px) {
    height: 100vh;
    column-gap: 0;
    margin: 10px;
  }
`

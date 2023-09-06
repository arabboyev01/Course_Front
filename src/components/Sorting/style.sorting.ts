import styled from 'styled-components'

export const StyleSorting = styled.div`
  max-width: 1330px;
  margin: 80px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 0.2px solid #727171;
  @media(max-width: 820px){
    margin: 80px 20px 0 20px;
  }
`
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Times = styled.div`

`

export const SubText = styled.p`
  font-size: 14px;
  color: rgb(190, 198, 200);
`

export const SearchWrapper = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius:5px;
  margin-top: 8px;
  @media(max-width: 820px){
    position: absolute;
    z-index: 100;
    right: 10px;
    top: 200px;
  }
`;


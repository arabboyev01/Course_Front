import styled from 'styled-components'

export const StyleSorting = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
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

export const Text = styled.p`
  font-size: 18px;
  color: rgba(58, 62, 65);
`
export const SubText = styled.p`
  font-size: 14px;
  color: rgb(190, 198, 200);
`

export const SearchWrapper = styled.div`
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
`;

export const SearchIcon = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  object-fit: contain;
  cursor: pointer;
`;

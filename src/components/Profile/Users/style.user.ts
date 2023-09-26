import styled from 'styled-components'

export const StyleUser = styled.div`
  max-width: 1000px;
  margin: 50px auto 20px auto;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
`

export const TableContainer = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: ${({theme}) => theme.body};
  border: ${({theme}) => theme.borderTheme};
  text-align: left;
  padding: 10px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({theme}) => theme.body};
  }
`;

export const TableCell = styled.td`
  border: ${({theme}) => theme.borderTheme};
  text-align: left;
  padding: 10px;
`;

export const UpdateButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Images: any = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  object-fit: cover;
`

export const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
`

export const Option = styled.option`

`
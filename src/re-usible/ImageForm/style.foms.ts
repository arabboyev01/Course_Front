import styled from 'styled-components';

export const ImageFormStyle = styled.div`
  width: 350px;
`
export const StyledFileInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:  ${({theme}) => theme.borderTheme};
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  max-width: 350px;
  height: 200px;
  font-weight: 400;
  color:  ${({theme}) => theme.text};
  width: 100%;
  background-size: cover;
  background-position: center center;

  input[type='file'] {
    display: none;
  }
`;
export const FileWrapper = styled.div`
  position: relative;
  background:  ${({theme}) => theme.body};
  width: 100%;
`
export const InputSpace = styled.div`
 margin: 20px 0;
`

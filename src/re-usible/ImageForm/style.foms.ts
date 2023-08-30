import styled from 'styled-components';

export const StyledFileInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: .5px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  max-width: 350px;
  height: 200px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);

  input[type='file'] {
    display: none;
  }
`;



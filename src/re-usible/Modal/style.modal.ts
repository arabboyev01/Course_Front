import styled from "styled-components"

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border:${({theme}) => theme.borderTheme};
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.body};
`

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const FileInput = styled.input`
  display: none;
`;

export const UploadButton = styled.label`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #2980b9;
  }
`;

export const FileName = styled.div`
  margin-top: 10px;
  text-align: center;
`;
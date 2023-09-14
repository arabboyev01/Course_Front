import styled from "styled-components"
export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '.2px solid rgba(0, 0, 0, 0.3)',
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

// Create a styled component for the file input
export const FileInput = styled.input`
  display: none;
`;

// Create a styled component for the custom upload button
export const UploadButton = styled.label`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

// Create a styled component for displaying the selected file name
export const FileName = styled.div`
  margin-top: 10px;
  text-align: center;
`;
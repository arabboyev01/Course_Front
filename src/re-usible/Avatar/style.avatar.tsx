import styled from "styled-components"

export const AddReviewButton = styled.button`
  background: ${({theme}) => theme.primary};
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 0 3rem;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: #000;
    color: #fff;
  }
`
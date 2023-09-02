import styled from "styled-components"

export const StyleAvatar = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: #fff;
  z-index: 1000;
  top: 110%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: .1px solid rgba(0, 0, 0, 0.1);
`
export const AddReviewButton = styled.button`
  background: #308efe;
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 0 3rem;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`
export const Text = styled.p`
  font-weight: 300;
  color: #333;
  width: 100%;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  border-bottom: .1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background: #ddd;
    
  }
`
export const LogOut = styled.div`
  font-weight: 300;
  color: #bf0000;
  width: 100%;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`
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
import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;
  padding: 0 10px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 38px;
`;

export const DropdownOptions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  z-index: 1;
  width: 150px;
`;

export const DropdownOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover{
    background: #ccc;
  }
`;
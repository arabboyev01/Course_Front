import styled from "styled-components";

export const FormStyle = styled.div`
  height: auto;
`
export const FormWrapper = styled.div`
position: relative;
`
export const TagsSuggested = styled.div`
  position: absolute;
  top: 60px;
  background: #fff;
  z-index: 100;
`

export const Divider = styled.div`
  margin-top: 50px;
`

export const SelectedWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  max-width: 350px;
  padding: 10px 0;
  gap: 10px;
  background: #fff;
  top: -40px;
  overflow: hidden;
`
export const Selected = styled.p`
  color: #151414;
  font-style: italic;
  font-size: 15px;
  font-weight: 300;
`
export const ListWrapper = styled.ul`
  max-width: 350px;
  width: 100%;
  min-width: 300px;
  max-height: 150px;
  list-style: none;
  padding-bottom: -10px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: scroll;
`

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ListItem = styled.li`
  cursor: pointer;
  padding: 15px;
  display: flex;
  align-items: center;
  
  &:hover {
    background: #ddd;
    border-radius: 8px;
  }
`
export const GroupList = styled.li`
  cursor: pointer;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #ddd;
    border-radius: 8px;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`




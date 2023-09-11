import styled from "styled-components"

export const StyleComment = styled.div`
  max-width: 800px;
  height: auto;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  padding: 20px 0;
  margin: 25px 0;
`

export const InputWrapper = styled.div`
 display: flex;
  align-items: center;
  gap: 25px;
`

export const CommentButton = styled.button`
  color: #499DD0;
  margin-left: -10px;
  padding-top: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const sendStyle = {
    fontSize: "2rem",
     color: "#499DD0",
}

export const CommentWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin: 80px 0 0 50px;
  row-gap: 10px;
`
export const SingleComment = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  gap: 25px;
   border: 1px solid rgba(0, 0, 0, 0.1);
  width: 80%;
  border-radius: 20px;
`
export const CommentText = styled.p`
`
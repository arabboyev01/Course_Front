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
  margin-bottom: 80px;
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
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const SingleComment = styled.div`
  align-items: center;
  gap: 25px;
  width: 50%;
  height: auto;
`
export const CommentText = styled.p`
  font-weight: 500;
  padding: 15px 0;
`

export const UsernameText = styled.p`
  color: orangered;
  font-weight: 900;
  font-style: italic;
`

export const Dates = styled.p`
 font-weight: 300;
  font-style: italic;
  font-size: 14px;
  color: #8f8f8f;
`
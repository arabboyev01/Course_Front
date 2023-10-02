import styled from 'styled-components'

export const StyleComment = styled.div`
  max-width: 800px;
  height: auto;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  padding: 20px 0;
  margin: 100px 0 25px 0;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  gap: 25px;
  position: relative;
`

export const CommentButton = styled.button`
  color: #499DD0;
  margin-left: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 50px;
  height: 45px;
  margin-top: 40px;
  
  &:hover {
    background: ${({theme}) => theme.iconHover};
    border-radius: 30px;
    cursor: pointer;
  }
`
export const EmojiWrapper = styled.div`
  width: 50px;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  
  &:hover {
    background: ${({theme}) => theme.mainHover};
    border-radius: 50%;
    cursor: pointer;
  }
`
export const EmojiHandlers = styled.div`
 position: absolute;
  z-index: 100;
  bottom: 100px;
  left: 20px;
`

export const sendStyle = {
    fontSize: '2rem',
    color: '#499DD0',
}

export const CommentWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 40px 0;
`
export const SingleComment = styled.div`
  align-items: center;
  gap: 25px;
  width: 80%;
  height: auto;
  background: ${({theme}) => theme.iconHover};
  border-radius: 8px;
  padding-bottom: 20px;
`
export const CommentText = styled.p`
  font-weight: 400;
  padding: 20px 10px 10px 10px;
`

export const UsernameText = styled.p`
  color:  ${({theme}) => theme.text};
  font-weight: 500;
  font-style: italic;
  padding: 10px 0 0 10px;
`

export const Dates = styled.p`
  font-style: italic;
  font-size: 14px;
  font-weight: 400;
  color: #8f8f8f;
  padding-left: 10px;
  margin-top: 5px;
`
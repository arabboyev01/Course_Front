import styled from 'styled-components'

export const UserHeaderStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 30px;
`

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`
export const UserWrapper = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 20px;
`
export const UserDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
export const Username = styled.h2`
  font-weight: 400;
  --base-line-clamp-line-height: 25px;
  font-size: 18px;
`

export const MessageBtn = styled.div`
  border: none;
  background: ${({theme}) => theme.mainHover};
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: .9;
  }
`

export const Posts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const PostNumber = styled.h4`
 color: ${({theme}) => theme.navigatorColor};
  font-weight: 500;
`
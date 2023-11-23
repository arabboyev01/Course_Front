import styled from 'styled-components'

export const ReviewCartComponent = styled.div`
  max-width: 800px;
  width: 100%;
  @media (max-width: 430px) {
    padding: 0 10px;
  }
`
export const StyleCart = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0 auto 50px auto;
  height: 100%;
  overflow-y: scroll;
  @media (max-width: 820px) {
    max-width: 900px;
  }
  @media(max-width: 430px){
    max-width: 410px;
  }
`
export const MainCartWrapper = styled.div`
  max-width: 880px;
  width: 100%;
  @media (max-width: 650px) {
    padding-bottom: 20px;
  }
`

export const ControlButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const MainLike = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`
export const Likes = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({theme}) => theme.iconHover};
    border-radius: 50px;
    cursor: pointer;
  }
`

export const TotalLike = styled.p`
  font-size: 16px;
  font-weight: 600;
`
export const Dots: any = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({theme}) => theme.iconHover};
    border-radius: 30px;
    cursor: pointer;
  }
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) {
    margin-right: 10px;
  }
`
export const CartWrapper: any = styled.div`
  padding: 20px;
  color: #333;
  border-bottom: ${({theme}) => theme.borderTheme};
  @media (max-width: 650px) {
    padding: 8px 0;
  }
`
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 20px 12px 0;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const UserInfo = styled.div`
 
`
export const Name = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const UserName = styled.p`
  color: ${({theme}) => theme.text};
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
`

export const CartDetail = styled.div`
  margin: 12px 0;
`
export const Time = styled.p`
  font-size: 14px;
  color: #8f8f8f;
  font-weight: 400;
`
export const ReviewName = styled.h2`
  font-weight: 500;
  color: ${({theme}) => theme.text};
  margin: 12px 0;
  
   @media(max-width: 440px){
    font-size: 18px;
  }
`

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  font-weight: 400;
  color: #8f8f8f;
  
   @media(max-width: 440px){
    font-size: 14px;
  }
`
export const RatingText = styled.p`
  font-style: italic;
  font-size: 15px;
  font-weight: 700;
`

export const Images = styled.img`
  object-fit: cover;
  margin: 10px 0;
  max-width: 880px;
  width: 100%;
  height: 400px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Tags = styled.p`
  font-size: 15px;
  color: ${({theme}) => theme.tags};
  margin: 15px 0;
  font-style: italic;
  font-weight: 600;
`

export const ReadMoreButton = styled.button`
  background: transparent;
  border: none;
  color: #8f8f8f;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease;
  border-radius: 5px;

  &:hover {
    gap: 5px;
  }

  @media (max-width: 650px) {
    margin-bottom: 10px;
  }
`
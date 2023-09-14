import styled from 'styled-components'

export const StyleCart = styled.div`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 820px) {
    max-width: 900px;
  }
`
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`
export const MainCartWrapper = styled.div`
  max-width: 880px;
  width: 100%;
  @media (max-width: 650px) {
    padding-bottom: 20px;
  }
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 650px){
    margin-right: 20px;
  }
`
export const CartWrapper: any = styled.div`
  padding: 20px;
  color: #333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  @media (max-width: 650px) {
    padding: 8px;
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


export const UserName = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-style: oblique;
  color: #000;
`

export const CartDetail = styled.div`
  margin: 12px 0;
`
export const Time = styled.p`
  font-size: 14px;
  color: #8f8f8f;
  font-weight: 600;
`
export const ReviewName = styled.h2`
  font-weight: 800;
  color: #000;
  margin: 12px 0;
`

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 900;
  color: #8f8f8f;
`
export const RatingText = styled.p`
  font-style: italic;
  font-size: 15px;
  font-weight: 700;
`

export const Images = styled.img`
  object-fit: cover;
  margin: 20px 0;
  border: .5px solid #333;
  max-width: 880px;
  width: 100%;
  height: 400px;
  border-radius: 8px;
`

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Tags = styled.p`
  font-size: 15px;
  color: rgb(39, 39, 225);
  margin: 15px 0;
  font-style: italic;
  font-weight: 700;
`

export const ReadMoreButton = styled.button`
  background: #bf0000;
  border: none;
  color: #dddddd;
  width: 150px;
  height: 35px;
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
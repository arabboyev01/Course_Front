import styled from 'styled-components'

export const StyleCart = styled.div`
  max-width: 880px;
  margin: 0 auto;
  @media(max-width: 820px){
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
`
export const CartWrapper: any = styled.div`
  padding: 20px;
  color: #333;
  border-bottom: .5px solid rgba(0, 0, 0, 0.3);
`
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`


export const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: oblique;
`

export const CartDetail = styled.div`
  margin-top: 25px;
  padding: 12px 0 
`
export const ReviewName = styled.h2`
  font-weight: 800;
  color: #000;
  margin: 12px 0;
`

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  color: #8f8f8f;
`
export const RatingText = styled.p`
 font-style: italic;
  font-size: 15px;
  font-weight: 400;
`

export const Images = styled.img`
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
  border: .5px solid #333;
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
`
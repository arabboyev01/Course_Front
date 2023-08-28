import styled from 'styled-components'

export const StyleCart = styled.div`
  max-width: 1330px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`
export const CartWrapper: any = styled.div`
  border-radius: 10px;
  background-color: ${props => props.color ? '#fff' : 'rgb(123, 188, 214)'};
  padding: 20px;
  color: #333;
`
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: .1px solid #333;
  object-fit: cover;
  padding: 2px;
`

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: oblique;
`

export const CartDetail = styled.div`
  margin-top: 25px;
`

export const Text = styled.p`
  font-size: 15px;
  height: 100px;
`

export const Images = styled.img`
  height: 250px;
  width: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;
  border: .5px solid #333;
`

export const CartFooter = styled.div`
  margin-top: 10px;
`

export const Tags = styled.p`
  font-size: 15px;
  font-style: revert;
  color: rgb(39, 39, 225);
`
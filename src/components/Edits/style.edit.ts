import styled from 'styled-components'

export const StyleEdit = styled.div`
  max-width: 1330px;
  margin: 100px auto 0 auto;
  height: 78vh;
  overflow-y: scroll;
  @media(max-width: 1330px){
    margin: 100px 20px 0 20px;
    height: 90vh;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  
  @media(max-width: 1000px){
    flex-direction: column;
    align-items: center;
  }
`
export const InputWrapper = styled.div`
  max-width: 450px;
  row-gap: 20px;
  width: 100%;
`
export const ImageWrapper = styled.div`
  position: relative;
  max-width: 800px;
  height: 350px;
  width: 100%;
  margin-top: 50px;
`
export const ImageSec = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  
  @media(max-width: 1000px){
    height: 100%;
  }
`
export const Inputs = styled.div`
 margin: 30px 0;
`
export const Span = styled.span`
  color: #8f8f8f;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`
export const MultiRow = styled.div`
  margin: 30px 0 50px 0;
  min-height: 130px;
  max-height: 300px;
  @media(max-width: 1000px){
    margin-bottom: 70px;
  }
`
export const EditDiv = styled.div`
  width: 28px;
  height: 28px;
  background: #000;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: -50px;
  right: 0;
  
  @media(max-width: 1000px){
    bottom: 0;
  }
`
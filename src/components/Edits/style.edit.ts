import styled from 'styled-components'

export const StyleEdit = styled.div`
  max-width: 1330px;
  margin: 150px auto 50px auto;
  height: 72vh;
`

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
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
`
export const ImageSec = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
`
export const Inputs = styled.div`
 margin: 30px 0;
`

export const MultiRow = styled.div`
  margin: 30px 0;
  height: 110px;
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
  bottom: 0;
  right: 0;
`
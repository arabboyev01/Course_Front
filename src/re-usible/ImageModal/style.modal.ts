import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const CloseIcon = styled.div`
  position: absolute;
  right: 3%;
  top: 4%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #333;
    cursor: pointer;
  }
`
export const ModalImage = styled.img`
  max-width: 1300px;
  max-height: 100vh;
  object-fit: contain;

  @media (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`

export const Icon = {
    color: '#fff'
}

export const modal = {
    '&:focus': {
        outline: 'none'
    }
}
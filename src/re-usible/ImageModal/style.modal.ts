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
export const IconsDev = styled.div`
  position: absolute;
  right: 5%;
  top: 4%;
  display: flex;
  align-items: center;
  gap: 20px;
`
export const CloseIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background: #333;
    cursor: pointer;
  }
`

export const ATag = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;

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
import styled, { css } from 'styled-components'

export const StyleTags = styled.div`
  max-width: 450px;
  margin: 0 auto;
  @media(max-width: 820px){
    max-width: 400px;
  }
`
export const Subtitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 800;
  color: #000;
`

export const Text = styled.p`
  margin: 12px 0;
  font-size: 15px;
  line-height: 16px;
  font-weight: 400;
  color: #8f8f8f;
`

export const TagsWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  max-width: 400px;

`

export const TagsText: any = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #8f8f8f;
  border: 0.2px solid rgba(0, 0, 0, 0.3);

  ${({ active }: any) =>
    active &&
    css`
      border: 0.2px solid #308efe;
      color: #308efe;
    `}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
`

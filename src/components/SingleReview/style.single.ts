import styled from 'styled-components';

export const StyleSingle = styled.div`
  max-width: 1330px;
  margin: 80px auto;
`

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const MainWrapper = styled.div`
  margin: 120px 0 20px 0;
`

export const MainImage: any = styled.div`
  max-width: 1050px;
  height: 350px;
  background-image: url(${(props: any) => props.imageUrl});
  border: .1px solid rgba(0, 0, 0, 0.3);
  object-fit: cover;
  margin: 12px 0;
`

export const RatingWrapper = styled.div`
 display: flex;
  align-items: center;
  gap: 10px;
`
export const Text = styled.h2`
  font-weight: 800;
  margin: 12px 0;
`

export const Description = styled.p`
  font-weight: 400;
  max-width: 800px;
`

export const Date = styled.div`
  color: #777676;
`

export const RatingText = styled.p`
  font-weight: 800;
  line-height: 20px;
`
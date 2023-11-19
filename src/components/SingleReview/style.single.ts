import styled from 'styled-components';

export const StyleSingle = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 80px auto;
  @media(max-width: 1330px){
    margin: 80px 20px;
  }
`

export const MainWrapper = styled.div`
  margin: 120px 0 20px 0;
`

export const MainImage: any = styled.img`
  max-width: 1050px;
  width: 100%;
  min-height: 450px;
  max-height: 550px;
  border: .1px solid rgba(0, 0, 0, 0.3);
  object-fit: cover;
  margin: 12px 0;
  border-radius: 8px;
  cursor: pointer;
  
  @media(max-width: 430px){
    max-width: 400px;
    margin-right: 15px;
  }
`

export const RatingWrapper = styled.div`
 display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0;
`
export const Text = styled.h2`
  max-width: 600px;
  font-weight: 800;
  margin: 24px 0;
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
  font-style: italic;
`
export const TagsWrapper = styled.div`
 max-width: 800px;
  display: flex;
  align-items: center;gap: 20px;
  margin: 20px 0;
`
export const Tags = styled.div`
  border: .1px solid rgba(0, 0, 0, 0.3);
  padding: 2px 5px;
`
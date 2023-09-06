import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 30px 40px 50px 40px;
  background: #fff;
  border-radius: 10px;
  margin: 80px 0 0 20px;
  max-width: 800px;
  width: 100%;
  border: .1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 650px) {
    margin: 20px auto 0 auto;
    padding: 30px 0 50px 10px;
    border: none;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 500;
  margin-top: 50px;
`;
export const MainData = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(346px, 1fr));
  grid-gap: 10px;
  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    row-gap: 20px;
  }
`;

export const Sub = styled.p`
  font-size: 16px;
  line-height: 18.8px;
  font-weight: 500;
  color: #455262;
  padding-bottom: 5px;
  padding-left: 5px;
`;

export const SingleField = styled.div`
  max-width: 346px;
`;


export const Submit = styled.button`
  margin-top: 25px;
  margin-left: 10px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #308efe;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`


import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 30px 40px;
  background: #fff;
  border-radius: 10px;
  margin-left: 20px;
  max-width: 800px;

  @media (max-width: 650px) {
    max-width: 430px;
    margin: 20px auto 0 auto;
    padding: 15px;
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


export const AdditionalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-left: 10px;
`;

export const SaveButton = styled.button`
  max-width: 250px;
  height: 64px;
  margin-top: 30px;
`;

export const CodeField = styled.div`
  max-width: 150px;
`;
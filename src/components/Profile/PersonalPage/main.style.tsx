import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 30px 40px 50px 40px;
  background: ${({theme}) => theme.body};
  border-radius: 10px;
  margin: 50px 0 0 20px;
  max-width: 800px;
  width: 100%;
  border: ${({theme}) => theme.borderTheme};
  
  @media (max-width: 650px) {
    margin: 20px auto 50px auto;
    padding: 30px 0 0 10px;
    border: none;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
  padding-bottom: 20px;
  
  @media(max-width: 430px){
     padding: 0 10px;
  }
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
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    row-gap: 30px;
    max-width: 360px;
  }
`;

export const Sub = styled.p`
  font-size: 16px;
  line-height: 18.8px;
  font-weight: 500;
  color: ${({theme}) => theme.subtitle};
  padding-bottom: 5px;
  padding-left: 5px;
`;

export const SingleField = styled.div`
  max-width: 346px;
  @media(max-width: 650px){
    max-width: 360px;
    padding: 0 10px;
  }
`;


export const Submit = styled.button`
  margin-top: 25px;
  margin-left: 10px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: ${({theme}) => theme.primary};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 430px){
    margin-left: 0;
  }
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const EditDiv = styled.div`
 margin-left: 50px;
  margin-top: -20px;
  width: 28px;
  height: 28px;
  background: #000;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const EditIcons = {
   color: "#ddd",
    fontSize: "16px"
}

